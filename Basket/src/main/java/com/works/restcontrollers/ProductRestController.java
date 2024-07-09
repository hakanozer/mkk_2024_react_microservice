package com.works.restcontrollers;

import com.works.models.APIProducts;
import com.works.models.Result;
import com.works.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("basket")
@RequiredArgsConstructor
public class ProductRestController {

    final ProductService productService;

    @GetMapping("product")
    public List<Result> getPro() {
        return productService.productList();
    }

    @GetMapping("apiProduct")
    public Object apiProduct() {
        return productService.getProducts();
    }
}
