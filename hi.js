function planTrip(){

let people = document.getElementById("people").value;
let budget = document.getElementById("budget").value;
let days = document.getElementById("days").value;
let city = document.getElementById("city").value;
let transport = document.getElementById("transport").value;
let tripType = document.getElementById("tripType").value;

let suggestion = "";

if(days <= 2 && budget < 5000){
suggestion = "Suggested Trip: Yana + Murudeshwar";
}

else if(days <= 4 && budget < 8000){
suggestion = "Suggested Trip: Gokarna + Yana + Murudeshwar";
}

else if(days <= 6 && budget >= 8000){
suggestion = "Suggested Trip: Dandeli Adventure + Gokarna Beaches";
}

else{
suggestion = "Suggested Trip: Jog Falls + Honnavar Backwaters";
}

document.getElementById("result").innerHTML = suggestion;

}
const inputs = document.querySelectorAll("input, select");

inputs.forEach((input, index) => {
    input.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();

            if(inputs[index + 1]){
                inputs[index + 1].focus();
            }
        }
    });
});
inputs.forEach(input => {
    input.addEventListener("focus", function(){
        this.select();
    });
});