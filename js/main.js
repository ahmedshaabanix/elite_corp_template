$(function () {
    'use strict';
    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item ,.about-head').height(winH - (upperH + navH));





});

