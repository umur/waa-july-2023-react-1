package waa.springreactlab6.service;

import waa.springreactlab6.domain.Course;
import waa.springreactlab6.domain.Student;

import java.util.List;

public interface StudentService {
    Student create(Student student);

    List<Student> findAll();

    Student findById(Integer id);

    List<Student> getStudentsByMajor(String major);

    List<Course> getCoursesByStudentId(int studentId);

    Student update(Integer id, Student course);

    void delete(Integer id);
}
