$(function () {

    $('.main-header-content-menu-mobile-obj').on('click', function () {
        $('.main-header-content-menu-mobile-sub').toggleClass('ds-none');
        $(this).toggleClass('main-header-content-menu-mobile-obj-active');
    })
});