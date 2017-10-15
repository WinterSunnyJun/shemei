$(function () {
    //首页banner
    $(".banner-wrapper ol li").click(function () {
        var baNow = $(this).index();
        $(".banner-wrapper ol li").eq(baNow).addClass('active').siblings().removeClass('active');
        $(".banner-wrapper ul li").eq(baNow).show().siblings().hide();
    })
//手机导航
    $(".pho-nav-bar").click(function () {
        if($(".pho-menu").css("display") == "block" ){
            $(".pho-menu").slideUp();
        }else {
            $(".pho-menu").slideDown();
        }
    })
//    联系我们标题
    if ($(document.body).width() < 768 ){
        $(".qywh-one-title").addClass('active');
        $(".qywh-two-title").addClass('active');
        $(".qywh-three-title").addClass('active');
        $(".qywh-four-title").addClass('active');

    }



})