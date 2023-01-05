//when #go-left arrow is clicked:
//  call the function to go to the previous slide.

//when #go-right arrow is clicked:
//  call the function to go to the next slide.

//create a variable for all slides to be accessed by the functions.

//when the function for next slide is called:
//  find the index of the current image
//  if the value of the next number is greater than the length of all the slides:
//    assign 1 to the next number variable
//  show the slide at the next number value

//when the function for previous slide is called:
//  find the index of the current image
//  if the value of the next number is less than or equal to 0:
//    assign the length of all slides to the previous number variable
//  show the slide at the previous number value

//when the function for showing a slide is called:
//  find the index of the slide to show
//  find the index of the current slide
//  add hidden class to the slides
//  remove hidden class from the current slide

console.log("JavaScript loaded!!!");

$("#go-left").click(function(){
  prevSlide();
});

$("#go-right").click(function(){
  nextSlide();
});

const SLIDES = $(".novice-carousel > .image");

function nextSlide(){
  let nextNum = SLIDES.index($(".image:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length){
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".image:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
}

$('.arrow').hover(function() {
    $(this).css('cursor','pointer');
});
