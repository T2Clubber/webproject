package code.controller;

import code.entity.Form;
import code.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.ServerEndpoint;
import java.util.Map;

@Controller
@RequestMapping(path ="/")
public class FormController {
    @Autowired
    private FormRepository formRepository;

   @PostMapping(path="/survey")
    public ResponseEntity<Object> addNewForm (@RequestBody Map<String, String> json) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        Form n = new Form();
        n.setAge(json.get("age"));
        n.setGenre(json.get("genre"));
        n.setSurgery(json.get("surg"));
        formRepository.save(n);

        return ResponseEntity.status(201).body("{ age: " +json.get("age") +", genre: "+json.get("genre")+", surg: "+json.get("surg")+"}");
    }


   /* @GetMapping(path="/survey")
    public ResponseEntity<Object> addNewForm (@RequestParam(value = "age") String age, @RequestParam(value = "genre") String genre, @RequestParam(value = "surg") String surg) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        Form n = new Form();
        n.setAge(age);
        n.setGenre(genre);
        n.setSurgery(surg);
        formRepository.save(n);

        return (ResponseEntity<Object>) ResponseEntity.status(201)body("{age:"+age +",genre:"+genre+",surg:"+surg+"}");
    } */
}
