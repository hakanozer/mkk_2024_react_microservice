package com.works.restcontrollers;

import com.works.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("basket")
@RequiredArgsConstructor
public class ProductRestController {

    final ProductService productService;

    @GetMapping("product")
    public String getPro() {
        return productService.productList();
    }
}
