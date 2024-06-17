/* VALUES
Meat 400g p/ person -> + 6h = 650g p/ person
Beer 1200ml p/person -> + 6h = 2000ml p/ person
Soda/water 1000ml p/ person -> + 6h = 1500ml p/ person
*/

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

document.getElementById('calculationForm').addEventListener('submit', calculate);

function calculate(event) {
    event.preventDefault()
    
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let totalMeat = meat(duration) * adults + meat(duration) / 2 * kids
    let totalBeer = beer(duration) * adults
    let totalDrinks = drinks(duration) * adults + drinks(duration) / 2 * kids

    result.innerHTML = `<p>${totalMeat/1000} kg of meat</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer/473)} beer cans</p>`
    result.innerHTML += `<p>${Math.ceil(totalDrinks/2000)} bottles of soda (2L)</p>`
}

function meat(duration){
    if(duration >= 6){
        return 650;
    } else{
        return 450;
    }
}

function beer(duration){
    if(duration >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function drinks(duration){
    if(duration >= 6){
        return 1500;
    } else{
        return 1000;
    }
}