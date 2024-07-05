package com.works.restcontrollers;

import com.works.entities.Product;
import com.works.services.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("product")
public class ProductRestController {

    final ProductService productService;

    @PostMapping("save")
    public ResponseEntity save(@Valid @RequestBody Product product) {
        return productService.add(product);
    }

    @GetMapping("list")
    public ResponseEntity list() {
        return productService.list();
    }

    @GetMapping("search")
    public ResponseEntity search(@RequestParam String q) {
        return productService.search(q);
    }

}
