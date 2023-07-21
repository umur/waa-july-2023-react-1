package com.example.backend.service;

import com.example.backend.dto.PersonDto;
import com.example.backend.entity.Person;

import java.util.List;

public interface PersonService {
    List<PersonDto> getAll();

    public Person getById(Integer id);

    public void create(Person person);

    void deleteById(int id);
}
