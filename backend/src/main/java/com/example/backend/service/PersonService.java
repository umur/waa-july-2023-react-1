package com.example.backend.service;

import com.example.backend.dto.PersonDto;

import java.util.List;

public interface PersonService {

    List<PersonDto> getAll();

    PersonDto getById(int id);
}
