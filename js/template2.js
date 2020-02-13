let jurl = "";
let lang = $.cookie('lang') === "ru" ? "_ru" : "_ua";
switch (urlParamByName("name").replace("#0", "").replace("#", "")) {
    case ("product-organic"):
        jurl = "data/product-organic" + lang + ".json";
        break;
    case ("product-water"):
        jurl = "data/product-water" + lang + ".json";
        break;
    case ("product-inshe"):
        jurl = "data/product-inshe" + lang + ".json";
        break;
    case ("paint_metal"):
        jurl = "data/paint_metal" + lang + ".json";
        break;
    case ("paint_derevo"):
        jurl = "data/paint_derevo" + lang + ".json";
        break;
    case ("paint_exterior"):
        jurl = "data/paint_exterior" + lang + ".json";
        break;
    case ("paint_interior"):
        jurl = "data/paint_interior" + lang + ".json";
        break;
}


$.getJSON({
    url: jurl,
    async: false,
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
        //product
        let figure = document.querySelector(".row figure");
        data.product.forEach(function (item, i, arr) {
            let section = $("#product").append("<div class='row'></div>");
            item.section.forEach(function (item, i, arr) {
                let t = figure.cloneNode(true);
                t.querySelector("img").setAttribute("src", item.img);
                t.querySelector(".overlay-panel p").innerHTML = item.head;
                t.querySelector(".title-item").innerHTML = item.head;
                t.querySelector("a").setAttribute("href", item.href);
                section.append(t);
            });
        });
        $("#section").detach();
    }
});
