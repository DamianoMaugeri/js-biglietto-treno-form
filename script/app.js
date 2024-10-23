// acquisizione dei dati

// ACQUISISCO I DATI DAL DOM

const userAgeFromDom = document.getElementById('user-age')


const userKmFromDom = document.getElementById('user-km')

const formElement = document.getElementById('form-add-info');


const priceForKm = 0.21 // numero



formElement.addEventListener('submit', function (event) {

    //impedirà al form html di essere inviato autonomamente (non ricarico la pagina, non aggiungo query parameters all'url etc etc)
    event.preventDefault();

    const numeroKm = parseInt(userKmFromDom.value) // numero
    const userAge = parseInt (userAgeFromDom.value) // numero
    
    console.log(numeroKm)
    console.log(userAge)


    if ( isNaN(numeroKm) || isNaN(userAge) || numeroKm < 0  ){
        console.log('inserisci i dati corretti')



    } else {
        let ticketPrice = 0,  // tutti numeri
        discount = 0,
        finalPrice = 0
        
        // calcolo il prezzo del biglietto senza sconto 
        
        ticketPrice = ( numeroKm * priceForKm)
        console.log(ticketPrice)
        
        // quantifico lo sconto in base all'età
        
        if( userAge < 18 ){
            discount = ticketPrice * 0.2
        } else if ( userAge >= 65){
            discount = ticketPrice * 0.4
        }
        
        // calcolo il prezzo finale applicando l'eventua sconto
        
        finalPrice = ticketPrice - discount
        
        //console.log(`Prezzo biglietto: €${finalPrice.toFixed(2)}`)
    
        const formattedPrice = new Intl.NumberFormat( 'it-IT' , {style: 'currency', currency: 'EUR' }).format( finalPrice)
        console.log(`Prezzo biglietto: ${formattedPrice}`)
        
        
    
    }

  
    
  });
















//=================================================================================== LOGICA DEL PREZZO ==============================

/*

const numeroKm = parseInt(userKmFomDom) // numero

const userAge = parseInt (userAgeFromDom) // numero

console.log(numeroKm, userAge)

const priceForKm = 0.21 // numero


if ( isNaN(numeroKm) || isNaN(userAge) || numeroKm < 0  ){
    console.log('inserisci i dati corretti')
} else {
    let ticketPrice = 0,  // tutti numeri
    discount = 0,
    finalPrice = 0
    
    // calcolo il prezzo del biglietto senza sconto 
    
    ticketPrice = ( numeroKm * priceForKm)
    console.log(ticketPrice)
    
    // quantifico lo sconto in base all'età
    
    if( userAge < 18 ){
        discount = ticketPrice * 0.2
    } else if ( userAge >= 65){
        discount = ticketPrice * 0.4
    }
    
    // calcolo il prezzo finale applicando l'eventua sconto
    
    finalPrice = ticketPrice - discount
    
    console.log(`Prezzo biglietto: €${finalPrice.toFixed(2)}`)

    const formattedPrice = new Intl.NumberFormat( 'it-IT' , {style: 'currency', currency: 'EUR' }).format( finalPrice)
    console.log(`Prezzo biglietto: ${formattedPrice}`)
    
    

}
    */