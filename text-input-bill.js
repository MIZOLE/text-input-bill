const addToBillBtn = document.querySelector(".addToBillBtn");

const smsTotalCost = document.querySelector(".smsTotalOne");

const callTotalCost = document.querySelector(".callTotalOne");

const total = document.querySelector(".totalOne");


const billTypeText = document.querySelector(".billTypeText");

const color=document.querySelector(".red");
var callTotal=0;
 var smsTotal=0;
function textinputbill(textInput) {
var bString =textInput.split(",") ;
for (var i = 0;i<bString.length;i++) {
var billItems = bString[i].trim();
if (billItems === 'sms'){

smsTotal += 0.75;

} else if (billItems === 'call') {
callTotal += 2.75;

}
                  }
  var totalCost=(smsTotal+callTotal).toFixed(2)
return totalCost
 
}
function style(current){
var bill=Number(current);

         color.classList.remove("warning");

         color.classList.remove("danger")
 if ( bill>= 50){
         color.classList.add("danger");
    }
    else if (bill >= 30  && bill <= 50 ){
        color.classList.add("warning");
   }
}

function clickFunction(){
  var string=billTypeText.value;
totalCost=   textinputbill(string);
  smsTotalCost.innerHTML=smsTotal.toFixed(2);
  callTotalCost.innerHTML=callTotal.toFixed(2);
  total.innerHTML=totalCost;
style(totalCost)
 }
addToBillBtn.addEventListener("click", clickFunction);
