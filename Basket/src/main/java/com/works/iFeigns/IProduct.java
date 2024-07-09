package com.works.iFeigns;

import com.works.models.Products;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(value = "product")
public interface IProduct {

    @GetMapping("/product/list")
    Products productList();

}
