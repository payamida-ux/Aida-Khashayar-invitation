const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const bigCard = document.getElementById("bigCard");
const map = document.getElementById("map");
const music = document.getElementById("music");


let opened = false;



envelope.addEventListener("click", function(){

    if(!opened){

        // باز شدن پاکت
        envelope.classList.add("open");

        opened = true;


        // شروع موزیک (اگر فایل وجود داشته باشد)
        music.play().catch(()=>{});


    }else{


        // نمایش کامل کارت

        bigCard.style.display="flex";

        map.style.display="block";


    }

});



map.addEventListener("click",function(){

    window.open(
    "https://maps.google.com",
    "_blank"
    );

});
