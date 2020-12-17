$(document).ready(function () {

    $('#login').click(function() {

        $.ajax({
            url:"http://localhost:8080/login",
            type:"POST",
            data:JSON.stringify({
                username: $('#username').val(),
                password: $('#password').val(),
            }),
            contentType:"application/json",
            dataType:"json",
            complete:function(data){
                console.log(data);
                if (data["status"] == 200) {
                    alert("Username inconnu");
                } else if (data["status"] == 202) {
                    alert("Mot de passe erroné");
                } else {
                    document.location.href="form.html";
                }
            }
        });
    });

    $('#register').click(function() {

        $.ajax({
            url:"http://localhost:8080/register",
            type:"POST",
            data:JSON.stringify({
                username: $('#username').val(),
                mail: $('#mail').val(),
                password: $('#password').val()
            }),
            contentType:"application/json",
            dataType:"json",
            complete:function(data){
                console.log(data);
                if (data["status"] == 200) {
                    alert("Username déjà utilisé");
                } else if (data["status"] == 202) {
                    alert("Adresse mail déjà utilisée");
                } else {
                    alert("Compte enregistré");
                    document.location.href="index.html";
                }

            }
        });
    });
});