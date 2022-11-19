
let userName = prompt("Adınızı giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = userName

// User name style changes.
myName.style.color = "#25A6F2"
myName.style.fontSize = "70px"


function showTime(){
    let date = new Date();
    let dayNumber = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds();
    
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    const daysTR = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ];
    const d = new Date();
    let day = daysTR[d.getDay()];

    let time = dayNumber + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second + " " + day;
    document.querySelector("#myClock").innerText = time;
    document.querySelector("#myClock").textContent = time;
    myClock.style.color = "red"
    
    // you can use setTimeout too.
    setInterval(showTime, 1000);
    
}

showTime();