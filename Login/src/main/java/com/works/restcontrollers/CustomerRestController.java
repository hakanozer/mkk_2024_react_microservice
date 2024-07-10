package com.works.restcontrollers;

import com.works.entities.Customer;
import com.works.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
@RequiredArgsConstructor
public class CustomerRestController {

    final CustomerService customerService;

    @PostMapping("register")
    public Customer register(@RequestBody Customer customer){
        return customerService.register(customer);
    }

    @PostMapping("login")
    public Authentication login() {
        return customerService.login();
    }

}
