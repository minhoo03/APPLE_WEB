$(() => {
    let site_steve = $('.site_steve')
    let move_img1 = $('.scroll-img1');


    let height_site_steve // box height
    let offset_site_steve // box 위치

    let scorll_realHeight1 // 내려야 할 스크롤 값
    let win_scrollTop // 현재 스크롤

    let scrollPersent1

    function changeValue() {
        setProperty()
        motion()
    }

    function setProperty() {
        height_site_steve = site_steve.height() // box height
        offset_site_steve = site_steve.offset().top // box 위치


        // 보이는 height : $(window).height()
        scorll_realHeight1 = height_site_steve - $(window).height() // 보이지 않는 height


        win_scrollTop = $(window).scrollTop() // 현재 스크롤 위치
        scroll_site_steve = win_scrollTop - offset_site_steve // 현재위치-박스위치

        // ex : 0px => 0 - 500px => -500px으로 인식

        scrollPersent1 = scroll_site_steve / scorll_realHeight1

    }

    function motion() {


        let moveVal1 = scrollPersent1 * -10

        move_img1.css({
            'transform': `translate(0px,${moveVal1}px)`
        })

    }
    function init() {
        changeValue()
        bindEvent()
    }

    function bindEvent() {
        $(window).scroll(function () {
            changeValue()
            console.log(site_steve.height() - $(window).height());
        })

        $(window).resize(function () {
            changeValue()
        })
    }

    init()
})