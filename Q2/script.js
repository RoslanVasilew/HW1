let duck;
class Duck{
    constructor(name , color, age , weight , picture){
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.picture = picture;
    }
    Show(){
        let details = "Name- "+this.name+", Color- "+this.color+", Age: "+this.age+
            ", Weight- "+this.weight+", Picture- "+this.picture;
        return details;
    }
    Quack(){
        let num = (this.age * this.weight) / 2;
        let res = "Quack ".repeat(num) ;
        playTRexRoar();
        return (res);
    }
}

function playSound(audio, numberOfTimes, delay = 3000, firstTime = true ){
    if(firstTime){
       audio.play();
    }
    setTimeout( () => {
       if(!firstTime){
           audio.play();
       }
       numberOfTimes--;
       if(numberOfTimes > 0){
         playSound(audio,numberOfTimes,delay, false);
       }
    }, delay)
}

function playTRexRoar() {
    var audio = new Audio('Quack.mp3');
    playSound(audio,3,1500);
}

function CreateDuck(){
    let name = document.querySelector(".nameInput").value;
    let color = document.querySelector(".colorInput").value;
    let age = document.querySelector(".ageInput").value;
    let weight = document.querySelector(".weightInput").value;
    let picture = document.querySelector(".pictureInput").value;
    if (name== "" ||color==""||age==""||weight==""||picture=="") {
        alert("Please fill all The fields!");
        return;
    }
    
    duck = new Duck(name,color,age,weight,picture);
    document.querySelector(".createBtn").disabled = true;
    document.querySelector(".showBtn").disabled = false;
    document.querySelector(".quackBtn").disabled = false;
}
function ShowFunc(){
    if(document.querySelector(".tmpP") != null){
        document.querySelector(".tmpP").remove();
     }
    let p = document.createElement("p");
    p.className = "tmpP";
    p.innerHTML = duck.Show();
    document.querySelector(".container").append(p);
}
function quackFunc(){
    if(document.querySelector(".tmpP") != null){
        document.querySelector(".tmpP").remove();
     }
    let p = document.createElement("p");
    p.className = "tmpP";
    p.innerHTML = duck.Quack();
    document.querySelector(".container").append(p);
}