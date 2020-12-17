package code.controller;


import code.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import code.repository.UserRepository;

import java.util.EmptyStackException;
import java.util.Map;
import java.util.Optional;


@Controller // This means that this class is a Controller
@RequestMapping(path="/") // This means URL's start with /demo (after Application path)
public class UserController {
    // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestBody Map<String, String> json) {

        String username = json.get("username");
        String password = json.get("password");
        User u = userRepository.findByUsername(username);

        if (u==null) {
            // UTILISATEUR INCONNU
           return ResponseEntity.status(200).body("{ username: " +username + ", password: " + password+ "}");
        } else {
            if (password.equals(u.getPassword())) {
                // CONNEXION
                return ResponseEntity.status(201).body("{ username: " +username + ", password: " + password+ "}");
            } else {
                // ERREUR DE MOT DE PASSE
                return ResponseEntity.status(202).body("{ username: " +username + ", password: " + password+ "}");
            }


        }
    }

    @PostMapping(path="/register") // Map ONLY POST Requests
    public ResponseEntity<?> addNewUser (@RequestBody Map<String,String> json) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User n = new User();
        n.setUsername(json.get("username"));
        n.setMail(json.get("mail"));
        n.setPassword(json.get("password"));
        userRepository.save(n);
        return ResponseEntity.status(201).body("{ username :" +json.get("username") +", mail: "+json.get("mail")+", password: " + json.get("password") + "}");
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }
}