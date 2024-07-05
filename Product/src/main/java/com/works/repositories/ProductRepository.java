package com.works.repositories;

import com.works.entities.Product;
import com.works.projections.IProCat;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from PUBLIC.PRODUCT inner join PUBLIC.PRODUCT_CATEGORIES PC on PRODUCT.PID = PC.PRODUCT_PID inner join PUBLIC.CATEGORY C on C.CID = PC.CATEGORIES_CID", nativeQuery = true)
    List<IProCat> joinAll();

    @Query(value = "select p from Product p join fetch p.categories where p.title like concat('%', ?1, '%') or p.detail like concat('%', ?2, '%')")
    List<Product> joinAllSearch(String title, String detail);

    @EntityGraph(attributePaths = "categories")
    @Override
    List<Product> findAll();

    List<Product> findByTitleContainsOrDetailContainsAllIgnoreCase(String title, String detail);

    @Query("""
            select p from Product p left join p.categories categories
            where upper(p.title) like upper(concat('%', ?1, '%')) or upper(p.detail) like upper(concat('%', ?2, '%')) or upper(categories.name) like upper(concat('%', ?3, '%'))""")
    List<Product> customJoinSearch(String title, String detail, String name);

    List<Product> findByTitleContainsOrCategories_NameContainsAllIgnoreCase(String title, String name);


}