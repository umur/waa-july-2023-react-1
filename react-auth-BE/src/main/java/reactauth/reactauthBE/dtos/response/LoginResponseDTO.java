package reactauth.reactauthBE.dtos.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactauth.reactauthBE.entity.Role;

import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {

    private long id;
    private String email;
    private boolean isActive;
    private int failedLoginAttempts;
    private List<Role> roles;
    private String token;

}
