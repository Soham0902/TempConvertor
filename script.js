let cel = document.getElementById('celcius');
let fahr = document.getElementById('fahr');
let btn = document.querySelector('.btn');
function celTofahr() {
    let output = (parseFloat(cel.value) * 9/5) + 32;
    fahr.value = parseFloat(output.toFixed(2));
}

function fahrTocel() {
    let output = (parseFloat(fahr.value) - 32) * 5/9;
    cel.value = output.toFixed(2);
}

btn.addEventListener("click", ()=>{
    cel.value =  "";
    fahr.value = "";
})

