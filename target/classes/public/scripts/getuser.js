$(document).ready(function () {

    $('#login').click(function() {
        var UserName = $('#username').val();
        var UserPassword = $('#password').val();
        var jsonParam = {username: UserName, password: UserPassword};

        $.get("http://localhost:8080/login",jsonParam,function (data) {

            console.log(data);

        });
    });

    $('#register').click(function() {
        var UserName = $('#username').val();
        var UserMail = $('#mail').val();
        var UserPassword = $('#password').val();
        var jsonParam = {username: UserName, mail: UserMail, password: UserPassword};

        $.get("http://localhost:8080/register",jsonParam,function (data) {

            console.log(data);

        });
    });
});