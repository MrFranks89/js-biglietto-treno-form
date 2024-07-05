console.log('calcola biglietto')

const formElement = document.getElementById('form-biglietto')
console.log(formElement)

const inputKmElement = document.getElementById('km')
const selectAgeElement = document.getElementById('age')
const ticketOutputElement = document.getElementById('ticket-output')
console.log(
	inputKmElement,
    selectAgeElement,
	ticketOutputElement
)

formElement.addEventListener('submit', function (event) {

	event.preventDefault()
    const km = parseFloat(inputKmElement.value)
    const prezzoBase = parseFloat(inputKmElement.value * 0.21)
    const selectedAge = selectAgeElement.value
    console.log(selectedAge, prezzoBase.toFixed(2))

    let sconto = 0

    if (selectedAge === 'u18'){
        sconto = prezzoBase * 0.2
    }
    else if (selectedAge === 'o65'){
        sconto = prezzoBase * 0.4
    }
        
    console.log(
        km, 
        prezzoBase, 
        selectedAge, 
        sconto)

    let prezzoFinale = prezzoBase - sconto

    console.log(
        prezzoFinale, typeof prezzoFinale
    )

    ticketOutputElement.innerHTML = prezzoFinale + ' €'


})

