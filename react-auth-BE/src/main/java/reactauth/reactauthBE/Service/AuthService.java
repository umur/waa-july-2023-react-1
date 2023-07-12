package reactauth.reactauthBE.Service;

import org.springframework.stereotype.Service;
import reactauth.reactauthBE.dtos.request.LoginRequestDTO;
import reactauth.reactauthBE.dtos.request.SignupRequestDTO;
import reactauth.reactauthBE.dtos.response.LoginResponseDTO;

@Service
public interface AuthService {

    public LoginResponseDTO signup(SignupRequestDTO signupRequestDTO);
    public  LoginResponseDTO login(LoginRequestDTO loginRequestDTO);

}
