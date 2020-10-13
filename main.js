let counter = 0;
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const slider = document.querySelector('#slider');
const carouselIndicators = document.querySelector('#carouselIndicators');
const sliderContainer = document.querySelector('#slider-container');
const max = document.querySelectorAll('.slide').length - 1;

function sliderFunc(){
    if(counter < max){
        counter++;
        slider.style.left = '-' + 1200 * counter + 'px';
    }else{
        counter = 0;
        slider.style.left = '-' + 1200 * counter + 'px';
    }
}

let timer = setInterval(sliderFunc, 4000);

sliderContainer.addEventListener('mouseover', () =>{
    clearInterval(timer);
});

sliderContainer.addEventListener('mouseout', ()=>{
    timer = setInterval(sliderFunc, 4000);
});

next.addEventListener('click', sliderFunc)
back.addEventListener('click', () => {
    if(counter >=0){
        counter--;
        slider.style.left = '-' + 1200 * counter + 'px';
    }
});
carouselIndicators.addEventListener('click', sliderFunc);
