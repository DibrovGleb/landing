const lawyers = document.querySelectorAll('.lawyer'),
      leftArrow = document.querySelector('.left-arrow'),
      rightArrow = document.querySelector('.right-arrow')
    
var px = 0;

leftArrow.addEventListener('click', () =>{
    px === 0 ? console.log() : move(px +=198)
})

rightArrow.addEventListener('click', ()=>{
    px <= -600 ? console.log() : move(px -=198)
})

function move(px){
    lawyers.forEach(element => {
        element.style.transform = `translatex(${px}px)`
    });
}


