const background = document.querySelector('body');
    const box = document.querySelectorAll('.box');
    box.forEach(function (box){
        box.addEventListener('click' , function(e){
            if(e.target.style.backgroundColor === 'orange'){
                background.style.backgroundColor = e.target.style.backgroundColor;
            }
            if(e.target.style.backgroundColor === 'teal'){
                background.style.backgroundColor = e.target.style.backgroundColor;
            }
            if(e.target.style.backgroundColor === 'purple'){
                background.style.backgroundColor = e.target.style.backgroundColor;
            }
            if(e.target.style.backgroundColor === 'crimson'){
                background.style.backgroundColor = e.target.style.backgroundColor;
            }
        })
    })