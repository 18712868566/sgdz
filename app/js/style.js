$(function () {
    $(document).on("click", "#alertInfo .close,.pop-hero .pop_hero_close,.pop_hero_close,.btn_determine", dialog.closeDiv);

    // 全局滚动效果
    AOS.init({
        once: true,
        duration: 800,
        anchorPlacement: "top-center"
    });

    // 灯笼收缩
    $('.lantern-btn').on('click', function (param) {
        $(this).toggleClass('btn-move-off');
        $('.lantern-center').toggleClass('curr');
    });

    // 首页pv
    $('.btn-video-play').on('click', function () {
        let vUrl = $(this).attr('data-url');
        dialog.alertVideo(vUrl)
    });

    // 英雄部分 滑过发光
    $('.hero-flex .hero-name:nth-child(1)').hover(function () {
        $('.hero-xinxuan').addClass('hoverAni');
        $(this).addClass('hoverAni');
    }, function () {
        $('.hero-xinxuan').removeClass('hoverAni');
        $(this).removeClass('hoverAni');
    });
    $('.hero-flex .hero-name:nth-child(2)').hover(function () {
        $('.hero-xinchang').addClass('hoverAni');
        $(this).addClass('hoverAni');
    }, function () {
        $('.hero-xinchang').removeClass('hoverAni');
        $(this).removeClass('hoverAni');
    });
    $('.hero-flex .hero-name:nth-child(3)').hover(function () {
        $('.hero-changzheng').addClass('hoverAni');
        $(this).addClass('hoverAni');
    }, function () {
        $('.hero-changzheng').removeClass('hoverAni');
        $(this).removeClass('hoverAni');
    });

    //  游戏特色
    $('.banner-container li').on('click', function () {
        $(this).addClass('curr').siblings().removeClass('curr');
    });



    $('.hero-flex .hero-name:nth-child(1)').on('click', function () {
        dialog.alertHeroXinXuan();
    });
    $('.hero-flex .hero-name:nth-child(2)').on('click', function () {
        dialog.alertHeroXinChang();
    });
    $('.hero-flex .hero-name:nth-child(3)').on('click', function () {
        dialog.alertHeroChangZheng();
    });


    // 点击播放音频
    var indexAudio = $('#mp3Btn')[0];

    // hero cv
    $(document).on('click', '.pop-hero .btn-cv-play', function () {
        $(this).toggleClass('cv-open');
        // cv 控制
        indexAudio = $('#mp3Btn')[0];
        indexAudio.src = '';

        var musrc_url = $(this).attr('data-url');

        if ($(this).hasClass('cv-open')) {
            indexAudio.src = musrc_url;
            indexAudio.pause();
            indexAudio.play();
        } else {
            indexAudio = $('#mp3Btn')[0];
            indexAudio.pause();
            indexAudio.src = '';
        }

        // 监听音频结束后 重置播放按钮
        indexAudio.onended = function (param) {
            let oEle = $('.pop-hero .btn-cv-play');
            $('.pop-hero .btn-cv-play').removeClass('cv-open');
        };
    });




    // 活动规则
    $('.lantern-hdgz').on('click', function () {
        dialog.alertPop_gz();
    });

    // 整体框架
    var page = new Swiper('.mySwiper', {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        on: {
            slideChangeTransitionStart: function () {
                console.log(this.activeIndex);
                // argumentsTabs('.swp-nav .btn', page, this.activeIndex);
                $('.swp-nav .after').stop().animate({ 'left': (this.activeIndex * 2.28) + 1.4 + 'rem' }, "88");
                $('.swp-nav .btn').eq(this.activeIndex).addClass('curr').siblings().removeClass('curr');
            },
        },
    });

    argumentsTabs('.swp-nav .btn', page);


});

function argumentsTabs(tabList, page) {
    var $div_li = $(tabList);
    $div_li.click(function () {
        $(this).addClass('curr').siblings().removeClass('curr');
        var index = $div_li.index(this);

        page.slideTo(index, 800, false);//切换到第一个slide，速度为1秒
        // 跟随横条
        console.log(index);
        $(this).siblings('.swp-nav .after').stop().animate({ 'left': (index * 2.28) + 1.4 + 'rem' }, "88");
    }).eq(0).click();
};


// 滚动时添加
$(window).scroll(function () {
    var scrollT = $(window).scrollTop()
    scrollT = parseInt(scrollT);
    // console.log(scrollT)
});

