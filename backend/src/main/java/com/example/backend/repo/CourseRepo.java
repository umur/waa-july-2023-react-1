package com.example.backend.repo;

import com.example.backend.entity.Person;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends ListCrudRepository<Person,Integer> {
}
