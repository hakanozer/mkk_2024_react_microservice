package com.works.models;

import java.util.List;

@lombok.Data
public class Principal {
    private Object password;
    private String username;
    private List<Authority> authorities;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;
}