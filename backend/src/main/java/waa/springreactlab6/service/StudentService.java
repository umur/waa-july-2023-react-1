package waa.springreactlab6.service;

import waa.springreactlab6.entity.Course;
import waa.springreactlab6.entity.Student;

import java.util.List;

public interface StudentService {
    Student create(Student student);

    List<Student> findAll();

    Student findById(Long id);

    List<Student> getStudentsByMajor(String major);

    List<Course> getCoursesByStudentId(Long studentId);

    Student update(Long id, Student course);

    void delete(Long id);
}
