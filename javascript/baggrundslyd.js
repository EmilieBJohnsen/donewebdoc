// javascript til lyd
const mp3 = new Audio("images/baggrundslyd.mp3");
let erPaaPause2 = true;


//intersection observer
let observer2 = new IntersectionObserver((entries, observer) => { 
    for (const artikel of entries) {
        if (artikel.isIntersecting && erPaaPause === true) {
            mp3.play();
            mp3.loop = true;
            mp3.volume = 0.2;
            erPaaPause2 = false;
        } else {
            mp3.pause();
            erPaaPause2 = true;
        }
    };
}, {
    threshold: 0.5
}); 

const artikel = document.getElementById("spislyd");
observer2.observe(spislyd);