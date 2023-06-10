const btn = document.querySelector('button');
const values = document.querySelector('h3')
btn.addEventListener('click', function(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    values.innerText = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})