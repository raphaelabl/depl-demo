package at.htl.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="U_TABLE")
public class Image extends PanacheEntity {

    public String url;

}
