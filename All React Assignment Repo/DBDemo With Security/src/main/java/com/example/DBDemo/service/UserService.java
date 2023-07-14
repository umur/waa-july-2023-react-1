package com.example.DBDemo.service;

import com.example.DBDemo.entity.User;
import com.example.DBDemo.entity.UserDTO;

import java.util.List;

public interface UserService {


    List<UserDTO> findAll();

    UserDTO findById(long id);
    void saveUser(User user);
}
