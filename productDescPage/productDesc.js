
// slideShow=>

let arr = [
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/391306a.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/391306b.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_391306.jpg",
  "//cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/391306c.jpg",
];

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slideShow = document.getElementById("slideShow")

let idx = 0;

let img = document.createElement("img");
img.src = arr[idx];

slideShow.append(img);


let interval = setInterval(run, 5000)


function run() {
  idx++;
  changeImage();
  
}

function changeImage(){

    slideShow.innerHTML = null
    if( idx > arr.length -1){
        idx = 0;
    }else if( idx < 0){
        idx = arr.length - 1;
    }

    let img = document.createElement("img");
    img.src = arr[idx];
    

    // img.style.transform = "translateZ(500px)";

    slideShow.append(img);


}

function resetInt(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', ()=>{

    idx++;
    changeImage();
    resetInt();

})

leftBtn.addEventListener('click', ()=>{

    idx--;
    changeImage();
    resetInt();

})

//////////////// SlideShow/////////////////////


// viewMore=>

const viewMore = document.getElementById("vm");
const viewLess = document.getElementById("vl");

viewMore.addEventListener("click", ()=>{

    const more = document.getElementById("viewMore");

    more.style.display = "block";
    viewLess.style.display = "grid"

    viewMore.style.display = "none";


})

viewLess.addEventListener("click", ()=>{

    const less = document.getElementById("viewMore");

    less.style.display = "none";

    viewMore.style.display = "grid";
    viewLess.style.display = "none";

})



////location=>

if( 'geolocation' in navigator){
    console.log("geolocation is ava");
}else{
        console.log("geolocation is not ava");

}