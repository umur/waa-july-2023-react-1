package waa.springreactlab6.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import waa.springreactlab6.entity.Course;
import waa.springreactlab6.entity.Student;

import java.util.List;

@Repository
public interface StudentRepository extends ListCrudRepository<Student, Long> {
    List<Student> findByMajor(String major);
    List<Course> findByStudentId(long id);
}
