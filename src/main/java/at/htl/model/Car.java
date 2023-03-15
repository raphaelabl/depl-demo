package at.htl.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;

@Entity
public class Car extends PanacheEntity {

    public String model;

    public String brand;

    public Car(String model, String brand) {
        this.model = model;
        this.brand = brand;
    }

    public Car() {

    }
}
