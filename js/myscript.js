let nameSurname;

let generalities=document.getElementById("name");

let age;

let yOld=document.getElementById("age");

let distance;

let km=document.getElementById("km");

const generate=document.getElementById("confirm");

const cancel=document.getElementById("cancel");

generate.addEventListener("click", 
    function(){
        nameSurname=generalities.value;
        
        distance=parseInt(km.value);
        
        age=yOld.value;        

        console.log(nameSurname, age, distance);

        generalities.value=null;
        km.value=null;
        yOld.value="maggiorenne"
    }
)

cancel.addEventListener("click", 
    function(){
        generalities.value=null;
        km.value=null;
        yOld.value="maggiorenne"
    }
)



// calcolare prezzo
let price = 0.21 * distance;

if(age==="minorenne"){
    price= price * 0.8;
}

else if(age==="65+"){
    price = price * 0.6;
}

price=price.toFixed(2);

console.log(price);

// Frase d'uscita
document.getElementById("price").innerHTML=`Il tuo biglietto costa ${price}&euro;.`;