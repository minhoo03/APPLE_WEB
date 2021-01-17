$(function(){

    var scrollBody = $('.fix_motion'); //부모 스크롤 엘리먼트

    // 기본
    var scrollHeight; // 스크롤 높이
    var sectionOffsetTop; //섹션의 오프셋 탑 변수
    var sectionScrolTop; //섹션의 스크롤 탑 변수
    var scrollRealHeight; //실제로 스크롤해야될 높이를 담을 변수를 선업합니다
    var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
    var scrollPerecnt; // 스크롤위치 / 스크롤 길이로 구한 비율 값
    var percent; // 스크롤 백분율값을 담을 변수를 선업합니다

    // 반응형
    var windowWdith = $(window).width(); // 화면의 넓이값
    var mobileSize = 1024; //모바일로 변환된 사이즈 설정 (기기명으로 모바일버전을 체크하는게 아니라 스크린 사이즈가 1024보다 작을경우 모바일로 간주함)
    var isMobile; //화면사이즈가 모바일인지 체크하는 변수

    // 캔버스
    var el = document.querySelector('.canvas_wrap'); //캔버스를 담을 요소
    var canvas = document.createElement('canvas'); // 캔버스 생성
    var ctx = canvas.getContext('2d'); //렌더링 컨텍스트 타입을 2d로 선언
    var imgSrc = '../img/seq/'; //이미지의 경로 설정
    var imgFormat = '.jpg'; // 이미지 포맷 설정
    var imgLength = 69; // 총 이미지의 렝쓰
    var pcImgSize = [1920,1080]; // pc일때 이미지 사이즈 [가로,세로]
    var mobileImgSize = [640,360]; // mobile일때 이미지 사이즈 [가로,세로]
    var imgWidth; // 이미지 넓이
    var imgHeight; // 이미지 높이
    var imgArray = []; // 이미지를 담을 배열
    var imageIterlator = 0; // 이미지가 로드되었는지 체크하는 값


// 6개
// setProperty() - 반복, 스크롤할 때 값 세팅
// setCanvas() - 캔버스 세팅
// scrollFunc() - 반복, 이미지 시퀀스 구함, renderCanvas 실행
// renderCanvas() - 반복됨, 시퀀스를 통해 캔버스 그림
// bindEvent() - 스크롤 할 때 이벤트 실행 집합체
// init() - 초기화



    // 반복 실행
    function setProperty(){ //스크롤할때 변할 값들을 셋팅해주는 함수

        scrollHeight = scrollBody.height(); // 스크롤 높이
        sectionOffsetTop = scrollBody.offset().top; //섹션의 오프셋 탑 변수

        scrollRealHeight = (scrollHeight - $(window).height()); //실제로 스크롤해야될 높이값을 구합니다
        winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구합니다
        sectionScrolTop = winScrollTop - sectionOffsetTop

        scrollPerecnt = sectionScrolTop / scrollRealHeight; // 스크롤위치 / 스크롤 길이로 구한 비율 값
        percent = scrollPerecnt * 100; //백분율을 구합니다

        // 미디어 쿼리
        windowWdith = $(window).width(); //윈도우의 넓이
        isMobile = windowWdith > mobileSize ? false : true; //PC일경우 false, MOBILE일경우 true

        imgWidth = !isMobile ? pcImgSize[0] : mobileImgSize[0]; // 이미지 넓이
        imgHeight = !isMobile ? pcImgSize[1] : mobileImgSize[1];; // 이미지 높이

    };

    function setCanvas(){ //캔버스 기본값 셋팅

        canvas.width = imgWidth; //캔버스 넓이 세팅
        canvas.height = imgHeight; //캔버스 높이 세팅를

    };

    // 반복 실행
    function scrollFunc(){ //스크롤할때 실행될 함수

        //이미지 시퀀스 번호 구합니다.
        var sequence = Math.max(imgLength-imgLength, Math.min(Number((imgLength-imgLength - (imgLength-imgLength - imgLength * scrollPerecnt)).toFixed(0)), imgLength)); 
        renderCanvas(sequence); //캔버스를 그리는 함수


    };

    // 반복 실행된다
    function renderCanvas(sequence){ //캔버스에 이미지를 그리는 함수

        //지정한 x,y위치값과 넓이 높이 값을 넣어 캔버스를 클리어해줌
        ctx.clearRect(0, 0, imgWidth, imgHeight);

        //이미지 배열에 담아둔 이미지를 캔버스에 그림
        ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight); 

    };



    function bindEvent(){ //이벤트를 바인드해주는 함수

        $(window).scroll(function(){
            setProperty()
            scrollFunc(); //스크롤할때 실행될 함수

        });

        $(window).resize(function(){

            setProperty(); //스크롤할때 변할 값들을 셋팅해주는 함수
            setCanvas(); //캔버스 기본값 셋팅
            scrollFunc(); //스크롤할때 실행될 함수

        });
    };

    function init(){ // 초기화

        el.appendChild(canvas); // canvas_wrap 엘리먼트에 캔버스를 담아줌

        for(var i = 0; i <= imgLength; i++){

            var img = new Image(); //이미지 객체 인스턴스 생성
            var path = imgSrc+i+imgFormat; //이미지 패스 생성

                img.src = path; //img에 패스 대입

                img.onload = function(){
                    imageIterlator += 1; //이미지 로드 카운트 카운트
                    if(imageIterlator === imgLength){ //이미지가 로드된 횟수와 이미지 렝스가 같아질 경우에 인터렉션 함수들을 호출함

                        setProperty(); //스크롤할때 변할 값들을 셋팅해주는 함수
                        setCanvas(); //캔버스 기본값 셋팅
                        bindEvent(); //스크롤 이벤트 바인드
                        scrollFunc(); //스크롤할때 실행될 함수

                    };
                }

                imgArray.push(img); //이미지 배열에 이미지를 담음

        };
    };

    init(); //start

});