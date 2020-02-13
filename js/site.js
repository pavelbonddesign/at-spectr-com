$('#loader').delay(1000).fadeOut('slow');
$('#content').fadeIn('normal');

function calc_poster() {
    $(".poster-menu").height(window.innerHeight - ($("#footer").height() + $("#menu").height() + $("#logo").height()));
    if ($(".poster-menu").height() < 230)
        $(".poster-menu").height(230);
    if ($("#content").height() < $(".poster-menu").height()) {
        document.querySelector('style').textContent +=
            "@media (min-width: 992px) {#footer {position: absolute;bottom: 0;left: 0;right: 0;}}";
    }
};

setTimeout(calc_poster, 1000);
