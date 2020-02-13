$(document).ready(function() {$(".container").hide();})

function do_advice() {
    if ($("#fio").val().trim()==="") {
        $("#fio").focus();
        alert("Заповніть " + $("label[for='fio']").text());
        return;
    } else if ($("#email").val().trim()==="") {
        $("#email").focus();
        alert("Заповніть " + $("label[for='email']").text());
        return;
    } else if ($("#phone").val().trim()==="") {
        $("#phone").focus();
        alert("Заповніть " + $("label[for='phone']").text());
        return;
    } else if ($("#message").val().trim()==="") {
        $("#message").focus();
        alert("Заповніть " + $("label[for='message']").text());
        return;
    }

    $("#img_send").css("display", "block");
    $("#btn-send").prop( "disabled", true );
    $.post({
        url: "cgi-bin/advice.py",
        data: JSON.stringify(
            {"fio": $("#fio").val(),
             "email": $("#email").val(),
             "phone": $("#phone").val(),
             "message": $("#message").val()
            }),
        dataType: "json",
        //error: function() {alert("Error!")},
        success: function(data) {
            if (data.error.code===0) {
                $(".container strong").text($.cookie('lang') === "ru" ? "Данные отправлены!" : "Дані відправлено!");
                $(".container").show(400);
                setTimeout(function() {$(".container").hide(400);}, 4000);
                $("#fio").val("");
                $("#email").val("");
                $("#phone").val("");
                $("#message").val("");
            } else {
                alert(data.error.message);
            }
        }
    }).fail(function(error) {console.error(error);
    }).done(function() {
        $("#img_send").css("display", "none");
        $("#btn-send").prop( "disabled", false);
    });
}
