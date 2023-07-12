package reactauth.reactauthBE.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactauth.reactauthBE.Service.AuthService;
import reactauth.reactauthBE.dtos.request.LoginRequestDTO;
import reactauth.reactauthBE.dtos.request.SignupRequestDTO;

@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthController {


    @Autowired
    AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequestDTO requestData) {
        return new ResponseEntity(authService.signup(requestData), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return new ResponseEntity(authService.login(loginRequestDTO), HttpStatus.OK);
    }


}
