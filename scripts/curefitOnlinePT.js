var countDownDate = new Date("Jan 5, 2021 17:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("limitedoffer").innerHTML = hours + ": "+ minutes + " : " + seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("limitedoffer").innerHTML = "EXPIRED";
  }
}, 1000);

let acc = document.getElementsByClassName("question");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}  