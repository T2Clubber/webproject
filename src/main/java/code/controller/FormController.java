package code.controller;

import code.entity.Form;
import code.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.websocket.server.ServerEndpoint;
import java.util.Map;

@Controller
@RequestMapping(path ="/")
public class FormController {
    @Autowired
    private FormRepository formRepository;

    @PostMapping(path="/survey") // Map ONLY POST Requests
    public ResponseEntity<?> addNewForm (@RequestBody Map<String,String> json) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        Form n = new Form();

        String boy = json.get("boy");
        String girl = json.get("girl");
        String yes = json.get("yes");
        String no = json.get("no");

        n.setAge(json.get("age"));

        if (boy==null) {
            n.setGenre(girl);
        } else {
            n.setGenre(boy);
        }
        if (yes==null){
            n.setSurgery(no);
        } else {
            n.setSurgery(yes);
        }
        formRepository.save(n);
        return ResponseEntity.status(201).body("{ age :" +json.get("age") + "}");
    }
}
