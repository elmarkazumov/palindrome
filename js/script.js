let inputText = document.querySelector('#main__input'),
    buttonCheck = document.querySelector('#main__btn');

buttonCheck.onclick = function (){
    let array = []; 
    array.push(inputText.value.toLowerCase());
    
    let arrayString = array.toString(),
        arraySplit = arrayString.split(''),
        count = 0;

    for(let i = 0; i < arraySplit.length; i++){
        if(arraySplit[i] == arraySplit[arraySplit.length - 1 - i]){
            count++;
        }

        if(count == arraySplit.length){
            document.querySelector('.main__text').innerHTML = "<p>Текст является палиндромом</p>";
        } else{
            document.querySelector('.main__text').innerHTML = "<p>Текст не является палиндромом</p>";
        }
    }
}