package waa.springreactlab6.service;

import waa.springreactlab6.domain.Course;

import java.util.List;

public interface CourseService {
    Course create(Course course);

    List<Course> findAll();

    Course findById(Integer id);

    Course update(Integer id, Course course);
    void delete(Integer id);
}
