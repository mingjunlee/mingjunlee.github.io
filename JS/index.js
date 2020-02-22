// Do not amend these!
function run() {
    var input = document.getElementById("input").value.split(" ");
    if (input.length >= 3) {
      main(parseInt(input[0]), parseInt(input[1]), parseInt(input[2]));
    } else {
      console.log("Please enter 3 numbers.");
    }
  }
  
  function main(a, b, c) {
    // Use a, b and c to help you!
    // TODO: Your code below.
    var seq = [a,b,c]
    console.log(a)
  }

  function hello(e){
    var target= document.getElementById("target")
    target.innerHTML=("Wee")
  }
  var button= document.getElementById("click-me")
  window.addEventListener("click",hello)