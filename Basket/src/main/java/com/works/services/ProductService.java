package com.works.services;

import lombok.RequiredArgsConstructor;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    final DiscoveryClient discoveryClient;

    public String productList() {
        List<ServiceInstance> instances = discoveryClient.getInstances("product");
        if (instances == null || instances.isEmpty()) {
            return null;
        }
        ServiceInstance serviceInstance = instances.get(0);
        String uri = serviceInstance.getUri().toString();
        return uri;
    }


}
