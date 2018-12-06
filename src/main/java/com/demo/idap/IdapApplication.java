package com.demo.idap;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
 @MapperScan(basePackages = "com.demo.idap.mapper")
public class IdapApplication {

    public static void main(String[] args) {
        SpringApplication.run(IdapApplication.class, args);
    }
}
