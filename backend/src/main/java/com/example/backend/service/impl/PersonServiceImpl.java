package com.example.backend.service.impl;

import com.example.backend.dto.PersonDto;
import com.example.backend.repo.PersonRepo;
import com.example.backend.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

    private final PersonRepo personRepo;
    private final ModelMapper modelMapper;

    @Override
    public List<PersonDto> getAll() {
        var entityList = personRepo.findAll();
        var result = new ArrayList<PersonDto>();

        entityList.stream().forEach(entity -> {
            var dto = modelMapper.map(entity, PersonDto.class);
            result.add(dto);
        });

        return result;
    }

    @Override
    public PersonDto getById(int id) {
       var personInDB =personRepo.findById(id);
        var dto = modelMapper.map(personInDB,PersonDto.class);
        return  dto;
    }
}
