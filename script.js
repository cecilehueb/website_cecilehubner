// script for autoscroll


let ScrollRate = 20;

window.addEventListener('load', scrollDiv_init());


function scrollDiv_init() {
    DivElmnt = document.getElementById('containerArchive');

        ReachedMaxScroll = false;

        DivElmnt.scrollTop = 0;
        PreviousScrollTop = 0;

        ScrollInterval = setInterval('scrollDiv()', ScrollRate);
};

function scrollDiv() {

    if (!ReachedMaxScroll) {
        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop++;

        ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
    }
    else {
        ReachedMaxScroll = (DivElmnt.scrollTop == 0) ? false : true;

        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop--;
    }
}

function pauseDiv() {
    clearInterval(ScrollInterval);
}

function resumeDiv() {
    PreviousScrollTop = DivElmnt.scrollTop;
    ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}


// script for filter buttons

let checkboxes = document.querySelector('#navigation');
let allCheckboxes = document.querySelectorAll('input[type="radio"]');
let elementDiv = document.getElementsByClassName("elementDiv");
let currentSelection = [];

checkboxes.addEventListener('change', function (e) {
    for (let i = 0; i < allCheckboxes.length; i++) {
        removeClass(allCheckboxes[i].id, "show");
    };

    for (let i = 0; i<elementDiv.length; i++) {
        if (elementDiv[i].classList.contains("grow")){
            elementDiv[i].classList.remove("grow");
        }
    }

    if (e.target.checked) {
        currentSelection.push(e.target.id);
        addClass(e.target.id, "show");
    } else if (!e.target.checked) {
        let pos = currentSelection.indexOf(e.target.id);
        if (pos > -1) {
            currentSelection.splice(pos, 1);
        }
    }
    console.log(currentSelection);
});

function addClass(targetId, className) {
    for (let i = 0; i < elementDiv.length; i++) {

        if (elementDiv[i].classList.contains(targetId)) {

            elementDiv[i].classList.add(className);
        }
    }
}

function removeClass(targetId, className) {
    for (let i = 0; i < elementDiv.length; i++) {

        if (elementDiv[i].classList.contains(targetId)) {
            elementDiv[i].classList.remove(className);
        }
    }
}

// addClass("elementDiv", "show"); 
// shows every element when loading page

// when clicking elements

let containerArch = document.getElementById("containerArchive");


containerArch.addEventListener("click", function(event) {
    let x = event.target;
    let parentDiv = x.closest(".elementDiv");

    if (parentDiv.classList.contains("grow")) {
        if (x.tagName == "A" || x.tagName =="SPAN") {
            // nothing happens
        } else { 
            parentDiv.classList.remove("grow");
            let content = parentDiv.querySelector(".workDescription");
            content.style.display = "none";

    };
    } else if (parentDiv.classList.contains("show")){
        parentDiv.classList.add("grow");
        }
});


// about button

let aboutButtonAll = document.querySelectorAll(".fold_about");

for (let i =0; i<aboutButtonAll.length; i++){
    aboutButtonAll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
}


// image to text



// script to get keywords
let SavedAs = document.querySelectorAll('.savedAs');
function getKeywords() {
    for (let i = 0; i < elementDiv.length; i++) {
        let elements = elementDiv[i];
        let keywords = elements.classList;
        let keywordsArr = Array.from(keywords);
        let indexElementDiv = keywordsArr.indexOf("elementDiv");
        if (indexElementDiv > -1) {
            keywordsArr.splice(indexElementDiv, 1);
        };
        let indexShow = keywordsArr.indexOf("show");
        if (indexShow >= 0) {
            keywordsArr.splice(indexShow, 1);
        };
        SavedAs[i].innerHTML = `saved as: <span> ${keywordsArr.join(' / ')} </span> <span class="readmore">read more</span>`;
    };
};

getKeywords();





// image slideshow

var slideIndex = [1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1,8);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  };
  x[slideIndex[no]-1].style.display = "block";  
};

// image size 

// let allImages = document.querySelectorAll("div.mySlides > img");

// for (let i = 0; i<allImages.length; i++) {
//     if (allImages[i].width > allImages[i].height) {
//         allImages[i].style.width = "100%";
//     } else {
//         allImages[i].style.width = "70%";
//         // let parentDiv = allImages[i].closest(".elementDiv");
//         // parentDiv.style.width = "60%";
//     };
// }



//test
