let secretNumber = 0;
let intentos = 0;
let numberList = [];
let maxNumber = 10;

function asignTextElement(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function userVerify(){
    let userNum = parseInt(document.getElementById('userValue').value);

    if(userNum === secretNumber ){
        asignTextElement('p', `¡Correcto tilín! ദ്ദി ˉ͈̀꒳ˉ͈́ )✧ Lo hiciste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Pistas por si no se acierta
        if (userNum > secretNumber){
            asignTextElement('p','El número secreto es menor ᧖(• ᦢ •)ᦣ');
        } else {
            asignTextElement('p','El número secreto es mayor ( ∩´͈ ᐜ `͈∩)');
        } 

        intentos++;
        cleanBox();
    }    
    return;
}

function cleanBox(){
    document.querySelector('#userValue').value = '';
}

function randomNumber(){
   let generatedNum = Math.floor(Math.random()*maxNumber)+1;

   if (numberList.length == maxNumber){
        asignTextElement('p', 'Ya se sortearon todos los números posibles ( • ᴖ • ｡)');
    } else {
        if(numberList.includes(generatedNum)){
                return randomNumber();
        } else {
                numberList.push(generatedNum);
                return generatedNum;
        }
   }
}

function initialConditions(){
    asignTextElement('h1', "Juego del número secreto (•̪ o •̪)");
    asignTextElement('p', `Indica un número del 1 al ${maxNumber}`);
    secretNumber = randomNumber();
    intentos = 1;
}

function restartGame(){
    cleanBox();
    initialConditions();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

initialConditions();
