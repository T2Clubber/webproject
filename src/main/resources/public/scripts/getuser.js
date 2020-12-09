$(document).ready(function () {

    $('#login').click(function() {

        $.ajax({
            url:"http://localhost:8080/login",
            type:"POST",
            data:JSON.stringify({
                username: $('#username').val(),
                password: $('#password').val()
            }),
            contentType:"application/json",
            dataType:"json",
            complete:function(data){
                console.log(data);}
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
                console.log(data);}
        });
    });
});