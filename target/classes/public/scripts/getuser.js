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
            complete:function(data) {

                console.log(data);

                if (data["status"] == 200) {
                    alert("Username inconnu");
                }
                if (data["status"] == 201){
                    document.location.href = "form.html";
                }
                if (data["status"] == 202) {
                    alert("Mot de passe erroné");
                }
                if (data["status"] == 500) {
                    alert("Champs vide");
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
            complete:function(data) {

                console.log(data);

                if (data["status"] == 200) {
                    alert("Username déjà utilisé");
                }
                if (data["status"] == 202) {
                    alert("Adresse mail déjà utilisée");
                }
                if (data["status"] == 500) {
                    alert("Champs vide")
                }
                if (data["status"] == 201){
                    alert("Compte enregistré");
                    document.location.href = "index.html";
                }
            }
        });
    });
});