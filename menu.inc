<style>
    /*.fa {
        font: normal normal normal 14px/1 FontAwesome;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: translate(0,0);
    }*/
    .fa-menu:before {
        content: '\f0c9';
    }
    @media (max-width: 768px) {
        .container-sandwich {
            display: block;
        }
        [data-notifications]:after {
            left: 55px;
        }
        .menu-container {
            display: none;
        }
    }
    @media (min-width: 768px) {
        .container-sandwich {
            display: none;
        }
        .menu-container {
            display: block;
        }
    }
    .container-sandwich {
        z-index: 20;
    }

    .menu-sandwich {
        display: none;
        position: absolute;
        background: white;
        z-index: 20;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .menu-sandwich ul {
        padding: 0 20px;
    }
    .menu-sandwich li {
        list-style-type: none;
        padding: 2px 0;
    }
        
    .container-sandwich, .container-sandwich a {
        text-decoration: none;
        color: #222222;
    }
    .menu-sandwich a:hover {
        color: gray;
    }
</style>

<div class="lang-container">
    <a id="lang_ua" href="#" data-lang="ua" onclick="do_lang('ua');" title="Українська">
        <img src="images/ua.png" alt=""/>
    </a>
    <a id="lang_ru" href="#" data-lang="ru" onclick="do_lang('ru');" title="Русский">
        <img src="images/ru.png" alt=""/>
    </a>
</div>


<div class="container-sandwich">
    <a href="javascript:void(0);" onclick="$('.menu-sandwich').toggle(200);">
        <i class="fa fa-menu" style="margin-left: 5px; font-size: 30px;"></i>
        Меню
    </a>

    <aside class="menu-sandwich">
        <ul>
            <li><a href="index.html"><span class="golovna">Головна</span></a></li>
            <li><a href="pro-kompaniyu.html"><span class="pro-kompaniyu">Про компанію</span></a></li>
            <li><a href="product.html"><span class="product">Продукція</span></a>
                <ul>
                    <li><a href="product_surface.html"><span class="product_surface">За призначенням</span></a></li>
                    <li><a href="product_sostav.html"><span class="product_sostav">За типом</span></a></li>
                </ul>
            </li>
            <li><span class="klientam">Клієнтам</span>
                <ul>
                    <li><a href="doc/BLANK-ZAYAVKY-UKRAYNSKYJ.xls"><span class="zayavka">Заявка</span></a></li>
                    <li><a href="advice.html"><span class="advice">Зворотній зв'язок</span></a></li>
                    <!--li><a href="registration.html"><span class="registration">Реєстрація</span></a></li-->
                </ul>
            </li>
            <li><a href="potrebi.html"><span class="potrebi">Потреби</span></a></li>
            <li><a href="partners.html"><span class="partners">Партнери</span></a></li>
            <li><a href="kontakti.html"><span class="kontakti">Контакти</span></a></li>
            <li><a data-notifications="3" href="news.html"><span class="news">Новини</span></a></li>
        </ul>
    </aside>
</div>


<div id="menu">

    <div class="menu-container">
        <ul class="menu">
            <li id="golovna"><a href="index.html"><span class="golovna">Головна</span></a></li>
            <li id="pro-kompaniyu"><a href="pro-kompaniyu.html"><span class="pro-kompaniyu">Про компанію</span></a></li>
            <li id="product"><a href="product.html"><span class="product">Продукція</span>&nbsp;<i class="fa fa-angle-down"></i></a>
                <ul class="submenu1">
                    <li><a href="product_surface.html"><span class="product_surface">За призначенням</span></a></li>
                    <li><a href="product_sostav.html"><span class="product_sostav">За типом</span></a></li>
                </ul>
            </li>
            <li id="klientam"><a href="#0"><span class="klientam">Клієнтам</span>&nbsp;<i class="fa fa-angle-down"></i></a>
                <ul class="submenu1">
                    <li><a href="doc/BLANK-ZAYAVKY-UKRAYNSKYJ.xls"><span class="zayavka">Заявка</span></a></li>
                    <li><a href="advice.html"><span class="advice">Зворотній зв'язок</span></a></li>
                    <!--li><a href="registration.html"><span class="registration">Реєстрація</span></a></li-->
                </ul>
            </li>
            <li id="potrebi"><a href="potrebi.html"><span class="potrebi">Потреби</span></a></li>
            <li id="partners"><a href="partners.html"><span class="partners">Партнери</span></a></li>
            <li id="kontakti"><a href="kontakti.html"><span class="kontakti">Контакти</span></a></li>
            <li id="news"><a data-notifications="3" href="news.html"><span class="news">Новини</span></a></li>
        </ul>
    </div>


    <div id="poster" style="position: absolute; left: 0; right: 0; z-index: 10; display: none;">

        <div class="poster-menu">

            <div id="div-video" class="video" style="display: none;">
                <video autoplay loop>
                    <source src="video/promo.mp4" type="video/mp4">
                    <source src="video/promo.ogg" type="video/ogg">
                    Your browser doesn't support HTML5 video tag.
                </video>
            </div>

            <div id="carousel1" class="carousel slide poster-menu-carousel"
                 data-interval="3000" data-pause="null" data-wrap="true" data-keyboard="false"
                 style="display: none;">
                <div class="carousel-inner carousel-wrapper" role="listbox">
                    <script>
                        $.getJSON({
                            url: "data/carousel.json",
                            success: function (data, status, jqXHR) {
                                data.item.forEach(function (item, i, arr) {
                                    $("#carousel1 .carousel-inner").append('<div class="item"><img src="' + item.img + '?' +(new Date()).getTime() + '" alt="" /></div>');
                                });
                                $("#carousel1 .carousel-inner").find(".item").first().addClass("active");
                            }
                        });
                    </script>
                </div>
            </div>

            <div id="div-pro-kompaniyu" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/poster/factory.jpg" alt=""/>
            </div>

            <div id="div-potrebnosti" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/poster/potrebi.jpg" alt=""/>
            </div>

            <div id="div-klientam" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/poster/klientam.jpg" alt=""/>
            </div>

            <div id="div-kontakti" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/poster/contact.jpg" alt=""/>
            </div>

            <div id="div-partners" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/poster/partners.jpg" alt=""/>
            </div>

            <div id="div-news" class="poster-menu-img poster-menu-animation" style="display: none;">
                <img src="images/news_765x350px.jpg" alt=""/>
            </div>

        </div>

        <div id="footer-menu" style="background-color: lightgray; opacity: 0.7;"></div>
    </div>


</div>

<script src="js/menu.js"></script>
