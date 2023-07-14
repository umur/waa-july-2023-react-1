package reactauth.reactauthBE.Service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import reactauth.reactauthBE.Exceptions.NotFoundException;
import reactauth.reactauthBE.entity.BaseUser;
import reactauth.reactauthBE.entity.Role;

import java.util.List;

@Service
public interface BaseUserService {

    BaseUser save(String email, String password, List<Role> roles);

    public BaseUser getUserByEmailAndPassword(String name, String password) throws NotFoundException;
    public BaseUser getByEmail(String email);

    void changePassword( BaseUser user,String password);

}
