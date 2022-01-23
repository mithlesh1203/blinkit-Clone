let num = 1;
let product_cart = JSON.parse(localStorage.getItem("Cart"));


let app_total = product_cart.length;
let total = document.getElementById("total");
total.innerText = ` (${app_total} items)`;


let sub_cnt = document.getElementById("sub_cnt");
sub_cnt.innerText = app_total;



let sum = 0;
let pass = 1;
let flag = false;



let parent = document.getElementById("container");


product_cart.forEach(function (product) {
    let row = document.createElement("tr");

    let column1 = document.createElement("td");
    let img = document.createElement("img");
    img.src = product.image_links[0]
    column1.appendChild(img);

    let column2 = document.createElement("td");
    let product_name = document.createElement("p");
    product_name.textContent = product.name;
    column2.appendChild(product_name);

    let column3 = document.createElement("td");
    let product_price = document.createElement("p");
    product_price.textContent = product.price;
    column3.appendChild(product_price);
    let multi_price = +product_price.textContent


    let column4 = document.createElement("td");
    let div1 = document.createElement("div")
    let btn_p = document.createElement("button");
    btn_p.setAttribute("class", "btn_pm")
    btn_p.innerText = "+"

    let qty = document.createElement("input");
    qty.setAttribute("type", "number");
    qty.style.textAlign = "center";
    qty.readOnly = true;
    qty.value = 1;



    let btn_m = document.createElement("button");
    btn_m.innerText = "-";
    btn_m.setAttribute("class", "btn_pm");
    btn_p.addEventListener('click', () => {


        qty.stepUp(1);

        pass = +qty.value;

    });
    btn_p.onclick = function () {


        cal_total(event, multi_price);

    }

    btn_m.onclick= function () {

        cal_total(event, multi_price);
        

    }
    btn_m.addEventListener('click', () => {

        if (qty.value <= 1) {
            alert("click on delete button to delete items")
        }
        else {
            qty.stepDown(1);
        }
        pass = +qty.value;
    })

    div1.append(qty, btn_p, btn_m);

    //    qty.addEventListener('click',() =>{
    //        qty.stepUp(2)
    //     // alert("hello")
    //    })




    column4.appendChild(div1);

    let column5 = document.createElement("td");
    let total_price = document.createElement("p");
    // total_price.textContent = qty.value * product.price ;
    total_price.textContent = product.price;


    column5.appendChild(total_price);

    let column6 = document.createElement("td");
    let btn = document.createElement("button");

    btn.setAttribute("class", "btn")
    let icn = document.createElement("i");
    icn.setAttribute("class", "fa fa-trash");
    icn.style.backgroundColor = "black";
    icn.style.cursor = "pointer";


    btn.append(icn);
    icn.addEventListener('click', () => {
        let x = event.target.parentNode.parentNode.parentNode;
        console.log('x:', x)
        let y = x.childNodes[1].innerText
        console.log('y:', y)
        // let z = 0;
        // console.log('y:', y);

        for (let i = 0; i < product_cart.length; i++) {
            if (y == product_cart[i].name) {
                product_cart.splice(i, 1);
                localStorage.setItem("Cart", JSON.stringify(product_cart));

            }
        }
        x.remove();
        location.reload();

        // // 


    })
    column6.appendChild(btn);


    row.append(column1, column2, column3, column4, column5, column6);


    container.appendChild(row);

    sum = sum + product.price;



})

let total_checkout = document.getElementById("total_checkout")
total_checkout.value = sum;



function cal_total(event, multi_price) {
    console.log(pass);
    console.log(multi_price);
    let parent_price = event.target.parentNode.parentNode.parentNode
    let child_price = parent_price.childNodes[4]
    child_price.innerText = pass * multi_price;
    // sum = 
    // total_checkout.value = sum;
    // console.log('child_price:', child_price)
    event.target.blur();

}
