package reactauth.reactauthBE.Service.impls;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import reactauth.reactauthBE.Exceptions.NotFoundException;
import reactauth.reactauthBE.Service.AuthService;
import reactauth.reactauthBE.Service.BaseUserService;
import reactauth.reactauthBE.Service.JwtService;
import reactauth.reactauthBE.dtos.request.LoginRequestDTO;
import reactauth.reactauthBE.dtos.request.SignupRequestDTO;
import reactauth.reactauthBE.dtos.response.LoginResponseDTO;
import reactauth.reactauthBE.entity.BaseUser;
import reactauth.reactauthBE.repository.BaseUserRepository;

import java.util.ArrayList;


@AllArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    BaseUserService BaseUserService;
    @Autowired
    JwtService jwtService;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    BaseUserRepository baseUserRepository;


    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public LoginResponseDTO signup(SignupRequestDTO signupRequestDTO) {
        BaseUser baseUser = BaseUserService.save(signupRequestDTO.getEmail(), signupRequestDTO.getPassword(), new ArrayList<>());
        String token = jwtService.generateToken(baseUser);
        LoginResponseDTO loginResponseDTO = modelMapper.map(baseUser, LoginResponseDTO.class);
        loginResponseDTO.setToken(token);
        return loginResponseDTO;
    }

    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO) throws NotFoundException {
        BaseUser baseUser = BaseUserService.getUserByEmailAndPassword(loginRequestDTO.getEmail(),
                bCryptPasswordEncoder.encode(loginRequestDTO.getPassword()));

        String token = jwtService.generateToken(baseUser);
        LoginResponseDTO loginResponseDTO = modelMapper.map(baseUser, LoginResponseDTO.class);
        loginResponseDTO.setToken(token);
        return loginResponseDTO;
    }
}
