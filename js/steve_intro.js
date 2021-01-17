$(() => {

    let content_title = document.querySelector('.content_title')
    let site_steveZoom = document.querySelector('.site_steve')
    
    let test200 = $('.test200')
    let move_img1 = $('.content_box1');
    let move_img2 = $('.content_box2');
    let apple_intro = $('.apple_intro')


    let height_test200 // box height
    let offset_test200 // box 위치

    let scorll_realHeight1 // 내려야 할 스크롤 값
    let win_scrollTop // 현재 스크롤

    let scrollPersent1

    function changeValue() {
        setProperty()
        motion()
    }

    function setProperty() {
        height_test200 = test200.height() // box height
        offset_test200 = test200.offset().top // box 위치


        // 보이는 height : $(window).height()
        scorll_realHeight1 = height_test200 - $(window).height() // 보이지 않는 height


        win_scrollTop = $(window).scrollTop() // 현재 스크롤 위치
        scroll_test200 = win_scrollTop - offset_test200 // 현재위치-박스위치

        // ex : 0px => 0 - 500px => -500px으로 인식

        scrollPersent1 = scroll_test200 / scorll_realHeight1
    }

    function motion() {
        console.log('scrollPersent1',scrollPersent1)

        let moveVal1 = scrollPersent1 * -20
        let moveVal2 = scrollPersent1 * 100

        let zoomStart = 1.1
        let zoomEnd = 1
        let scrollVal = Math.max(0, scrollPersent1)
        let zoomVal = Math.max(zoomEnd, zoomStart + (scrollVal * zoomStart * 0.2 ))
        

        console.log('zoomVal',zoomVal)

        if (window.matchMedia("(max-width: 1200px)").matches) {
            /* 뷰포트 너비가 400 픽셀 이상 */
            move_img2.css({
                'transform': `translateY(0px)`
            })
            move_img1.css({
                'transform': `translateY(0px)`
            })
          } else {
            move_img2.css({
                'transform': `translate(0px,${moveVal2}px)`
            })
            move_img1.css({
                'transform': `translateY(${moveVal1}px)`
            })
        }

        apple_intro.css({
            'transform': `scale(${zoomVal})`
        })

        if(scrollPersent1 <= 0.7) {
            $('.site_steve').addClass('active')
            console.log('addClass!!!')
        } else {
            $('.site_steve').removeClass('active')
            console.log('removeClass!!')
        }

        let y = content_title.getBoundingClientRect().top

        // 이미지가 화면의 40%만큼 올라오면 addClass
        if(y < window.innerHeight * 0.4){
            site_steveZoom.classList.add('zoom')
            console.log('addZoom')
        } else{
            site_steveZoom.classList.remove('zoom')
            console.log('removeZoom')
        }

    }
    function init() {
        changeValue()
        bindEvent()
    }

    function bindEvent() {
        $(window).scroll(function () {
            changeValue()
            console.log(test200.height() - $(window).height());
        })

        $(window).resize(function () {
            changeValue()
        })
    }

    init()
})