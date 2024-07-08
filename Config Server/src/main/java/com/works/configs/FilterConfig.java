package com.works.configs;

import jakarta.servlet.*;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

//@Configuration
public class FilterConfig implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    }

}
