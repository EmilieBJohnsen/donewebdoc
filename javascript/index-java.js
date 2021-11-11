let erPaaPause = true;

let observer = new IntersectionObserver((entries, observer) => {
    for (const videosted of entries){ 
        if (videosted.isIntersecting && erPaaPause===true) { 
            video.play();
            erPaaPause = false;
        } else {
            video.pause();
            erPaaPause = true;
        }
    };

}, {threshold:1}); //1 = artikel skal være 100% synlig for at tælle med

// Hovedprogram
const video = document.getElementById("video"); //Observer kun på sted med id = video
observer.observe(video);

// Javascript for progressbar

const side2 = document.getElementById("side2");
const jordbaer = document.getElementById("2");
const bob2 = document.getElementById("bob2");

const side3 = document.getElementById("side3");
const peach = document.getElementById("3");
const bob3 = document.getElementById("bob3");

const side4 = document.getElementById("side4");
const melon = document.getElementById("4");
const cirkel = document.getElementById("myBtn");

const side5 = document.getElementById("side5");
const apple = document.getElementById("5");

const side6 = document.getElementById("side6");
const vindrue = document.getElementById("6");

const side7 = document.getElementById("side7");
const banan = document.getElementById("7")
const bob7 = document.getElementById("bob7");
const logo = document.getElementById("farvellogo");

side2.addEventListener("mouseover", function(){
    jordbaer.classList.add("scale")
    bob2.classList.add("shake-top")

})

side2.addEventListener("mouseout", function(){
    jordbaer.classList.remove("scale")
})

side3.addEventListener("mouseover", function(){
    peach.classList.add("scale")
    bob3.classList.add("shake-bottom")
})

side3.addEventListener("mouseout", function(){
    peach.classList.remove("scale")
    bob3.classList.remove("shake-bottom")
})

side4.addEventListener("mouseover", function(){
    melon.classList.add("scale")  
    cirkel.classList.add("heartbeat")
})

side4.addEventListener("mouseout", function(){
    melon.classList.remove("scale")
    cirkel.classList.remove("heartbeat")
})

side5.addEventListener("mouseover", function(){
    apple.classList.add("scale")  
})

side5.addEventListener("mouseout", function(){
    apple.classList.remove("scale")
})

side6.addEventListener("mouseover", function(){
    vindrue.classList.add("scale")

})

side6.addEventListener("mouseout", function(){
    vindrue.classList.remove("scale")
})

side7.addEventListener("mouseover", function(){
    banan.classList.add("scale")  
    bob7.classList.add("shake-bottom")
    logo.classList.add("slide-in-right")
})

side7.addEventListener("mouseout", function(){
    banan.classList.remove("scale")
    bob7.classList.remove("shake-bottom")
})

// Javascript for side 3 "Vælg en ret" 

const gris = document.getElementById("gris");
const fisk = document.getElementById("fisk");
const ko = document.getElementById("ko");
const kylling = document.getElementById("kylling");
const vegetar = document.getElementById("vegetar");
const knap = document.getElementById("knap");

gris.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = "Uh hvor lækkert! <br> Så laver vi Kartoffelsuppe med bacon,<br> hjemmebagt brød og salat!";
    gris.classList.add("valg");
    fisk.classList.remove("valg");
    ko.classList.remove("valg");
    kylling.classList.remove("valg");
    vegetar.classList.remove("valg");
    knap.classList.add("synlig");
});

fisk.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = "Godt valg! <br> Så laver vi bagt laks med<br> bagekartofler og spidskålssalat!";
    gris.classList.remove("valg");
    fisk.classList.add("valg");
    ko.classList.remove("valg");
    kylling.classList.remove("valg");
    vegetar.classList.remove("valg");
    knap.classList.add("synlig");
});

ko.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = `Perfekt! <br> Så laver vi lasagne og en god salat!`;
    gris.classList.remove("valg");
    fisk.classList.remove("valg");
    ko.classList.add("valg");
    kylling.classList.remove("valg");
    vegetar.classList.remove("valg");
    knap.classList.add("synlig");
});

kylling.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = `Mhhhh! <br> Så laver vi kylling med<br>flødekartofler og salat!`;
    gris.classList.remove("valg");
    fisk.classList.remove("valg");
    ko.classList.remove("valg");
    kylling.classList.add("valg");
    vegetar.classList.remove("valg");
    knap.classList.add("synlig");
});

vegetar.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = `Lige hvad jeg ville vælge! <br> Så laver vi vegetardeller med stegte ris,<br> karrysauce og broccolisalat!`;
    gris.classList.remove("valg");
    fisk.classList.remove("valg");
    ko.classList.remove("valg");
    kylling.classList.remove("valg");
    vegetar.classList.add("valg");
    knap.classList.add("synlig");
});
