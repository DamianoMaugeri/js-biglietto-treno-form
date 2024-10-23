// acquisizione dei dati

// ACQUISISCO I DATI DAL DOM

const userAgeFromDom = document.getElementById('user-age');

const userKmFromDom = document.getElementById('user-km');

const userNameFromDom = document.getElementById('user-name');

const formElement = document.getElementById('form-add-info');



const priceForKm = 0.21; // numero

let formattedPrice = 0;

const result = document.getElementById('result');



formElement.addEventListener('submit', function (event) {

    //impedirà al form html di essere inviato autonomamente (non ricarico la pagina, non aggiungo query parameters all'url etc etc)
    event.preventDefault();

    const numeroKm = parseInt(userKmFromDom.value);// numero
    const userAge = parseInt(userAgeFromDom.value);// numero
    const userName = userNameFromDom.value;

    const nCarrozza = Math.floor(Math.random() * 8) + 1;
    const carrozza = `CARROZZA N: ${nCarrozza}`;

    const nCp = Math.floor(Math.random() * 10000) + 1;
    const codiceCP = `CODICE CP: ${nCp}`;

    const bigliettoBase = 'Biglietto Standard'

    const imgLondra ='./img/londra.jpeg'


    console.log(numeroKm);
    console.log(userAge);


    if (isNaN(numeroKm) || isNaN(userAge) || numeroKm < 0) {
        console.log('inserisci i dati corretti');



    } else {
        let ticketPrice = 0,  // tutti numeri
            discount = 0,
            finalPrice = 0;

        // calcolo il prezzo del biglietto senza sconto 

        ticketPrice = (numeroKm * priceForKm);
        console.log(ticketPrice);

        // quantifico lo sconto in base all'età

        if (userAge < 18) {
            discount = ticketPrice * 0.2;
        } else if (userAge >= 65) {
            discount = ticketPrice * 0.4;
        }

        // calcolo il prezzo finale applicando l'eventua sconto

        finalPrice = ticketPrice - discount;

        //console.log(`Prezzo biglietto: €${finalPrice.toFixed(2)}`)

        formattedPrice = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(finalPrice);
        console.log(`Prezzo biglietto: ${formattedPrice}`);

    }

    const domElementContenitore = document.createDocumentFragment(); //<template></template>



    const divElementCard = document.createElement('div');
    divElementCard.classList.add('card')
    divElementCard.classList.add('mb-3')


    const divElementRow = document.createElement('div');
    divElementRow.classList.add('row')
    divElementRow.classList.add('g-0')

    

    const divElementCol4 = document.createElement('div');
    divElementCol4.classList.add('col-md-4')

    

    const divElementCol8 = document.createElement('div');
    divElementCol8.classList.add('col-md-8')

    const divElementCardBody = document.createElement('div');
    divElementCardBody.classList.add('card-body')



    const imgElement = document.createElement('img');
    imgElement.classList.add('img-fluid')
    imgElement.classList.add('rounded-start')

    imgElement.src = imgLondra;

    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title')

    titleElement.innerHTML = userName;

    const divElementTipoBiglietto = document.createElement('div');

    divElementTipoBiglietto.innerHTML = bigliettoBase;


    const divElementCodice = document.createElement('div');

    divElementCodice.innerHTML = codiceCP;

    const divElementCarrozza = document.createElement('div');

    divElementCarrozza.innerHTML = carrozza;

    const divElementAge = document.createElement('div');

    divElementAge.innerHTML = userAge;

    const divElementKm = document.createElement('div');

    divElementKm.innerHTML = numeroKm;

    const divElementPrice = document.createElement('div');

    divElementPrice.innerHTML = formattedPrice;


    divElementCard.appendChild(divElementRow);
    divElementRow.appendChild(divElementCol4)
    divElementRow.appendChild(divElementCol8)
    divElementCol4.appendChild(imgElement)
    divElementCol8.appendChild(divElementCardBody)
    divElementCardBody.appendChild(titleElement)
    divElementCardBody.appendChild(divElementTipoBiglietto)
    divElementCardBody.appendChild(divElementCarrozza)
    divElementCardBody.appendChild(divElementCodice)
    divElementCardBody.appendChild(divElementPrice)
    domElementContenitore.appendChild(divElementCard)




    //domElementContenitore.appendChild(divElementName);
    //domElementContenitore.appendChild(divElementAge);
    //domElementContenitore.appendChild(divElementKm);
    //domElementContenitore.appendChild(divElementPrice);



    result.appendChild(domElementContenitore);


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