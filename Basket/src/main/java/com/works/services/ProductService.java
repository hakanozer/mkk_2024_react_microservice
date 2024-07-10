package com.works.services;


import com.works.iFeigns.APIProduct;
import com.works.iFeigns.IProduct;
import com.works.models.APIProducts;
import com.works.models.Products;
import com.works.models.Result;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    final DiscoveryClient discoveryClient;
    final RestTemplate restTemplate;
    final IProduct iProduct;
    final APIProduct apiProduct;


    @CircuitBreaker(name = "cb")
    @Retry(name = "demo-retry", fallbackMethod = "fallBackProduct")
    public List<Result> productList() {
        
        /*
        List<ServiceInstance> instances = discoveryClient.getInstances("product");
        if (instances == null || instances.isEmpty()) {
            return null;
        }
        ServiceInstance serviceInstance = instances.get(0);
        String uri = serviceInstance.getUri().toString();

        Products products = restTemplate.getForObject(uri+"/product/list", Products.class);
        return products.getResult();
         */
        return iProduct.productList().getResult();
    }

    public Object getProducts() {
        return apiProduct.allProduct();
    }

    public List<Result> fallBackProduct() {
        System.out.println("this line call");
        return new ArrayList<Result>();
    }


}
