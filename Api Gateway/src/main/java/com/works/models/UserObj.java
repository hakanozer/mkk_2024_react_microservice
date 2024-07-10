package com.works.models;

import java.util.List;

@lombok.Data
public class UserObj {
    private List<Authority> authorities;
    private Details details;
    private boolean authenticated;
    private Principal principal;
    private Object credentials;
    private String name;
}
