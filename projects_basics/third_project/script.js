const guess = document.querySelector('#guess');
const max_val = document.querySelector('#max_val');
const number = document.querySelector('#number');
const guessDiv = document.querySelector("#guessDiv");
const h1 = document.createElement('h1');
const para = document.createElement('p');
guessDiv.appendChild(h1);
guessDiv.appendChild(para);
let random = -1;
guess.addEventListener('click' , function(e){
    e.preventDefault();
    const num = parseInt(number.value);
    const max = parseInt(max_val.value);
    max_val.disabled = true;
    if(num>max){
        alert("You guessed a number greater then max val");
    }
    if(random==-1){
        random = Math.round(Math.random()*max + 1);
    }
    if(num !== random){
        // console.log(num, max, random);
        guess.innerHTML = "Try Again";
        if(num > random){
            // const print = document.createTextNode('you guessed a greater number')
            // para.appendChild(print);
            // const h = document.createTextNode(`${num}`);
            // h1.appendChild(h);
            h1.innerHTML = `${num}`;
            para.innerHTML = "you guessed a greater number";
            
        }
        else if(num < random){
            // const print = document.createTextNode('you guessed a smaller number')
            // para.appendChild(print);
            // const h = document.createTextNode(`${num}`);
            // h1.appendChild(h);
            h1.innerHTML = `${num}`;
            para.innerHTML = "you guessed a smaller number";

        }
    }
    else {
        para.innerHTML = "Congratulations! You guessed it Right.";
            h1.innerHTML = `${num}`;
    }
    // if(random == num){
    //     const print = document.createTextNode('correct guess');
    //     guessDiv.appendChild(print);
    //     // to add disable feature
    // }
})