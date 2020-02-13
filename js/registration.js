function do_registration() {
    if ($("#login").val().trim()==="") {
        $("#login").focus();
        alert("Заповніть " + $("label[for='login']").text());
        return;
    } else if ($("#password").val().trim()==="") {
        $("#password").focus();
        alert("Заповніть " + $("label[for='password']").text());
        return;
    } else if ($("#fio").val().trim()==="") {
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
    }

    $.post({
        url: "cgi-bin/registration.py",
        data: JSON.stringify(
            {"login": $("#login").val(),
             "password": $("#password").val(),
             "fio": $("#fio").val(),
             "email": $("#email").val(),
             "phone": $("#phone").val()
            }),
        dataType: "json",
        //error: function() {alert("Error!")},
        success: function(data) {
            if (data.error.code===0) {
                if ($.cookie('lang') === "ru") alert("Даные отправлены!"); else alert("Дані відправлено!");
                $("#login").val("");
                $("#password").val("");
                $("#fio").val("");
                $("#email").val("");
                $("#phone").val("");
            } else {
                alert(data.error.message);
            }
        }
    }).fail(function(error) {console.error(error);
    }).done(function() {$("btn-send").attr("disabled", false);}
    );
}
