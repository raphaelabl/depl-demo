package at.raphael.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
@Table(name = "U_USERs")
public class User extends PanacheEntity {

    public String firstName;
    public String lastName;
    public String nickName;

    @OneToMany(cascade = CascadeType.ALL)
    public List<Image> images;

    public User(String firstName, String lastName, String nickname,List<Image> images) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.images = images;
        this.nickName = nickname;
    }

    public User() {
    }
}
