let isLoggedIn = false;

//navbar fade for small screen
$(window).scroll(function () {
  if (window.innerWidth < 750) {
    if ($(this).scrollTop() > 10) {
      $(".search-input-wrap").fadeOut();
    } else {
      $(".search-input-wrap").fadeIn();
    }
  } else return 0;
});

function myFunction() {
  if (window.innerWidth < 750) {

    if (document.getElementById("menu-collapse").style.display === "none") {
      document.getElementById("menu-collapse").style.display = "block";
    } else {
      document.getElementById("menu-collapse").style.display = "none";
    }
  } else return 0;
}

$(document).ready(function () {
  $(".banner-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//slick-corousel

$(".content-stage").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

// slick for thumbnail slider

$(".partner-slider").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300,
});

//scroll to top icon

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".page-scroll-top").fadeIn();
  } else {
    $(".page-scroll-top").fadeOut();
  }
});
$(".page-scroll-top").click(function () {
  document.documentElement.scrollTop = 0;
});

//slick prev scripts

function login() {
  var eSewaID = document.querySelector(".e-number").value;
  var password = document.querySelector(".e-password").value;
 
  // Check if eSewa ID and password match
  if (eSewaID === "Prakash" && password === "Khatri") {
    alert("Login Successful!");
    isLoggedIn = true;
    document.querySelector(".chatbot-toggler").style.display = "flex"; // Show the chatbot content
    chatbotToggler.style.display = "flex"; // Show the chatbot content
    document.querySelector(".login-btn").style.display = "none"; // Hide the login button
    document.querySelector(".register-btn").style.display = "none"; // Hide the register button
    document.querySelector(".id-wrap").style.display = "none"; // Hide the eSewa ID input
    document.querySelector(".pw-wrap").style.display = "none"; // Hide the password input
    document.querySelector(".logout-btn").style.display = "block"; // Show the logout button
  } else {
    alert("Login Failed. Please check your eSewa ID and password.");
    isLoggedIn = false;
  }
  // Prevent form submission
  return false;
}

function logout() {
  isLoggedIn = false
  document.querySelector('.login-btn').style.display= 'block';
  document.querySelector('.register-btn').style.display= 'block';
  document.querySelector('.id-wrap').style.display= 'block';
  document.querySelector('.pw-wrap').style.display= 'block';
  document.querySelector('.chatbot-toggler').style.display= 'flex';
  document.querySelector('.logout-btn').style.display= 'none';
}

function login_logout(){ 
  if(isLoggedIn == false){
    login();
    return false;
  }
  else {
    logout();
    return false; // Always return false to prevent form submission
  }
}