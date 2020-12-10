package code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Form {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String age;

    private String genre;

    private String surgery;

    public void setId(Integer id) {
        this.id = id;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setSurgery(String surgery) {
        this.surgery = surgery;
    }

    public Integer getId() {
        return id;
    }

    public String getAge() {
        return age;
    }

    public String getGenre() {
        return genre;
    }

    public String getSurgery() {
        return surgery;
    }
}
