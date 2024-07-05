package com.works.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;

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

    @ManyToMany(fetch = FetchType.LAZY)
    @Fetch( FetchMode.SELECT )
    private List<Category> categories;

}
