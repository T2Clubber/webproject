package code.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class GreetingController {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestBody Map<String, String> json) {
        return ResponseEntity.ok().body("username"+json.get("username"));
    }

    @GetMapping("/register")
    public Greeting register(String username,String mail,String password) {

        return new Greeting(username,mail,password);
    }

}
