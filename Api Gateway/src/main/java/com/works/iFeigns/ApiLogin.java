package com.works.iFeigns;

import com.works.models.UserObj;
import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Map;

@FeignClient(value = "login")
public interface ApiLogin {

    @PostMapping("customer/login")
    UserObj login(@RequestHeader("Authorization") String authorization);

}
