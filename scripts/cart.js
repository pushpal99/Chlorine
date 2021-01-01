
        function setItemSize(){

            var size =JSON.parse(localStorage.getItem("size"))
            document.getElementById("size").textContent=`Size: ${size}`
        }
function changeItemValue(e){
    var qty = 0;
    var total_price =document.getElementById("total_price").innerHTML;
    var discount =document.getElementById("discount").innerHTML;
    var total_payable =document.getElementById("total_payable").innerHTML;

    console.log(total_price, discount, total_payable)
    if(e.value=="sub"){
       qty= Number(document.getElementById("qty").textContent)
       qty--;
       document.getElementById("qty").textContent = qty
      
    if(qty==0){
        window.location.href="/pages/gearInfo.html"
    }
    }
    else{
        qty= Number(document.getElementById("qty").textContent)
       qty++;
       document.getElementById("qty").textContent = qty
    }

    total_price = "&#8377;" + 899 * qty
       discount = "&#8377;" +  630 * qty
       document.getElementById("total_price").innerHTML =total_price
       document.getElementById("discount").innerHTML =discount
       document.getElementById("total_payable").innerHTML =(899 * qty) - (630 * qty)
    
}