package waa.springreactlab6.service;

import waa.springreactlab6.entity.Course;

import java.util.List;

public interface CourseService {
    Course create(Course course);

    List<Course> findAll();

    Course findById(Long id);

    Course update(Long id, Course course);
    void delete(Long id);
}
