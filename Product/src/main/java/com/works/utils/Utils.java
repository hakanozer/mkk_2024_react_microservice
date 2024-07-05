package com.works.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.sound.sampled.Line;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class Utils {

    public static ResponseEntity ok(Object obj) {
        Map m = new LinkedHashMap();
        m.put("status", true);
        m.put("result", obj);
        return new ResponseEntity(m, HttpStatus.OK);
    }

    public static ResponseEntity fail( Object obj, HttpStatus httpStatus ) {
        Map m = new LinkedHashMap();
        m.put("status", false);
        m.put("result", obj);
        return new ResponseEntity(m, httpStatus);
    }

}
