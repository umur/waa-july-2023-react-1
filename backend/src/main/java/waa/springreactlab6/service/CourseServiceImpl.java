package waa.springreactlab6.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import waa.springreactlab6.entity.Course;
import waa.springreactlab6.repository.CourseRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CourseServiceImpl implements CourseService{

    private final CourseRepository courseRepository;

    @Override
    public Course create(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course findById(Long id) {
        return courseRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Course with id: "+id+" not found"));
    }

    @Override
    public Course update(Long id, Course course) {
        Course existingCourse = findById(id);
        existingCourse.setName(course.getName());
        existingCourse.setCode(course.getCode());
        existingCourse.setStudents(course.getStudents());
        return courseRepository.save(existingCourse);
    }

    @Override
    public void delete(Long id) {
        courseRepository.deleteById(id);
    }
}
