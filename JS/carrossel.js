let index = 0;
const total =3;

function update(){
    const carrossel_principal = document.getElementById("carrossel-principal");
    carrossel_principal.style.transform = `translateX(-${index * 100}%)`; 
}
function next(){
    index = (index + 1) % total;
    update();
}
function prev(){
    index = (index - 1 + total) % total;
    update();
}