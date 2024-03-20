const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () =>{
    if(this.scrollY > 0){
        navbar.classList.remove('py-4')
        navbar.classList.add('shadow', 'py-3')
    }else{
        navbar.classList.add('py-4')
        navbar.classList.remove('shadow', 'py-3')
    }
})

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderlist = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = document.querySelector('.item')

thumbnail.appendChild(thumbnailItems[0])
// function for next button
nextBtn.onclick = function(){
    moveSlider('next')
}

//function for prev button
nextBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider(direction){
    let sliderItems = sliderlist.querySelector('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

        if(direction ==='next'){
            sliderlist.appendChild(sliderItems[0])
            thumbnail.appendChild(thumbnailItems[0])
            slider.classList.add('next')

        }else{
            sliderlist.prepend(sliderItems[sliderItems.length -1])
            thumbnail.prepend(thumbnailItems[thumbnailItems.length -1])
            slider.classList.add('prev')
        }
        slider.addEventListener('animationend', function(){
            if(direction ==='next'){
                slider.classList.remove('next')

            }else{
                slider.classList.remove('prev')
            }
        },{once:true})// remove  the event  listener after it's trigger
}