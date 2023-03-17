package at.htl.boundary;

import at.htl.model.User;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
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
