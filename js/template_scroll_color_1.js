let jurl = "";
let param = urlParamByName("name");
switch (param) {
    case ("emal-antikor-premium"):
        jurl = "data/emal-antikor-premium.json";
        break;
    case ("emal-pf-115s-lux"):
        jurl = "data/emal-pf-115s-lux.json";
        break;
    case ("emal-pf-115s-standart"):
        jurl = "data/emal-pf-115s-standart.json";
        break;
    case ("emal-pf-115s"):
        jurl = "data/emal-pf-115s.json";
        break;
    case ("emal-pf-266s"):
        jurl = "data/emal-pf-266s.json";
        break;
    case ("emal-ma-15-dlya-dahu"):
        jurl = "data/emal-ma-15-dlya-dahu.json";
        break;
    case ("farba-olijna-ma-15-surik-zaliznij"):
        jurl = "data/farba-olijna-ma-15-surik-zaliznij.json";
        break;
    case ("farba-olijna-ma-15"):
        jurl = "data/farba-olijna-ma-15.json";
        break;
    case ("grunt-gf-021C"):
        jurl = "data/grunt-gf-021C.json";
        break;
    case ("grunt-gf-021C-econom"):
        jurl = "data/grunt-gf-021C-econom.json";
        break;
    case ("grunt-vd-fungicidnij-s-11"):
        jurl = "data/grunt-vd-fungicidnij-s-11.json";
        break;
    case ("grunt-vd-universalnyj-s-10"):
        jurl = "data/grunt-vd-universalnyj-s-10.json";
        break;
    case ("grunt-vd-profiline-s-10"):
        jurl = "data/grunt-vd-profiline-s-10.json";
        break;
    case ("grunt-vd-concentrat-s-10"):
        jurl = "data/grunt-vd-concentrat-s-10.json";
        break;
    case ("farba-vd-luxline-c-22"):
        jurl = "data/farba-vd-luxline-c-22.json";
        break;
    case ("farba-vd-profiline-c-20"):
        jurl = "data/farba-vd-profiline-c-20.json";
        break;
        break;
    case ("farba-vd-profiline-c-21"):
        jurl = "data/farba-vd-profiline-c-21.json";
        break;
    case ("farba-vd-luxline-c-24"):
        jurl = "data/farba-vd-luxline-c-24.json";
        break;
    case ("farba-vd-profiline-c-23"):
        jurl = "data/farba-vd-profiline-c-23.json";
        break;
}

let colors = [];

$.ajax({
    url: jurl,
    async: false,
    dataType: "json",
    success: function (data, status, jqXHR) {
        //title
        $("title").html(data.title.title);
        //poster
        $(".poster").css("background-image", "url(" + data.poster.img + ")");
        //article
        let article = data.article;
        $(".panel-text h2").append(article.title);
        $(".panel-text h3").append(article.head);
        article.text.forEach(function (item, i, arr) {
            $(".panel-text div").append("<p>" + item + "</p>");
        });
        //colors
        colors = data.colors;
        colors.forEach(function (item, i, arr) {
            d = document.createElement('div');
            $(d).css("background-color", item)
                .attr("slideshow-item", i)
                .appendTo($(".colornav"));
        });
        $(".colorshow").css("background-color", colors[0]);
        $(".colornav").attr("slideshow-item", 0);
        $(".colornav div").on("click", function () {
            let i_new = $(this).attr("slideshow-item");
            let i_old = $(".colornav").attr("slideshow-item");
            if (i_old === i_new)
                return false;
            $(".colornav").attr("slideshow-item", i_new);
            $(".colorshow").css("background-color", colors[i_new]);
        });

    }
});
