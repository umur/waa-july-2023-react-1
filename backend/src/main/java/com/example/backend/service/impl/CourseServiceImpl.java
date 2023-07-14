package com.example.backend.service.impl;

import com.example.backend.dto.CourseDto;
import com.example.backend.repo.CourseRepo;
import com.example.backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepo courseRepo;
    private final ModelMapper modelMapper;

    @Override
    public List<CourseDto> getAll() {
        var entityList = courseRepo.findAll();
        var result = new ArrayList<CourseDto>();

        entityList.stream().forEach(entity -> {
            var dto = modelMapper.map(entity, CourseDto.class);
            result.add(dto);
        });

        return result;
    }
}
