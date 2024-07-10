package com.works.configs;

import com.works.iFeigns.ApiLogin;
import com.works.models.Authority;
import com.works.models.UserObj;
import feign.Headers;
import io.micrometer.tracing.Tracer;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Configuration
public class FilterConfig implements Filter {

    final Tracer tracer;
    final ApiLogin apiLogin;
    public FilterConfig(Tracer tracer, ApiLogin apiLogin) {
        this.tracer = tracer;
        this.apiLogin = apiLogin;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        String url = req.getRequestURI();
        System.out.println(url);
        if(url.equals("/customer/login")) {
            filterChain.doFilter(req, res);
        }else {
            try {
                String token = req.getHeader("Authorization");
                UserObj loginObj = apiLogin.login(token);
                List<Authority> roles = loginObj.getAuthorities();
                boolean status = false;
                for (Authority role : roles) {
                    if ( url.contains(role.getAuthority().replace("ROLE_", ""))) {
                        status = true;
                        break;
                    }
                }
                if (status) {
                    String spanId = tracer.currentSpan().context().spanId();
                    String traceId = tracer.currentSpan().context().traceId();
                    res.setHeader("spanId", spanId);
                    res.setHeader("traceId", traceId);
                    filterChain.doFilter(req, res);
                }else {
                    PrintWriter printWriter = res.getWriter();
                    res.setContentType("application/json");
                    printWriter.write("{ \"status\": false, \"message\": \"Permisson Fail\" }");
                    res.setStatus(HttpServletResponse.SC_FORBIDDEN);
                }

            }catch (Exception e) {
                System.out.println(e);
                PrintWriter printWriter = res.getWriter();
                res.setContentType("application/json");
                printWriter.write("{ \"status\": false, \"message\": \"Plase Login\" }");
                res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            }
        }
    }

}
