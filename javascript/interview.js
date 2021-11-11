let erPaaPause3 = true;

let observer3 = new IntersectionObserver((entries, observer) => {
    for (const videosted3 of entries){ 
        if (videosted3.isIntersecting && erPaaPause3===true) { 
            interviewvideo.play();
            erPaaPause3 = false;
        } else {
            interviewvideo.pause();
            erPaaPause3 = true;
        }
    };

}, {threshold:1}); //1 = artikel skal være 100% synlig for at tælle med

// Hovedprogram
const interviewvideo = document.getElementById("interviewvideo"); //Observer kun på sted med id = video
observer3.observe(interviewvideo);

const slideshowImages = document.querySelectorAll(".slideshowet"); //henter billedet til slideshow. 

const nextImageDelay = 8000; //sekunder billeder bliver vist. 
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block"; //stopper for at vise alle billeder på en gang. 


setInterval(nextImage, nextImageDelay);

function nextImage() { //formlen for skift mellem billeder
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.display = "block";
}




