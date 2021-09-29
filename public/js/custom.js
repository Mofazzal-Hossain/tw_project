$(document).ready(function() {
    $('.banner-slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.features-slider').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left"></i>',
        prevArrow: '<i class="fa fa-angle-right"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.gallery-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // sort by name
    $('#sortBy').click(function() {
        $('#sortList').toggle(10);
    });
    // menu item
    $('#menuBtn').click(function() {
        $('#menuShow').toggle(200);
    });
    // side nav item
    $('#sideNavBtn').click(function() {
        $('#sideNavMenu').toggle(200);
    });

});

window.onload = function() {
    var hideSideNav = document.getElementById('sideNavMenu');
    var hideMenuItem = document.getElementById('menuShow');
    var hideSortBy = document.getElementById('sortList');
    document.onclick = function(div) {
        if (!div.target.closest('#mySidenav') && hideSideNav.style.display != "none" && !div.target.closest('#sideNavBtn')) {
            hideSideNav.style.display = "none"
        }
        if (!div.target.closest('#menuShow') && hideMenuItem.style.display != "none" && !div.target.closest('#menuBtn')) {
            hideMenuItem.style.display = "none"
        }
        if (!div.target.closest('#sortList') && hideSortBy.style.display != "none" && !div.target.closest('#sortBy')) {
            hideSortBy.style.display = "none"
        }
    }
}