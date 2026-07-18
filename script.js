/* 
   FRESHPLATE
   SMART INDIAN MEAL PLANNER
   JAVASCRIPT
 */




// CALORIE CALCULATOR



function calculateCalories(){


let weight = document.getElementById("weight").value;

let height = document.getElementById("height").value;

let age = document.getElementById("age").value;

let gender = document.getElementById("gender").value;


let calories;



if(gender=="Male"){


calories =

(10*weight) +

(6.25*height) -

(5*age) +

5;


}

else{


calories =

(10*weight) +

(6.25*height) -

(5*age) -

161;


}



document.getElementById("result").innerHTML =

"Your Daily Calories: " +

Math.round(calories) +

" kcal";



}










// INDIAN RECIPE GENERATOR




let recipes=[


{

name:"Masala Dosa",

ingredients:"Rice, Urad Dal, Potato, Spices",

steps:"Prepare dosa batter, make crispy dosa and serve with chutney."

},


{

name:"Paneer Butter Masala",

ingredients:"Paneer, Tomato, Butter, Cream, Spices",

steps:"Cook tomato gravy and add paneer pieces."

},


{

name:"Vegetable Biryani",

ingredients:"Rice, Vegetables, Spices",

steps:"Cook aromatic rice with vegetables and Indian spices."

},


{

name:"Chole Bhature",

ingredients:"Chickpeas, Flour, Onion, Spices",

steps:"Prepare spicy chole and serve with bhature."

},


{

name:"Idli Sambar",

ingredients:"Rice, Dal, Vegetables",

steps:"Steam idlis and serve with hot sambar."

},


{

name:"Palak Paneer",

ingredients:"Spinach, Paneer, Spices",

steps:"Prepare spinach gravy and cook paneer."

},


{

name:"Rajma Rice",

ingredients:"Kidney Beans, Rice, Spices",

steps:"Cook rajma curry and serve with rice."

},


{

name:"Poha",

ingredients:"Flattened Rice, Onion, Peanuts",

steps:"Cook poha with vegetables and spices."

},


{

name:"Veg Pulao",

ingredients:"Rice, Vegetables, Spices",

steps:"Cook rice with mixed vegetables."

},


{

name:"Aloo Paratha",

ingredients:"Wheat Flour, Potato, Spices",

steps:"Stuff potato filling inside dough and roast."

}


];






function generateRecipe(){


let random =

Math.floor(Math.random()*recipes.length);



let recipe = recipes[random];



document.getElementById("recipeResult").innerHTML = `


<h2>${recipe.name}</h2>


<h4>Ingredients:</h4>

<p>${recipe.ingredients}</p>


<h4>Preparation:</h4>

<p>${recipe.steps}</p>


`;



}










// GROCERY LIST



let groceryItems =

JSON.parse(localStorage.getItem("grocery")) || [];




function addItem(){


let item = document.getElementById("item").value;



if(item==""){

alert("Enter grocery item");

return;

}



groceryItems.push(item);



localStorage.setItem(

"grocery",

JSON.stringify(groceryItems)

);



document.getElementById("item").value="";



showItems();


}




function showItems(){


let list=document.getElementById("list");


if(!list)return;



list.innerHTML="";



groceryItems.forEach(function(item,index){



let li=document.createElement("li");



li.innerHTML=


item +

`

<button onclick="deleteItem(${index})">

❌

</button>

`;



list.appendChild(li);



});


}




function deleteItem(index){


groceryItems.splice(index,1);


localStorage.setItem(

"grocery",

JSON.stringify(groceryItems)

);



showItems();


}



showItems();










// WATER TRACKER




let waterCount =

localStorage.getItem("waterCount") || 0;



function addWater(){



if(waterCount < 8){


waterCount++;


localStorage.setItem(

"waterCount",

waterCount

);



updateWater();


}

else{


alert("🎉 Daily water goal completed!");

}


}







function resetWater(){


waterCount=0;


localStorage.setItem(

"waterCount",

waterCount

);



updateWater();


}





function updateWater(){



let fill=document.getElementById(

"waterFill"

);



let count=document.getElementById(

"waterCount"

);



let percent=document.getElementById(

"waterPercent"

);



if(fill){



let value=(waterCount/8)*100;



fill.style.width=value+"%";



count.innerHTML=

waterCount+" / 8 Glasses";



percent.innerHTML=

value+"% Completed";



}



}





updateWater();










// SMOOTH SCROLL




document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",function(e){


if(this.hash){


e.preventDefault();


document.querySelector(this.hash)

.scrollIntoView({

behavior:"smooth"

});


}



});


});