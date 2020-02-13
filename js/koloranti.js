$.getJSON({
    url: "data/koloranti_" + ($.cookie('lang') === "ru" ? "ru" : "ua") + ".json",
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
        //slider
        function f(slider, section) {
            let figure = slider.querySelector("figure");
            section.forEach(function (item, i, arr) {
                let t = figure.cloneNode(true);
                t.querySelector("#img1").setAttribute("src", item.img1);
                t.querySelector("#img2").setAttribute("src", item.img2);
                slider.appendChild(t);
            });
            slider.removeChild(figure);
        }
        ;
        f(document.querySelector("#slider1"), data.section1);
        f(document.querySelector("#slider2"), data.section2);
    }
});
