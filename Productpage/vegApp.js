




var master= [];

var res;


//let fruitsandVeg = document.getElementById("right_box");


let box = document.getElementById("right_box");
let parent = document.getElementById("right_box");

//let veg = document.getElementById("veg");






 //To GET data from server
 fetch("http://localhost:8001/products?category=vegetable")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log("res: ", res);
        
        viewProducts(res)
       
       
       // viewMf(res)
      // console.log("kkk" , master)
      // console.log("moo", master)
        
    })
    .catch((err) => {
        console.log(err);
    })




  
 




function viewProducts(d)                          
      {
         /// console.log("bbb", d)  
         
       

       
        parent.innerHTML = null;
 
         d.forEach( function ( el)              
        // console.log("im in" , el)
     {
     let div = document.createElement('div');
     div.setAttribute("class" , "product_card")

     let card_text= document.createElement('div');
     card_text.setAttribute("class" , "card_text")

     //shelf_life
     let unit = document.createElement('p');
     unit.textContent= el.shelf_life+ " Unit"
     unit.setAttribute("class" , "unit_txt")

     let price = document.createElement('p');
     price.textContent= "₹"+el.price;
     price.setAttribute("class" , "card_price")
     price.onclick = function () {
        referData(el)
    }
 
     let title = document.createElement('h3');
     title.textContent= el.name ;
     title.setAttribute("class" , "card_title")
     title.onclick = function () {
        referData(el)
    }

     let discount= document.createElement('p');
     discount.textContent= el.discount+ " Off";
     discount.setAttribute("class" , "card_discount")

     let sub_card = document.createElement('div');
     sub_card.setAttribute("class" , "sub_card")
     

    
        let cart_btn = document.createElement('button');
          cart_btn.innerText ="Add To Cart";
          cart_btn.setAttribute("class" , "Cart_div")

         cart_btn.onclick =  ( )=> {

            addcart( el);
          };
          
          sub_card.append(price , cart_btn)
     card_text.append( title , unit , sub_card )

     
     
     let img = document.createElement('img');
     img.src= el.image_links;
     img.setAttribute("class" , "card_img")

     img.onclick = function () {
        referData(el)
    }
    
 
     div.append(img , card_text)
     box.append(div)
     } );
 
 
 
 
 
 
   }  // VieWProducts ends



  // viewProducts(data)



   if (localStorage.getItem("itemData") == null) {
    localStorage.setItem("itemData", JSON.stringify([]));
}


function referData(p) {

    var ProductDes = JSON.parse(localStorage.getItem("itemData"));

    ProductDes = [];
    ProductDes.push(p);
    console.log("pushed" , p)

    localStorage.setItem("itemData", JSON.stringify(ProductDes));

   
    window.location.assign("../productDescPage/productDesc.html")
}




function  addcart(e){
      let myproduct_cart =  JSON.parse( localStorage.getItem("cart") );

      myproduct_cart.push(e);

        localStorage.setItem("cart" , JSON.stringify(myproduct_cart));

        console.log("myjjjjjj" ,myproduct_cart );

    }







