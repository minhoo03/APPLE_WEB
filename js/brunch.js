(() => {
    const siteS = document.querySelector('.site_section')
    const siteP = document.querySelector('.site_product')
    const max_left = document.querySelector('.max_left')
    const site_macbook = document.querySelector('.site_macbook')

    const phone_text1 = document.querySelector('.phone_text1')
    const phone_text2 = document.querySelector('.phone_text2')
    const phone_text3 = document.querySelector('.phone_text3')

    let scrollTop = 0
    let intro_img = document.getElementsByClassName('intro_img')[0]
    let intro_title = document.getElementsByClassName('intro_title')[0]
    let max_intro =document.getElementsByClassName('max_intro')[0]

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
        } else {
            siteP.classList.remove('active')
        }
    }

    function showValue3() {
        let y = max_left.getBoundingClientRect().top

        if(y < window.innerHeight * 0.65) {
            max_intro.classList.add('active')
        } else {
            max_intro.classList.remove('active')
        }
    }

    function showValue4() {
        let y = site_macbook.getBoundingClientRect().top

        if(y < window.innerHeight * 0.65) {
            site_macbook.classList.add('active')
        } else {
            site_macbook.classList.remove('active')
        }
    }

    function showValue5() {
        let y = phone_text1.getBoundingClientRect().top

        if(y < window.innerHeight * 0.65) {
            phone_text1.classList.add('active')
        }else {
            phone_text1.classList.remove('active')
        }
    }

    function showValue6() {
        let y = phone_text2.getBoundingClientRect().top

        if(y < window.innerHeight * 0.65) {
            phone_text2.classList.add('active')
        }else {
            phone_text2.classList.remove('active')
        }
    }

    function showValue7() {
        let y = phone_text3.getBoundingClientRect().top

        if(y < window.innerHeight * 0.65) {
            phone_text3.classList.add('active')
        }else {
            phone_text3.classList.remove('active')
        }
    }

    // 스크롤시 showValue 실행
    window.addEventListener('scroll', showValue, false)
    window.addEventListener('scroll', showValue2, false)
    window.addEventListener('scroll', showValue3, false)
    window.addEventListener('scroll', showValue4, false)
    window.addEventListener('scroll', showValue5, false)
    window.addEventListener('scroll', showValue6, false)
    window.addEventListener('scroll', showValue7, false)

    window.addEventListener('scroll', () => {
        scrollTop = document.documentElement.scrollTop
        console.log(scrollTop)
    
        intro_img.style.opacity = 1 - scrollTop / 500
        
        intro_title.style.opacity = scrollTop / 500
        // intro_title.style.transform = `translateY(${scrollTop/15}px)`
    })
})()



