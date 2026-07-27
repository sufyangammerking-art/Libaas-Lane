$(document).ready(function () {

    function showPage(page) {

        if ($("#page1").length == 0 || $("#page2").length == 0)
            return;

        if (page == 1) {

            $("#page1").show();
            $("#page2").hide();

            $("#btnPage1").parent().addClass("active");
            $("#btnPage2").parent().removeClass("active");

        } else {

            $("#page1").hide();
            $("#page2").show();

            $("#btnPage2").parent().addClass("active");
            $("#btnPage1").parent().removeClass("active");

        }

    }

    $("#btnPage1").click(function (e) {

        e.preventDefault();

        showPage(1);

        $("html, body").animate({
            scrollTop: 0
        }, 500);

    });

    $("#btnPage2").click(function (e) {

        e.preventDefault();

        showPage(2);

        $("html, body").animate({
            scrollTop: 0
        }, 500);

    });

    $(".nav-a").click(function (e) {

        let hash = $(this).attr("href");

        if (!hash || !hash.startsWith("#"))
            return;

        e.preventDefault();

        if ($("#page1").length && $("#page2").length) {

            if (hash == "#men" || hash == "#women") {

                showPage(1);

            } else if (hash == "#kids" || hash == "#accessories") {

                showPage(2);

            }

        }

        if ($(hash).length) {

            setTimeout(function () {

                $("html, body").animate({

                    scrollTop: $(hash).offset().top - 100

                }, 500);

            }, 100);

        }

    });

    let hash = window.location.hash;

    if (hash && $(hash).length) {

        if ($("#page1").length && $("#page2").length) {

            if (hash == "#kids" || hash == "#accessories") {

                showPage(2);

            } else {

                showPage(1);

            }

        }

        setTimeout(function () {

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 100

            }, 500);

        }, 100);

    } else {

        if ($("#page1").length && $("#page2").length) {

            showPage(1);

        }

    }

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $("#backToTop").fadeIn();

        } else {

            $("#backToTop").fadeOut();

        }

    });

    $("#backToTop").click(function () {

        $("html, body").animate({

            scrollTop: 0

        }, 600);

    });

$(".shopnow").on("click", function (e) {

    e.preventDefault();

    const loginModal = new bootstrap.Modal(document.getElementById("login"), {
        backdrop: true,
        keyboard: true
    });

    loginModal.show();

});
$(".buynow").on("click", function (e) {

    e.preventDefault();

    const loginModal = new bootstrap.Modal(document.getElementById("signup"), {
        backdrop: true,
        keyboard: true
    });

    loginModal.show();

});

});
