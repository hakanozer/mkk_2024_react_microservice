package com.works.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;

    @Size(min = 2, max = 200)
    @NotEmpty
    @NotNull
    @Column(length = 200)
    private String title;

    @Size(min = 2, max = 500)
    @NotEmpty
    @NotNull
    @Column(length = 500)
    private String detail;

    @Max(5000000)
    @Min(1)
    @NotNull
    private Integer price;

}
