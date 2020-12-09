$(document).ready(function () {

    $('#login').click(function() {
        var UserName = $('#username').val();
        var UserPassword = $('#password').val();
        var jsonParam = {username: UserName, password: UserPassword};

        $.post("http://localhost:8080/login",jsonParam,function (data) {

            console.log(data);

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
        }).done(function(data){
            console.log(data);
        });
    });
});