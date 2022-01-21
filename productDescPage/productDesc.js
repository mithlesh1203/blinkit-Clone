
// getting array=>

let itemArr = JSON.parse(localStorage.getItem("itemData"));

console.log(itemArr);

// console.log(itemArr[0].image_links[0]);


let prodName = document.getElementById("name");
prodName.textContent = itemArr[0].name;

let prodPrice = document.getElementById('price');
prodPrice.textContent = "₹" +  itemArr[0].price;

let shelfLife = document.getElementById("shelfLife");
shelfLife.textContent = itemArr[0].shelf_life + " days";

// let desc = document.getElementById("desc");



//addToCart=>

let addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", addToC);

function addToC(){

    if( localStorage.getItem("Cart") == null){
        localStorage.setItem("Cart", JSON.stringify([]));
    }

    let CartArr = JSON.parse(localStorage.getItem("Cart")); 

    CartArr = [];

    // console.log(CartArr);
    CartArr.push(itemArr);

    localStorage.setItem("Cart", JSON.stringify(CartArr));


     
    alert("Your Product is added in cart")

}


// slideShow=>

let arr = [
  `${itemArr[0].image_links[0]}`,
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/391306b.jpg",
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

