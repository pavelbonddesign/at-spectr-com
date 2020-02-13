var
    menu_ua = {
        main: ["Головна", "Про компанію", "Продукція", "Клієнтам", "Потреби", "Партнери", "Контакти", "Новини"],
        product: ["За призначенням", "За типом"],
        klientam: ["Заявка", "Зворотній зв'язок", "Реєстрація"]
    },
    menu_ru = {
        main: ["Главная", "Про компанию", "Продукция", "Клиентам", "Потребности", "Партнеры", "Контакты", "Новости"],
        product: ["За назначением", "За типом"],
        klientam: ["Заявка", "Обратная связь", "Регистрация"]
    };


function do_lang(param) {
    $.cookie('lang', param);
    /*$('.lang-container .active').removeClass('active');
    if (param === "ua")
        $(".lang-container #lang_ua").addClass("active");
    else
        $(".lang-container #lang_ru").addClass("active");*/
    $(".lang-container a").removeClass("active");
    if ($.cookie('lang') === 'ru')
        $(".lang-container a[data-lang='ru']").addClass("active");
    else
        $(".lang-container a[data-lang='ua']").addClass("active");
    
    location.reload();
}



function initMenu() {
    let m = {};
    if ($.cookie('lang') === 'ru')
        m = menu_ru;
    else
        m = menu_ua;
    $(".golovna").text(m.main[0]);
    $(".pro-kompaniyu").text(m.main[1]);
    $(".product").text(m.main[2]);
    $(".klientam").text(m.main[3]);
    $(".potrebi").text(m.main[4]);
    $(".partners").text(m.main[5]);
    $(".kontakti").text(m.main[6]);
    $(".news").text(m.main[7]);
    $(".product_surface").text(m.product[0]);
    $(".product_sostav").text(m.product[1]);
    $(".zayavka").text(m.klientam[0]);
    $(".advice").text(m.klientam[1]);
    $(".registration").text(m.klientam[2]);
}

function show_poster_menu(m, d) {
    $(m).hover(
        function () {
            $("#footer-menu").height($(document).height() - $("#menu").height() - $("#logo").height() - $(".poster-menu").height());
            if (m === "#product") {
                $("#carousel1 .item").removeClass("active");
                $("#carousel1 .item").first().addClass('active');
                $("#carousel1").carousel();
            }
            $(d).show();
            $("#poster").show();
        },
        function () {
            if (m === "#product") {
                $("#carousel1").carousel('pause');
            }
            $(d).hide();
            $("#poster").hide();
        }
    );
}

show_poster_menu("#golovna", "#div-video");
show_poster_menu("#product", "#carousel1");
show_poster_menu("#pro-kompaniyu", "#div-pro-kompaniyu");
show_poster_menu("#potrebi", "#div-potrebnosti");
show_poster_menu("#klientam", "#div-klientam");
show_poster_menu("#kontakti", "#div-kontakti");
show_poster_menu("#partners", "#div-partners");
show_poster_menu("#news", "#div-news");


$(document).on('click', function (e) {
    if (!$(e.target).closest(".container-sandwich").length) {
        $('.menu-sandwich').hide(200);
    }
    e.stopPropagation();
});


if (!!!$.cookie('lang')) {
    $.cookie('lang', 'ua');
    $('.lang-container .active').removeClass('active');
    if ($.cookie('lang') === "ua")
        $("#lang_ua").addClass("active");
    else
        $("#lang_ru").addClass("active");
}

$(".lang-container a").removeClass("active");
if ($.cookie('lang') === 'ru')
    $(".lang-container a[data-lang='ru']").addClass("active");
else
    $(".lang-container a[data-lang='ua']").addClass("active");


initMenu();
