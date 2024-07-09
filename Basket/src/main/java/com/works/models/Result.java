package com.works.models;

import java.util.List;

@lombok.Data
public class Result {
    private long pid;
    private String title;
    private String detail;
    private long price;
    private List<Category> categories;
}
