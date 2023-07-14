package com.example.backend.dto;

import jakarta.persistence.GeneratedValue;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDto {

    private int id;

    private String name;

    private int age;

    private String email;
}
