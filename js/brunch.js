(() => {
    const siteS = document.querySelector('.site_section')
    const siteP = document.querySelector('.site_product')

    let scrollTop = 0
    let intro_img = document.getElementsByClassName('intro_img')[0]
    let intro_title = document.getElementsByClassName('intro_title')[0]

    // 변수.getBoundingClientRect()
    // : 변수의 bottom, top, left, right 값을 알 수 있음
    function showValue() {
        let y = siteS.getBoundingClientRect().top

        // 이미지가 화면의 40%만큼 올라오면 addClass
        if(y < window.innerHeight * 0.2){
            siteS.classList.add('active')
        }
    }

    function showValue2() {
        let y = siteP.getBoundingClientRect().top
        console.log(y)

        if(y < window.innerHeight * 0.35) {
            siteP.classList.add('active')
        }
    }

    // 스크롤시 showValue 실행
    window.addEventListener('scroll', showValue, false)
    window.addEventListener('scroll', showValue2, false)
    window.addEventListener('scroll', () => {
        scrollTop = document.documentElement.scrollTop
        console.log(scrollTop)
    
        intro_img.style.opacity = 1 - scrollTop / 500
        
        intro_title.style.opacity = scrollTop / 500
        // intro_title.style.transform = `translateY(${scrollTop/15}px)`
    })
})()



