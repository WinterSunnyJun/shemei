/**
 * Created by DELL on 2017/10/12.
 */
$(function () {
//    首页banner
    $(".banner-wrapper ol li").click(function () {
        var baNow = $(this).index();
        $(".banner-wrapper ol li").eq(baNow).addClass('active').siblings().removeClass('active');
        $(".banner-wrapper ul li").eq(baNow).show().siblings().hide();
    })
})