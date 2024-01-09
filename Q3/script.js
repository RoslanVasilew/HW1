let clocks = [];
class Clock {
  constructor(country, hours, minutes, seconds) {
    this.country = country;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  ConverToSeconds() {
    return (this.hours * 3600) + (this.minutes * 60) + this.seconds;
  }
  Show() {
    let tmpHours = TimeFormat(this.hours);
    let tmpMin = TimeFormat(this.minutes);
    let tmpSec = TimeFormat(this.seconds);
    return tmpHours + ":" + tmpMin + ":" + tmpSec;
  }
}
function TimeFormat(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

function SendFunc(){
    let country = document.querySelector(".countryInput").value;
    let hour = document.querySelector(".hourInput").value;
    let minutes = document.querySelector(".minutesInput").value;
    let seconds = document.querySelector(".secondsInput").value;
    if(hour>=24 || minutes>60 || seconds>60){
      document.querySelector(".hourInput").value="";
    document.querySelector(".minutesInput").value="";
    document.querySelector(".secondsInput").value="";
      alert("Invalid Time Data");
      return;
    }
    clocks.push(new Clock(country , hour  ,minutes,seconds) );
    document.querySelector(".countryInput").value="";
    document.querySelector(".hourInput").value="";
    document.querySelector(".minutesInput").value="";
    document.querySelector(".secondsInput").value="";
    if (clocks.length == 5) {
        document.querySelector(".sendBtn").disabled = true;
        ShowArr();
    }
}
function ShowArr(){
    let p = document.createElement('p');
    for (let i = 0; i < clocks.length; i++) {
        p.innerHTML += "Country: "+clocks[i].country +", Time: "+clocks[i].Show() +
                ", Time In Seconds: "+clocks[i].ConverToSeconds()+"<br>";
    }
    document.querySelector(".container").append(p);
}
