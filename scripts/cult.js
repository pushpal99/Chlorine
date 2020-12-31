let clicks = 0;
function dropdown(){
    clicks += 1
    console.log(clicks)
    if(clicks%2==1){
    document.getElementById("dropdown__content").style.display = "block"
    }else{
        document.getElementById("dropdown__content").style.display = "none" 
    }
}

function myFunction() {
    document.getElementById("dropdown-contentmedical").classList.toggle("show");
  }


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }