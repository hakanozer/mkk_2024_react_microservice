package com.works.models;

import java.time.OffsetDateTime;
import java.util.List;

public class APIProducts {

    private long id;
    private String title;
    private long price;
    private String description;
    private List<String> images;
    private OffsetDateTime creationAt;
    private OffsetDateTime updatedAt;
    private ApiCategory category;


}
