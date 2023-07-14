package com.example.backend.service;

import com.example.backend.dto.CourseDto;
import com.example.backend.dto.PersonDto;

import java.util.List;

public interface CourseService {

    List<CourseDto> getAll();

}
