package com.example.backend.controller;

import com.example.backend.dto.PersonDto;
import com.example.backend.service.PersonService;
import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
@RequiredArgsConstructor
@CrossOrigin
public class PersonController {

    private final PersonService personService;

    @GetMapping
    public List<PersonDto> getAll(){
        return personService.getAll();
    }
    @GetMapping("/{id}")
    public PersonDto getById(@PathVariable int id){
        return personService.getById(id);
    }

}
