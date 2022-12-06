console.log("js ok")

//prendo i target dal documento

const UKm = document.getElementById("km");
const UAge = document.getElementById("age");
const Btn = document.getElementById("submit");
const Print = document.getElementById("target");




//prova 
Btn.addEventListener("click" , function (){
    //prezzo definito di default
    const CaKm = parseInt(UKm.value);
    let price = CaKm * 0.21;
    
    //variabili di sconto
    const CaUa =parseInt(UAge.value);
    if (CaUa <= 18) {
        price *= 0.8; 
    }else if(CaUa >=65){
        price *= 0.6;
        console.log(price);
    }

    //stampo 
    let PriceMessage = "il tuo biglietto generato, costo: ";
    Print.innerText = PriceMessage + price
});