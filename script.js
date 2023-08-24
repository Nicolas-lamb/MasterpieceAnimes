// JavaScript para alternar o menu de navegação móvel



// menu responsivo
function clickMenu(){
    if(teste.style.display == 'block'){
        teste.style.display = 'none'
    }
    else{
        teste.style.display = 'block'
    }
}
// carroceu
const carousel = document.querySelector(".carousel");
const melhores = document.querySelector(".melhores");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

const images = Array.from(carousel.getElementsByTagName("img"));
const images2 = Array.from(melhores.getElementsByTagName("img"));
const numVisible = 4; // Quantidade de imagens visíveis ao mesmo tempo
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + numVisible) % images.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - numVisible + images.length) % images.length;
    updateCarousel();
});

nextBtn2.addEventListener("click", () => {
    currentIndex = (currentIndex + numVisible) % images2.length;
    updateMelhores();
});

prevBtn2.addEventListener("click", () => {
    currentIndex = (currentIndex - numVisible + images2.length) % images2.length;
    updateMelhores();
});

function updateCarousel() {
    const offset = -currentIndex * (100 / numVisible);
    carousel.style.transform = `translateX(${offset}%)`;
}

function updateMelhores() {
    const offset = -currentIndex * (100 / numVisible);
    melhores.style.transform = `translateX(${offset}%)`;
}
// Chame a função inicial para garantir que as imagens iniciais estejam visíveis

// Configuração para o carrossel com ID "temporada"
setupCarousel("temporada");
// traller
function clickImage1(){
    if(testeframe1.style.display == 'block'){
        testeframe1.style.display = 'none'
    }
    else{
        testeframe1.style.display = 'block'
    }
}
function clickImage2(){
    if(testeframe2.style.display == 'block'){
        testeframe2.style.display = 'none'
    }
    else{
        testeframe2.style.display = 'block'
    }
}
function clickImage3(){
    if(testeframe3.style.display == 'block'){
        testeframe3.style.display = 'none'
    }
    else{
        testeframe3.style.display = 'block'
    }
}
function clickImage4(){
    if(testeframe4.style.display == 'block'){
        testeframe4.style.display = 'none'
    }
    else{
        testeframe4.style.display = 'block'
    }
}
function clickImage5(){
        if(testeframe5.style.display == 'block'){
            testeframe5.style.display = 'none'
        }
        else{
            testeframe5.style.display = 'block'
        }
}
function clickImage6(){
    if(testeframe6.style.display == 'block'){
        testeframe6.style.display = 'none'
    }
    else{
        testeframe6.style.display = 'block'
    }
}
function clickImage7(){
    if(testeframe7.style.display == 'block'){
        testeframe7.style.display = 'none'
    }
    else{
        testeframe7.style.display = 'block'
    }
}
function clickImage8(){
    if(testeframe8.style.display == 'block'){
        testeframe8.style.display = 'none'
    }
    else{
        testeframe8.style.display = 'block'
    }
}
function clickImage9(){
    if(testeframe9.style.display == 'block'){
        testeframe9.style.display = 'none'
    }
    else{
        testeframe9.style.display = 'block'
    }
}
function clickImage10(){
    if(testeframe10.style.display == 'block'){
        testeframe10.style.display = 'none'
    }
    else{
        testeframe10.style.display = 'block'
    }
}
function clickImage11(){
    if(testeframe11.style.display == 'block'){
        testeframe11.style.display = 'none'
    }
    else{
        testeframe11.style.display = 'block'
    }
}
function clickImage12(){
    if(testeframe12.style.display == 'block'){
        testeframe12.style.display = 'none'
    }
    else{
        testeframe12.style.display = 'block'
    }
}
function clickImage13(){
    if(testeframe13.style.display == 'block'){
        testeframe13.style.display = 'none'
    }
    else{
        testeframe13.style.display = 'block'
    }
}
function clickImage14(){
    if(testeframe14.style.display == 'block'){
        testeframe14.style.display = 'none'
    }
    else{
        testeframe14.style.display = 'block'
    }
}
function clickImage15(){
        if(testeframe15.style.display == 'block'){
            testeframe15.style.display = 'none'
        }
        else{
            testeframe15.style.display = 'block'
        }
}
function clickImage16(){
    if(testeframe16.style.display == 'block'){
        testeframe16.style.display = 'none'
    }
    else{
        testeframe16.style.display = 'block'
    }
}
function clickImage17(){
    if(testeframe17.style.display == 'block'){
        testeframe17.style.display = 'none'
    }
    else{
        testeframe17.style.display = 'block'
    }
}
function clickImage18(){
    if(testeframe18.style.display == 'block'){
        testeframe18.style.display = 'none'
    }
    else{
        testeframe18.style.display = 'block'
    }
}
function clickImage19(){
    if(testeframe19.style.display == 'block'){
        testeframe19.style.display = 'none'
    }
    else{
        testeframe19.style.display = 'block'
    }
}
function clickImage20(){
    if(testeframe20.style.display == 'block'){
        testeframe20.style.display = 'none'
    }
    else{
        testeframe20.style.display = 'block'
    }
}

