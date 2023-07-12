package reactauth.reactauthBE.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import reactauth.reactauthBE.entity.BaseUser;

@Service
public interface JwtService {

    String extractUserName(String token);

    public String generateToken(BaseUser baseUser);

    boolean isTokenValid(String token, UserDetails userDetails);

}
