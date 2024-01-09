let counter;
class Counter {
  constructor(value) {
    this.value = value;
  }
  initialize(value) {
    this.value = value;
  }
  Increment(){
    this.value = parseInt(this.value) +1;
  }
  Go(){
    let arr = [];
    for (let i = 0; i <= this.value; i++) {
        arr.push(i);
    }
    return arr;
  }
}

function setCounter(){
    if(document.querySelector(".tmpP") != null){
        document.querySelector(".tmpP").remove();
     }
    let number = document.querySelector(".inputValue").value;
    if(number == ""){
        alert("Please Enter a Valid Value!");
        return;
    }
    counter = new Counter(number);
    document.querySelector(".plusBtn").disabled = false;
    document.querySelector(".goBtn").disabled = false;
}

function plusCounter(){
    if(document.querySelector(".tmpP") != null){
        document.querySelector(".tmpP").remove();
     }
    if(counter == undefined){
        alert("Pleas Enter a Value First!");
        return;
    }
    counter.Increment();
    let input = document.querySelector(".inputValue");
    input.value = counter.value;
}
function goFunc(){
    document.querySelector(".nums").innerHTML='';

    if(document.querySelector(".tmpP") != null){
       document.querySelector(".tmpP").remove();
    }
    if(counter == undefined){
        alert("Pleas Enter a Value First!");
        return;
    }
    
    let arr = counter.Go();

    let p = document.createElement('p');
    let showBox = document.createElement('div');
    showBox.className="box";
    p.className= "tmpP";
    for(let i in arr){
        p.innerHTML += i+" ";
        showBox.appendChild(p);
    }
    document.querySelector(".nums").append(showBox);
}