package com.example.backend.repo;

import com.example.backend.entity.Person;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepo extends ListCrudRepository<Person,Integer> {
}
