package waa.springreactlab6.domain;

import lombok.Data;
import java.util.List;

@Data
public class Student {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String major;
    private List<Course> coursesTaken;
}
