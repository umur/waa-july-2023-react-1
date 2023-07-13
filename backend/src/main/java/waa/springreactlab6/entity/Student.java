package waa.springreactlab6.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int studentId;

    private String firstName, lastName, email, major;

    @ManyToMany
    private List<Course> courses;
}
