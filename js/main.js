function slidingHeader(){
// creat array from images ECMAscript 6 features | get slider images 
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slides for indicators
var slidesCount = sliderImages.length;

// set current slide 
var currntSlide = 1;

// get the slide number of image of slider
var slideNumberElement = document.getElementById("slide-number")

// creat the ul element to the indicators and set ID to it
var indicatorsElement = document.createElement("ul");
indicatorsElement.setAttribute('id','indicator-ul');

// creat list item based on images number
for(var i=1; i<=slidesCount; i++ ){
    var indicatorsItem = document.createElement("li");
    indicatorsItem.setAttribute('data-index', i)
    indicatorsItem.appendChild(document.createTextNode(i))
    indicatorsElement.appendChild(indicatorsItem)
}
//add created ul element to the page
document.getElementById("indicator").appendChild(indicatorsElement);

//making array of indicator 
var indicatorsBullets = Array.from(document.querySelectorAll("#indicator-ul li"));

// get the created ul
var indicatorUlist = document.getElementById("indicator-ul")

//previous and next button 
var nextButton = document.getElementById("next")
nextButton.addEventListener('click', function(){
  if(nextButton.classList.contains('disabled')){
      return false;
  }else{
      currntSlide++;
      activeDesign()
  }
})
var prevButton = document.getElementById("prev")
prevButton.addEventListener('click', function(){
    if(prevButton.classList.contains('disabled')){
        return false;
    }else{
        currntSlide--;
        activeDesign()
    }})

//creat the active design function
function activeDesign(){
    slideNumberElement.innerHTML = `slide# ${currntSlide} of ${slidesCount}`;
    // assign class active to the active image when click
    clearActive();
    sliderImages[currntSlide - 1].classList.add('active')
    //assign actvie class to the list item 
    indicatorUlist.children[currntSlide -1].classList.add('active')
    //check if the current slide is the first or the last to activate the disabled calass
    if(currntSlide == 1){
        prevButton.classList.add('disabled') 
    }else{
        prevButton.classList.remove('disabled') 
    }
    if(currntSlide == slidesCount){
       nextButton.classList.add('disabled')
    }else{
       nextButton.classList.remove('disabled')
    }
    }
  
activeDesign();

//remove active design on click on images
function clearActive(){
    sliderImages.forEach(function (img){
        img.classList.remove('active')
    })
    // creat array from indicators element 
    indicatorsBullets.forEach(function (bullets){
        bullets.classList.remove('active')
    })
   }
}
slidingHeader();

//navbar scroll
window.addEventListener("scroll", ()=>{
    let navi = document.getElementById('navi')
    let after = document.querySelector(".nav-link:hover::after")   
    navi.classList.toggle("scroll", scrollY > 0)
    after.classList.toggle("text-color", scrollY > 0)
});
    
// animation scroll om work section
function apearElementWork(){
    var text = document.querySelector(".work h3");
        introPosition = text.getBoundingClientRect().top;

        secPosition1 = document.getElementById("sec1");
        secPosition2 = document.getElementById("sec2");
        secPosition3 = document.getElementById("sec3");

        screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        text.classList.add("animate__bounceInDown" , "apear");
        secPosition1.classList.add("animate__bounceInLeft" , "apear")
        secPosition2.classList.add("animate__bounceInUp" , "apear")
        secPosition3.classList.add("animate__bounceInRight" , "apear")
    }
}
window.addEventListener("scroll", apearElementWork);

// animation on features section
function animateEfeatures(){
  var features = document.querySelector(".features")
  introPositionFeatures = features.getBoundingClientRect().top;
   
  var colum1 = document.querySelector(".feat1") 
  var colum2 = document.querySelector(".img")  

  workPosition = window.innerHeight / 2;

  if(introPositionFeatures < workPosition){
    colum1.classList.add("animate__zoomInLeft" , "apear")
    colum2.classList.add("animate__zoomInRight" , "apear")
}
}
window.addEventListener("scroll", animateEfeatures);


//animate service section
function animateService() { 
    var service = document.querySelector(".service")
        introPositionService = service.getBoundingClientRect().top;
 
        imgCol1 = document.querySelector(".img-service")
        iconsPara = document.querySelector(".icons-grid")

        servicePosition = window.innerHeight /2;

        if(introPositionService < workPosition){
            imgCol1.classList.add("animate__zoomInUp" , "apear")
            iconsPara.classList.add("animate__bounceInRight" , "apear")
        }

}
window.addEventListener("scroll", animateService);

// our team section
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({margin:20});
  });

function animateOurTeam(){
    var ourTeam = document.querySelector(".our-team");
        OurTeamIntroPosition = ourTeam.getBoundingClientRect().top;

        OurTeamPosition = window.innerHeight /2;
    
    if(OurTeamIntroPosition < OurTeamPosition){
        ourTeam.classList.add("animate__fadeIn");
    }
}
window.addEventListener('scroll', animateOurTeam );

//animate contact section
function animateContact() { 
    var contact = document.querySelector(".contact")
        introPositionContact = contact.getBoundingClientRect().top;
 
        form = document.querySelector(".contact-info")

       contactPosition = window.innerHeight /2;

        if(introPositionContact < contactPosition){
            contact.classList.add("animate__fadeIn");
            form.classList.add('animate__backInUp' , "apear");
        }

}
window.addEventListener("scroll", animateContact);

// setting box
 var settingBox = $(".color_item");

 settingBox.eq(0).css("backgroundColor", "#d92027");
 settingBox.eq(1).css("backgroundColor", "#000839");
 settingBox.eq(2).css("backgroundColor", "#ff7272");
 settingBox.eq(3).css("backgroundColor", "#00263b");
 settingBox.eq(4).css("backgroundColor", "#84a9ac");

settingBox.click(function () { 
    var color = $(this).css("backgroundColor");

    $(".change").css("color", color );
    $(".bullet").css("border-color",color );
    $(".hover").css("backgroundColor",color )    
});

$('#options i').click(function(){

    var coloBox = $(".colors-box").outerWidth();
    if($("#options").css('left') == "0px")
    {
        $("#options").animate({left:`-${coloBox}`} , 1000);
        $('#options i').removeClass("fa-spin")
    }
    else 
    {    
        $("#options").animate({left:`0`} , 1000);
        $('#options i').addClass("fa-spin")
    }
});


// nav bullets 
function navBullets(){
    // Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".nav-link");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);
}
navBullets();
















