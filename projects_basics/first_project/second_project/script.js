const form = document.querySelector('#bmiForm');
const result = document.querySelector('#result');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const inheight = parseInt(height);
    const weight = document.querySelector('#weight').value;
    const inweight = parseInt(weight);

    if(inheight < 0 || isNaN(inheight)){
        result.innerHTML = `Invald height ${inheight}`;
    }
    else if(inweight < 0 || isNaN(inweight)){
        result.innerHTML = `Invalid weight ${inweight}`;
    }
    else{
        const bmi = (inweight / ((inheight / 100) ** 2)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi >= 30){
            result.innerHTML = 'you are obese';
        }
    }
})