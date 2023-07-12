package reactauth.reactauthBE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import reactauth.reactauthBE.entity.BaseUser;

import java.util.Optional;

@Repository
public interface BaseUserRepository extends JpaRepository<BaseUser,Long> {

    public BaseUser findByEmailAndPassword(String email, String password);
    public Optional<BaseUser> findByEmail(String email);
}
