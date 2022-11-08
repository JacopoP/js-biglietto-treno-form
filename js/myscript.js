let generalities=document.getElementById("name");

let yOld=document.getElementById("age");

yOld.value=null;

let km=document.getElementById("km");

let price;

const generate=document.getElementById("confirm");

const cancel=document.getElementById("cancel");

const ticket=document.getElementById("show-hide");

generate.addEventListener("click", 
    function(){
        ticket.className="show";

        document.getElementById("name-surname").innerHTML=generalities.value;

        price = 0.21 * parseInt(km.value);

        if(yOld.value==="minorenne"){
            document.getElementById("offer").innerHTML="Ridotto minore et&agrave;";
            price= price * 0.8;
        }
        
        else if(yOld.value==="65+"){
            document.getElementById("offer").innerHTML="Ridotto over 65";
            price = price * 0.6;
        }

        else{
            document.getElementById("offer").innerHTML="Biglietto standard";
        }

        document.getElementById("carriage").innerHTML=Math.floor(Math.random() * 10 + 1);

        document.getElementById("cp").innerHTML=Math.floor(Math.random() * 10000);

        document.getElementById("price").innerHTML=price.toFixed(2);
    }
)

cancel.addEventListener("click", 
    function(){
        generalities.value=null;
        km.value=null;
        yOld.value=null;
        price=null;
        ticket.className="hide";
    }
)