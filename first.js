/*eslint-env browser*/

//---------- NAVIGATION --------------

function didTapAboutMe() {
    var scroll = new SmoothScroll();
    var anchor = document.querySelector('#container-about-me');
    scroll.animateScroll(anchor);
    closeDropdown();
}

function didTapProjects() {
    var scroll = new SmoothScroll();
    var anchor = document.querySelector('#container-projects');
    scroll.animateScroll(anchor);
    closeDropdown();
}

function didTapContact() {
    var scroll = new SmoothScroll();
    var anchor = document.querySelector('#container-contact-me');
    scroll.animateScroll(anchor);
    closeDropdown();
}

//---------- DROP DOWN --------------
var topNav = document.getElementById('dropdownClick');
var dropdown = document.getElementById('dropdownIcon');

dropdown.addEventListener("click", function () {
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
        topNav.style.height = "200px";
    } else {
        closeDropdown();
    }
});

function closeDropdown() {
    topNav.className = "topnav";
    topNav.style.height = "50px";
}

//---------- ABOUT ME --------------

function didTapWhatsapp() {
    console.log("https://api.whatsapp.com/send?phone=+972527979914");
}

//---------- SLIDER --------------
function moveSlider(innerSliderName, imgCount, isLeft) {

    var innerSlider = document.getElementById(innerSliderName)

    var currentMargin = parseFloat(innerSlider.style.marginLeft);
    if (!currentMargin) {
        currentMargin = 0;
    }

    var additionalMargin = -100;
    if (isLeft == true) {
        additionalMargin *= -1;
    }
    var newMargin = (currentMargin + additionalMargin) + "%";
    //the last highest margin
    var lastMargin = ((imgCount - 1) * -100);

    //checks if should move to beginning/end
    if (isLeft && currentMargin >= 0) {
        newMargin = lastMargin + "%";
    } else if (!isLeft && currentMargin <= lastMargin) {
        newMargin = "0%";
    }
    innerSlider.style.marginLeft = newMargin;

    var selectedIndex = -1 * parseFloat(newMargin) / 100;
    var sliderNum = innerSliderName.substr(innerSliderName.length - 1)
    var bullets = document.getElementsByClassName('bullet' + sliderNum)
    for (i = 0; i < bullets.length; i++) {
        bullets[i].style.backgroundColor = "#c5c5d1";
        if (i == selectedIndex) {
            bullets[i].style.backgroundColor = "#292939";
        }
    }
}

function setBulletChecked(innerSlider, imgCount, isLeft) {

}

//---------- DROP DOWN --------------
//---------- DROP DOWN --------------


//---------- CONTACT LIST --------------
var tfName = document.getElementById('name');
var tfEmail = document.getElementById('email');
var tfMessage = document.getElementById('message');

var errName = document.getElementById('errName');
var errEmail = document.getElementById('errEmail');
var errMsg = document.getElementById('errMsg');

function didClickSend() {
    var isValid = validateTextFields();
    if (isValid) {
        //send email
    }
}

function validateTextFields() {
    var isValid = true;
    if (!tfName.value || tfName.value == "") {
        errName.textContent = "Name can't be empty";
        errName.style.visibility = "visible";
        isValid = false;
    }

    var atPosition = tfEmail.value.indexOf("@");
    var dotPosition = tfEmail.value.lastIndexOf(".");
    var isDotInRightPosition = dotPosition + 2 >= tfEmail.value.length;
    if (!tfEmail.value || tfEmail.value == "") {
        errEmail.textContent = "Email can't be empty";
        errEmail.style.visibility = "visible";
        isValid = false;
    } else if (atPosition < 1 || dotPosition < atPosition + 2 || isDotInRightPosition) {
        errEmail.textContent = "The Email is not valid";
        errEmail.style.visibility = "visible";
        isValid = false;
    }
    if (!tfMessage || tfMessage.value == "") {
        errMsg.textContent = "Message can't be empty";
        errMsg.style.visibility = "visible";
        isValid = false;
    }
    return isValid;
}

function resetErrors() {
    errName.style.visibility = "hidden";
    errEmail.style.visibility = "hidden";
    errMsg.style.visibility = "hidden";
}
