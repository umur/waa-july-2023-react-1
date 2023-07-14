package com.example.DBDemo.controller;


import com.example.DBDemo.entity.User;
import com.example.DBDemo.entity.UserDTO;
import com.example.DBDemo.reposiroty.UserRepository;
import com.example.DBDemo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    final private UserService userService;

    @GetMapping
    public List<UserDTO> findAll(){
        return userService.findAll();
    }



    @GetMapping("/{id}")
    public UserDTO findById(@PathVariable long id){
        return userService.findById(id);
    }

    @PostMapping
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }
}
