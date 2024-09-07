var trending_nav = $(".nav_link a");
var section = $(".section");
var boxImg = $(".box_img");
var shoeImg = $(".shoe_img");
$(".nav_link").eq(0).css("background-color", "red");
    trending_nav.on("click", function() {
        var card_id = $(this).html();
        for (var i = 0; i < section.length; i++) {
            if (section.eq(i).attr("id") == card_id) {
                section.eq(i).css("display", "flex");
                $(".nav_link").eq(i).css("background-color", "red");
            } else {
                section.eq(i).css("display", "none");
                $(".nav_link").eq(i).css("background-color", "white");
            }
        }
    });

    $(".box_img").each(function() {
        var boxImg = $(".box_img");
        var shoeImg = $(".shoe_img");

        boxImg.on("mousemove", function(e) {
            // Get the position of the cursor relative to boxImg
            var offset = $(this).offset();
            var mouseX = e.pageX - offset.left;
            var mouseY = e.pageY - offset.top;
    
            // Calculate the center position of shoeImg
            var shoeImgWidth = shoeImg.width();
            var shoeImgHeight = shoeImg.height();
            
            var centerX = mouseX - shoeImgWidth / 2;
            var centerY = mouseY - shoeImgHeight / 2;
    
            // Check if the cursor is within the bounds of boxImg
            if (mouseX >= 0 && mouseX <= $(this).width() && mouseY >= 0 && mouseY <= $(this).height()) {
                shoeImg.css({
                    left: centerX + "px",
                    top: centerY + "px",
                    position: "absolute",
                    display: "block", // Ensure shoeImg is displayed
                    height: "35vh",
                    width: "20vw"
                });
            } else {
                shoeImg.css({
                    display: "none"
                });
            }
        });
    
        boxImg.on("mouseleave", function() {
            shoeImg.css({
                display: "none"
            });
        });
    });
    

    function scrolll() {
        var vw = $(window).width(); // Get the viewport width in pixels
        $('.trending_items_container').animate({ scrollLeft: '-=' + vw }, 100);
    };
    
    function scrollr() {
        var vw = $(window).width(); // Get the viewport width in pixels
        $('.trending_items_container').animate({ scrollLeft: '+=' + vw }, 100);
    };
    
   
// const handleOnMouseMove = e => {                        //For the big image animation
//     const {currentTarget: target} = e;

//     const rect = target.getBoundinfClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;
//     target.style.setProperty("--mouse-x", `${x}px`)
//     target.style.setProperty("--mouse-y", `${y}px`)
// }

document.addEventListener("DOMContentLoaded", function() {
    const imgContainer = document.querySelector('.sectionOne .imgContainer');
    const imgWrappers = imgContainer.querySelectorAll('.imgWrapper');
    const numImages = imgWrappers.length;
    let currentIndex = 0;
    let isScrolling;
    let scrollInterval;

    imgContainer.innerHTML += imgContainer.innerHTML;

    function scrollImages() {
        currentIndex = (currentIndex + 1) % numImages;
        imgContainer.scrollTo({
            left: (currentIndex % numImages) * imgContainer.clientWidth,
            behavior: 'smooth'
        });

        if (currentIndex === 0) {
            setTimeout(() => {
                imgContainer.scrollLeft = 0;
            }, 1000); 
        }
    }

    scrollInterval = setInterval(scrollImages, 1500);

    imgContainer.addEventListener('scroll', function() {
        window.clearInterval(scrollInterval);
        if (imgContainer.scrollLeft >= (numImages * imgContainer.clientWidth)) {
            imgContainer.scrollLeft = imgContainer.scrollLeft % (numImages * imgContainer.clientWidth);
        }

        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            currentIndex = Math.round(imgContainer.scrollLeft / imgContainer.clientWidth);
            scrollInterval = setInterval(scrollImages, 1500); 
        }, 66); 
    });
});

function toggleMenu() {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    leftSide.classList.toggle('show-menu');
    rightSide.classList.toggle('show-menu');
}




// for(const card of document.querySelectorAll(".sectionOne")){
//     card.onmousemove = e => handleOnMouseMove(e);
// }

document.addEventListener('DOMContentLoaded', function() {
    const footwearContainer = document.querySelector('.footwear-container');
    const footwearOverlay = document.getElementById('footwear-overlay');
    const footwearOverlay2 = document.getElementById('footwear-overlay-2');
    const footwears = document.querySelectorAll('.footwear img');

    footwears.forEach(footwear => {
        footwear.addEventListener('click', function() {
            footwearOverlay.src = this.src;
            footwearOverlay.style.display = 'block';
            footwearOverlay2.src = this.src;
            footwearOverlay2.style.display = 'block';
        });
    });

    footwearContainer.addEventListener('scroll', function() {
        footwears.forEach(footwear => {
            const rect = footwear.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                footwearOverlay.src = footwear.src;
                footwearOverlay2.src = footwear.src;
                footwearOverlay.style.display = 'block';
                footwearOverlay2.style.display = 'block';
            }
        });
    });
});
window.addEventListener('load', function() {
    // After 2 seconds, fade out the curtain
    setTimeout(function() {
        var curtain = document.querySelector('.curtain');
        if (curtain) {
            curtain.style.opacity = 0;
            curtain.style.pointerEvents = 'none'; // Optional: Disable pointer events on curtain
        }
    }, 1000); // 2000 milliseconds = 2 seconds
});


