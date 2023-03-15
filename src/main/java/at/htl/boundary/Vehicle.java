package at.htl.boundary;


import at.htl.model.Car;
import org.jboss.logging.Logger;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("vehicle")
public class Vehicle {

    @Inject
    Logger log;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Car> getCars(){
        return Car.listAll();

    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Car> addCar(Car car){
        Car.persist(car);
        return getCars();
    }

}
