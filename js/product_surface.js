$.getJSON({
    url: $.cookie('lang') === "ru" ? "data/product_surface_ru.json" : "data/product_surface_ua.json",
    success: function (data, status, jqXHR) {
        //title
        $("title").html(data.title.title);
        //article
        let article = data.article;
        $(".panel-text h2").append(article.title);
        $(".panel-text h3").append(article.head);
        article.text.forEach(function (item, i, arr) {
            $(".panel-text div").append("<p>" + item + "</p>");
        });
        //section1
        let section;
        let figure;
        section = data.section1;
        figure = document.querySelector("#slider1 figure");
        section.forEach(function (item, i, arr) {
            let t = figure.cloneNode(true);
            t.querySelector("img").setAttribute("src", item.img);
            t.querySelector("h3").innerHTML = item.head;
            //t.querySelector("#desc").innerHTML = item.desc;
            t.querySelector("a").setAttribute("href", item.href);
            document.querySelector("#slider1").appendChild(t);
        });
        document.querySelector("#slider1").removeChild(figure);
    }
});
