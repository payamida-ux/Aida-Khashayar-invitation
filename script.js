const envelope = document.getElementById("envelope");
const fullCard = document.getElementById("fullCard");
const music = document.getElementById("music");
const mapBtn = document.getElementById("mapBtn");

let opened = false;


/* باز شدن پاکت */

envelope.addEventListener("click", () => {

if(!opened){

envelope.classList.add("open");

opened = true;


/* موزیک */

music.play().catch(()=>{});


}

else{

/* بزرگ شدن کارت */

fullCard.style.display="flex";

mapBtn.style.display="block";

}

});



/* دکمه مپ */

mapBtn.addEventListener("click",()=>{

window.open(
"https://maps.google.com",
"_blank"
);

});


/* باز شدن با کیبورد */

envelope.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

envelope.click();

}

});
