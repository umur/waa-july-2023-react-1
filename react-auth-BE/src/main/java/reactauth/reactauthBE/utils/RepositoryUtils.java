package reactauth.reactauthBE.utils;

public class RepositoryUtils {

    public static String searchFormatter(String s){
        return s.equals("") ?s:"%"+s+"%";
    }
}
