package at.raphael.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="U_IMAGE")
public class Image extends PanacheEntity {

    public String url;

    public String text;

    public Image() {
    }

    public Image(String url, String text) {
        this.url = url;
        this.text = text;
    }
}
