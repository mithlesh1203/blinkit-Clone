function hide(command) {
    let Cart_sidebar = document.getElementById("Cart_sidebar")
    Cart_sidebar.style.display = command
    getPrpods()
    showProd()
}


function getPrpods() {
    var  my_cart = JSON.parse( localStorage.getItem("Cart") );
    
}
// temporary data  ₹
let prod_price = 79
let totoal_price = 271+5
let prod_url = "https://cdn.grofers.com/app/images/products/normal/pro_3983.jpg?ts=1637669584"
let prod_title = "Sweet Tamarind (Imli) Box"
let prod_weight = "225 g"
// end


function showProd() {



    let product_div = document.getElementById("Product_div")
    for (let i = 0; i < 3; i++) {
        let cart_prod = document.createElement("div")
        cart_prod.className = "cart_prod"

        let prod_img = document.createElement("img")
        prod_img.className = "prod_img"
        prod_img.src = prod_url
        // 
    
        let prod_infobox = document.createElement("div")
        prod_infobox.className = "prod_infobox"

        let prod_titlebox = document.createElement("div")
        prod_titlebox.className = "prod_titlebox"
        prod_titlebox.innerText = prod_title

        let prod_pricebox = document.createElement("div")
        prod_pricebox.className = "prod_pricebox"
        prod_pricebox.innerText = `₹${prod_price}`

        let prod_quantitybox = document.createElement("div")
        prod_quantitybox.className = "prod_quantitybox"

        let prod_quantitybox_wt = document.createElement("div")
        prod_quantitybox_wt.className = "prod_quantitybox_wt"
        prod_quantitybox_wt.innerText = prod_weight

        let prod_quantitybox_units = document.createElement("div")
        prod_quantitybox_units.className = "prod_quantitybox_units"
        let minus = document.createElement("div")
        minus.className = "minus"
        minus.innerText = "-"
        prod_quantitybox_units.appendChild(minus)
        let quant = document.createElement("div")
        quant.className = "quant"
        quant.innerText = 1   //units   
        prod_quantitybox_units.appendChild(quant)
        let plus = document.createElement("div")
        plus.className = "plus"
        plus.innerText = "+"
        prod_quantitybox_units.appendChild(plus)

        prod_quantitybox_units.appendChild(minus)
        prod_quantitybox_units.appendChild(quant)
        prod_quantitybox_units.appendChild(plus)



        prod_quantitybox.appendChild(prod_quantitybox_wt)
        prod_quantitybox.appendChild(prod_quantitybox_units)
        prod_infobox.appendChild(prod_titlebox)
        prod_infobox.appendChild(prod_pricebox)
        prod_infobox.appendChild(prod_quantitybox)
        cart_prod.appendChild(prod_img)
        cart_prod.appendChild(prod_infobox)
        product_div.appendChild(cart_prod)
        
    }
    
}