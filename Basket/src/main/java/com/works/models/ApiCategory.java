package com.works.models;

import java.time.OffsetDateTime;

@lombok.Data
public class ApiCategory {

    private long id;
    private String name;
    private String image;
    private OffsetDateTime creationAt;
    private OffsetDateTime updatedAt;

}
