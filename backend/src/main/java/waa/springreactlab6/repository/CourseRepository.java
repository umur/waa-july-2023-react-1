package waa.springreactlab6.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import waa.springreactlab6.entity.Course;

@Repository
public interface CourseRepository extends ListCrudRepository<Course, Long> {
}
