let jurl = "";
let param = urlParamByName("name").replace("#0", "").replace("#", "");
let lang = $.cookie('lang') === "ru" ? "_ru" : "_ua";
switch (param) {
    case ("emal-antikor-premium"):
        jurl = "data/emal-antikor-premium" + lang + ".json";
        break;
    case ("emal-pf-115s-lux"):
        jurl = "data/emal-pf-115s-lux" + lang + ".json";
        break;
    case ("emal-pf-115s-standart"):
        jurl = "data/emal-pf-115s-standart" + lang + ".json";
        break;
    case ("emal-pf-115s"):
        jurl = "data/emal-pf-115s" + lang + ".json";
        break;
    case ("emal-pf-266s"):
        jurl = "data/emal-pf-266s" + lang + ".json";
        break;
    case ("farba-ma-15-dlya-dahu"):
        jurl = "data/farba-ma-15-dlya-dahu" + lang + ".json";
        break;
    case ("farba-olijna-ma-15-surik-zaliznij"):
        jurl = "data/farba-olijna-ma-15-surik-zaliznij" + lang + ".json";
        break;
    case ("farba-olijna-ma-15"):
        jurl = "data/farba-olijna-ma-15" + lang + ".json";
        break;
    case ("grunt-gf-021C"):
        jurl = "data/grunt-gf-021C" + lang + ".json";
        break;
    case ("grunt-gf-021C-econom"):
        jurl = "data/grunt-gf-021C-econom" + lang + ".json";
        break;
    case ("grunt-vd-fungicidnij-s-11"):
        jurl = "data/grunt-vd-fungicidnij-s-11" + lang + ".json";
        break;
    case ("grunt-vd-universalnyj-s-10"):
        jurl = "data/grunt-vd-universalnyj-s-10" + lang + ".json";
        break;
    case ("grunt-vd-profiline-s-10"):
        jurl = "data/grunt-vd-profiline-s-10" + lang + ".json";
        break;
    case ("grunt-vd-concentrat-s-10"):
        jurl = "data/grunt-vd-concentrat-s-10" + lang + ".json";
        break;
    case ("farba-vd-luxline-c-22"):
        jurl = "data/farba-vd-luxline-c-22" + lang + ".json";
        break;
    case ("farba-vd-profiline-c-20"):
        jurl = "data/farba-vd-profiline-c-20" + lang + ".json";
        break;
        break;
    case ("farba-vd-profiline-c-21"):
        jurl = "data/farba-vd-profiline-c-21" + lang + ".json";
        break;
    case ("farba-vd-luxline-c-24"):
        jurl = "data/farba-vd-luxline-c-24" + lang + ".json";
        break;
    case ("farba-vd-profiline-c-23"):
        jurl = "data/farba-vd-profiline-c-23" + lang + ".json";
        break;
    case ("farba-dorozh-razmetka"):
        jurl = "data/farba-dorozh-razmetka" + lang + ".json";
        break;
    case ("skloomivach-leto"):
        jurl = "data/skloomivach-leto" + lang + ".json";
        break;
    case ("lak-pf-170"):
        jurl = "data/lak-pf-170" + lang + ".json";
        break;
    case ("grunt-gf-premium"):
        jurl = "data/grunt-gf-premium" + lang + ".json";
        break;
    case ("rozchinnik-for-emal"):
        jurl = "data/rozchinnik-for-emal" + lang + ".json";
        break;
    case ("grunt-vd-kvarc"):
        jurl = "data/grunt-vd-kvarc" + lang + ".json";
        break;
    case ("farba-vd-derevo-bactericid"):
        jurl = "data/farba-vd-derevo-bactericid" + lang + ".json";
        break;
    case ("decor-lazur"):
        jurl = "data/decor-lazur" + lang + ".json";
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
        $(".panel-text h3").append(article.head);
        //table
        let t = "<table class='table1 table'>"
            + "<tr class='tr_annotation'>" + "<td colspan='2'>" + article.annotation + "</td>" + "</tr>"
        //pictographs
        t += "<tr><td></td><td><div style='font-size: 10px; text-align: center;'>";
        article.pictographs.forEach(function (item, i, arr) {
            t = t
                + "<figure style='text-align: center; float: left; margin: 0 3px;'>"
                + "<img src='" + item.img + "' alt=''>"
                + "<figcaption style='line-height: initial;'>" + item.alt + "</figcaption>"
                + "</figure>"
        });
        t += "</div></td></tr>";
        //properties
        article.property.forEach(function (item, i, arr) {
            t = t
                + "<tr class='tr_property'>"
                + "<td class='td1_property'>" + item.key + "</td>"
                + "<td class='td2_property'>" + item.val + "</td>"
                + "</tr>"
        });
        t += "</table>";
        $(".panel-text div").append(t);

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
