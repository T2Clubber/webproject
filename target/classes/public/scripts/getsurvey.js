$(document).ready(function () {
   /* $.getJSON("http://localhost:8080/survey", function (data) {
        console.log(data);
        $.each(data, function (i, item) {
            var row = $('<tr></tr>');

            // console.log(item["departure"]["name"].concat(" (", item["departure"]["code"], ")"));
            // console.log(item["destination"]["name"].concat(" (", item["destination"]["code"], ")"));
            // console.log(item["price"].toString().concat("€"));

            var rowData1 = $('<td></td>').text(item["id"]);
            var rowData2 = $('<td></td>').text(item["departureDate"].substring(0,9));
            var rowData3 = $('<td></td>').text(item["departure"]["name"].concat(" (", item["departure"]["code"], ")"));
            var rowData4 = $('<td></td>').text(item["destination"]["name"].concat(" (", item["destination"]["code"], ")"));
            var rowData5 = $('<td></td>').text(item["price"].toString().concat("€"));

            var SelectData1 = $('<option></option>').text("N°"+item["id"]+" "+item["departure"]["code"]+"-"+item["destination"]["code"]+" "+item["price"]+"€").val(item['id']);


            row.append(rowData1, rowData2, rowData3, rowData4, rowData5);
            $("#available_flights_tab").append(row);
            $("#available_flights_select").append(SelectData1);

        });*/


    $('#push').click(function() {
        var UserName = $('#name').val();
        var UserSurname = $('#surname').val();
        var UserMail = $('#mail').val();
        var jsonParam = {name: UserName, surname: UserSurname, mail: UserMail};
        console.log(jsonParam);
        $.get("http://localhost:8080/survey?",jsonParam,function (data) {

            console.log(data);

        });
    });
});


/*
function booking () {


    debugger

    $.ajax({
       type:"POST",
       url:"http://localhost:8080/reservation",
       data:JSON.stringify(jsonParam),
        contentType:"application/json",
        success:function (data) {
           console.log(data);
           debugger
        }
    });


}
*/