var wrapperEle = document.body.querySelector(".wrapper");
var increaseEle = document.body.querySelector(".increase");
var increase2Ele = document.body.querySelector(".increase2");
var decreaseEle = document.body.querySelector(".decrease");
var numberEle = document.body.querySelector(".number");
var number=0;
numberEle.innerHTML=number;



var nameList = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
    
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
    


for (var i = 0; i < nameList.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = nameList[i].name+" "+nameList[i].age;
  ele.style.color = nameList[i].color;
  
  if(nameList[i].age>40){
     ele.style.color="red";
    
     }
   if(nameList[i].age<20){
     ele.style.color="blue";
    
     }
 
  wrapperEle.appendChild(ele);
}

function increase(num, color){
  number=number+num;
  numberEle.innerHTML=number;
  numberEle.style.color=color;
}


increaseEle.addEventListener("click", function(){
  increase(1);
})