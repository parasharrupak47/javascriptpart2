const main = document.querySelector('#main');

//-------------------------async await method to fetch data from the api-------------
// async function abc(){
//     try{
//         const response = await fetch('https://admin.nitp.ac.in/api/faculty?type=cse');
//         const data = await response.json();

//         console.log(data);

//         data.map((item, index)=>{
//             console.log(index);
//             const div = document.createElement('div');
//             const h1 = document.createElement('h1');
//             const h2 = document.createElement('h2');
//             const para = document.createElement('p');

//             h1.innerHTML = item.name;
//             h2.innerHTML = item.email;
//             para.innerHTML = item.research_interest;
//             div.appendChild(h1);
//             div.appendChild(h2);
//             div.appendChild(para);
//             main.appendChild(div);
//         })
//     }    catch{
//         console.log('Error in catching  the api')
//     }
// }
// abc();

// -------------------promise method------------------------- 

// const promiseone = new Promise(function(resolve ,reject){
//     resolve('https://admin.nitp.ac.in/api/faculty?type=cse');
//     reject('Error is parsing');
// })

// const xyz = promiseone.then((data) => {
//     console.log(data);
    // data.map((item, index)=>{
    //     // console.log(index);
    //     const div = document.createElement('div');
    //     const h1 = document.createElement('h1');
    //     const h2 = document.createElement('h2');
    //     const para = document.createElement('p');

    //     h1.innerHTML = item.name;
    //     h2.innerHTML = item.email;
    //     para.innerHTML = item.research_interest;
    //     div.appendChild(h1);
    //     div.appendChild(h2);
    //     div.appendChild(para);
    //     main.appendChild(div);
    // })
// }).catch((error) => {
//     console.log('error detection')
// })

//then-able
fetch('https://admin.nitp.ac.in/api/faculty?type=cse')
    .then((res) => res.json())
    .then((data) => {
        data.map((item, index) => {
            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const para = document.createElement('p');
            h1.innerHTML = item.name;
            h2.innerHTML = item.email;
            para.innerHTML = item.research_interest;

            div.appendChild(h1);
            div.appendChild(h2);
            div.appendChild(para);
            main.appendChild(div);
        });
    })
    .catch((error) => {
        console.log('Error fetching data:', error);
    });