let count = 0
let slide_img = document.getElementsByClassName('slide_img')
let slide_img2 = document.getElementsByClassName('slide_img2')


window.onload = () => {
    setInterval(() => {
       count++ 
       countOver(count)
    }, 2000);
}

const countOver = (n) =>{
    if(n+1 > slide_img.length) {
        count = 0
        n = 0
        showImage(n)
    } else if(n < 0) {
        count = slide_img.length -1
        n = slide_img.length -1
        showImage(n)
    }
    showImage(n)
}

const showImage = (n) => {
    for(let i = 0; i < slide_img.length; i++) {
        slide_img[i].style.display = 'none'
    }
    slide_img[n].style.display = 'block'
}
