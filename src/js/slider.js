
class Slider {

  constructor(slideArray) {
    this.url =[
      'url("/assets/img/fon1.jpg")',
      'url("/assets/img/fon2.jpg")'
    ];
    this.slideArray = document.getElementsByClassName(slideArray);
    this.currentSlide=0;
    this.sliderNode = document.getElementById('slider-node');
    for (let child of this.sliderNode.children){
      child.style.display='none';
    }
    // this.slideArray[this.currentSlide].style.display='block';

    this.switchArray = document.getElementsByClassName('header__slider__switcher-button');
    this.mount();
    this.switchArray[this.currentSlide].classList.add('disabled__switch');
    this.timerId = setInterval(()=>this.slide(), 5000);
    this.sliderNode.addEventListener('mouseover',()=>{
      clearInterval(this.timerId);
    });
    this.sliderNode.addEventListener('mouseout',()=>{
      this.timerId = setInterval(()=>this.slide(), 5000);
    });


  }

  slide(){
    this.unmount();
    if (this.currentSlide<this.slideArray.length-1){
      this.currentSlide+=1;
    }
    else {
      this.currentSlide = 0;
    }
    this.mount()

  }
  unmount(){

    this.slideArray[this.currentSlide].style.display='none';
    this.switchArray[this.currentSlide].classList.remove('disabled__switch');
  }
  mount(){
    document.body.style.backgroundImage=this.url[this.currentSlide];
    this.slideArray[this.currentSlide].style.display='block';
    this.switchArray[this.currentSlide].classList.add('disabled__switch');
  }







}
let slider= new Slider('header__slider');
