function makePayment(){
    var FN = document.getElementById("userAddress-FN").value.length
    var LN = document.getElementById("userAddress-LN").value.length
    var EI = document.getElementById("userAddress-EI").value.length
    var PN = document.getElementById("userAddress-PN").value.length
    var PC = document.getElementById("userAddress-PC").value.length
    var Ci = document.getElementById("userAddress-Ci").value.length
    var St = document.getElementById("userAddress-St").value.length
    var Ad = document.getElementById("userAddress-Ad").value.length
    var CN = document.getElementById("cardNo").value.length
    var Da = document.getElementById("date").value.length
    var CV = document.getElementById("cvv").value.length



    if(PN ==10 && CN ==16 && Da ==4 &&CV == 3 ){
        window.location.href = "FinalPage.html";
        return alert("PAYMENT SUCCESSFUL, YOUR ORDER IS ON THE WAY  !!!")
    }
    else{
        return alert("ENTER VALID DETAILS!!!")
    }
    

}