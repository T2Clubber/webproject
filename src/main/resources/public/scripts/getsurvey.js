$(document).ready(function () {

    $('#answer').click(function() {

        $.ajax({
            url:"http://localhost:8080/survey",
            type:"POST",
            data:JSON.stringify({
                age: $('#age').val(),
                genre: $('input[name="genre"]:checked').val(),
                surg: $('input[name="surg"]:checked').val()
            }),
            contentType:"application/json",
            dataType:"json",
            complete:function(data){
                console.log(data);}
        });
    });
});
