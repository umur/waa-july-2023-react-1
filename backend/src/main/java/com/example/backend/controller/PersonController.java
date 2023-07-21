package com.example.backend.controller;

import com.example.backend.dto.PersonDto;
import com.example.backend.entity.Person;
import com.example.backend.service.PersonService;
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
    public Person getById(@PathVariable Integer id){

        return personService.getById(id);
    }

    @PostMapping
    public void save(@RequestBody Person person){
        personService.create(person);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody Person person) {
        if (id > 0)
            person.setId(id);
        personService.create(person);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        personService.deleteById(id);
    }
}
