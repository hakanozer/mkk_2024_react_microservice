package com.works.iFeigns;

import com.works.models.APIProducts;
import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;

@FeignClient(value = "iProducts", url = "https://api.escuelajs.co/api/v1/")
public interface APIProduct {

    @GetMapping("products")
    Object allProduct();

    @PostMapping("login")
    Object login(@RequestBody APIProducts apiProducts);

}
