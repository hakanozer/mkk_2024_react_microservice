package com.works.services;

import com.works.entities.Product;
import com.works.repositories.ProductRepository;
import com.works.utils.Utils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    final ProductRepository productRepository;

    public ResponseEntity add(Product product) {
        productRepository.save(product);
        return Utils.ok(product);
    }

    public ResponseEntity list() {
        return Utils.ok(productRepository.findAll());
    }

    public ResponseEntity search(String q) {
        String like = q;
        List<Product> list = productRepository.joinAllSearch(like,like);
        return Utils.ok(list);
    }

}
