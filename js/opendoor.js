$(() => {
        let fix_box2 = $('.fix_box2')
        let intro_txt = $('.intro_txt')
        let left_box = $('.left_box')
        let right_box = $('.right_box')
        let bg_img = $('.bg_img')
        let end_txt= $('.end_txt')

// scrollTop()  : OO의 현재 스크롤 위치값    - 가변적
// offset()     : OO의 위치값               - 고정적

// scT : 말 그대로 스크롤 값 / offset은 스크롤 위치를 구하는 듯

// window.height()      보이는 height 크기
// window.scrollTop()   스크롤 현재 위치

        let scroll_fix_box2 // fix_box2 스크롤
        let fix_offsetTop // fix_box2의 offset Top : 위치
        let scroll_realHeight // 진짜 스크롤 되어야 할 값 / 3000px을 전부 스크롤 해야하는 것이 아니므로

        let win_scrollTop // 스크롤 현재 위치

        let fix_scrollTop // fix_box2의 top

        let scrollPersent // 스크롤 비율
        let persent // 백분율

        function changeValue() {
            setProperty() // 스크롤시 바뀔 값
            motion() // 바뀐 값으로 모션처리
        }

        function setProperty() {
            scroll_fix_box2 = fix_box2.height() // 섹션 height
            fix_offsetTop = fix_box2.offset().top // 섹션 위치
            
            // $(window).height() : 보이는 height
            scroll_realHeight = scroll_fix_box2 - $(window).height() // 보이지 않는 height

            win_scrollTop = $(window).scrollTop() // 현재 스크롤 위치

            fix_scrollTop = win_scrollTop - fix_offsetTop // 현재 위치 - 섹션 위치 [0px => 0 - 200px => -200px]

            // 현재 위치 / 남은 스크롤 : 비율
            scrollPersent = fix_scrollTop / scroll_realHeight
            persent = scrollPersent * 100
        }

        function motion (){
            let maskStart = 50
            let maskEnd = 0

            let zoomStart = 1.5
            let zoomEnd = 1

            let maskVal = Math.max(maskEnd, maskStart - (scrollPersent * maskStart))
            let zoomVal = Math.max(zoomEnd, zoomStart - (scrollPersent * zoomStart))

            left_box.css({
                width: maskVal+"%"
            })

            right_box.css({
                width: maskVal+"%"
            })

            bg_img.css({
                'transform': `scale(${zoomVal})`
            })

            if(persent > 0.3){
                intro_txt.addClass('active')
            } else {
                intro_txt.removeClass('active')
            }

            if(persent >= 60){
                end_txt.addClass('active')
            } else {
                end_txt.removeClass('active')
            }
        }

        
    function init(){ //최초 한번실행
        changeValue(); // 모션함수 담음
        bindEvent();
    };

    function bindEvent(){
        $(window).scroll(function(e){ //스크롤 이벤트를 추가합니다.
            changeValue(); // 스크롤 일어날 때마다 모션 함수 담은 함수 실행
        });

        $(window).resize(function(){
            changeValue();
        });
    };
 
    init(); //start
})