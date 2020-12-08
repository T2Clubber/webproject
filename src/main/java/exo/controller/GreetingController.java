package exo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @GetMapping("/survey")
    public Greeting greeting(String name, String surname, String mail) {

        return new Greeting(name, surname, mail);
    }

}
