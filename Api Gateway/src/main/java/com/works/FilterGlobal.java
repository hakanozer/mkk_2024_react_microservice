package com.works;

public class FilterGlobal {

}
/*
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Map;

@Configuration
public class FilterGlobal implements GlobalFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        Object body = exchange.getAttribute("cachedRequestBodyObject");
        String path = exchange.getRequest().getPath().toString();
        ServerHttpResponse response = exchange.getResponse();
        ServerHttpRequest request = exchange.getRequest();
        //response.getHeaders().add("Content-Type", "application/json;charset=UTF-8");
        String url = request.getURI().toString();

        HttpHeaders headers = request.getHeaders();
        headers.forEach( (k, v) -> {
           System.out.println(k + " - " + v);
        });
        //response.setStatusCode(HttpStatus.BAD_REQUEST);
        Map<String,  Object> hm = exchange.getAttributes();
        Mono<Void> mono = chain.filter(exchange);
        return mono;
    }

}
 */
