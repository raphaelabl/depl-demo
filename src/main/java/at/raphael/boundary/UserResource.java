package at.raphael.boundary;

import at.raphael.model.User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import java.util.List;

@Path("user")
public class UserResource {

    @GET
    public List<User> getUsers(){
        return User.listAll();
    }

    @POST
    @Transactional
    public List<User> postUser(User user){
        user.persist();
        return User.listAll();
    }



}
