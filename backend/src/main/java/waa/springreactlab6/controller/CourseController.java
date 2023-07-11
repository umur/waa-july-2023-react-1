package waa.springreactlab6.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import waa.springreactlab6.domain.Course;
import waa.springreactlab6.service.CourseService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    public Course create(@RequestBody Course course){
        return courseService.create(course);
    }

    @GetMapping
    public List<Course> getAll(){
        return courseService.findAll();
    }

    @GetMapping("/{id}")
    public Course getById(@PathVariable Integer id){
        return courseService.findById(id);
    }

    @PutMapping("/{id}")
    public Course update(@PathVariable Integer id, @RequestBody Course course){
        return courseService.update(id, course);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        courseService.delete(id);
    }
}
