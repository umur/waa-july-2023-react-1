package com.example.backend.service;

import com.example.backend.dto.PersonDto;
import com.example.backend.entity.Person;
import com.example.backend.repo.PersonRepo;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

    private final PersonRepo personrepo;

    private final ModelMapper modelMapper;
    @Override
    public List<PersonDto> getAll() {
        var entityList=  personrepo.findAll();
        var result = new ArrayList<PersonDto>();
        entityList.stream().forEach(entity->{
           var dto= modelMapper.map(entity,PersonDto.class);
           result.add(dto);
        } );
         return result;
    }
    @Override
    public Person getById(Integer id) {
        return personrepo.findById(id).get();
    }
    @Override
    public void create(Person person) {
        personrepo.save(person);
    }

    @Override
    public void deleteById(int id) {
        personrepo.deleteById(id);
    }
}
