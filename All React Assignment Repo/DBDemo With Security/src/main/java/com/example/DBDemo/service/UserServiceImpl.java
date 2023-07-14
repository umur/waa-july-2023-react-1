package com.example.DBDemo.service;

import com.example.DBDemo.entity.User;
import com.example.DBDemo.entity.UserDTO;
import com.example.DBDemo.reposiroty.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    final private UserRepository userRepository;
    final private ModelMapper modelMapper;

    @Override
    public List<UserDTO> findAll() {
        var entityList = userRepository.findAll();
        var result = new ArrayList<UserDTO>();

        entityList.stream().forEach(entity -> {
            var dto = modelMapper.map(entity, UserDTO.class);
            result.add(dto);
        });


        return result;
    }

    @Override
    public UserDTO findById(long id) {
        return modelMapper.map(userRepository.findById(id), UserDTO.class);
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

}
