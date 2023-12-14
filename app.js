
let cards = document.getElementById("cards");
let none = document.getElementsByClassName("lastbutton");

var end= 8;
function fullimage(){
let url = "https://fakestoreapi.com/products";
fetch(url)
.then((response)=>{
    return response.json();
})
 .then((data)=>{
    let count = 0;  
    for(item of data){
       
        if(count === end){
            break;
        }
        console.log(item.image);


        let product = document.createElement('div');
        product.classList.add('grid-card');

        let gridimg = document.createElement('img');
        gridimg.src=item.image;
        cards.appendChild(product)
        product.appendChild(gridimg); 
        count++;
    }
 });
}
function loadMoreImages() {
    end += 4; // Increase the number of images to fetch
    fullimage();
  }
fullimage()







var some = document.querySelector('.some')
var heading = document.querySelector('.heading')
function  getRandomColor() {

    let letters = "0123456789ABCDEF";

    
    let  color = '#';

    
    for (let i = 0 ; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
       
    }
    console.log(color);
    some.style.backgroundColor = color;
    heading.innerHTML= color;
    heading.style.color = color;

    
}

getRandomColor()

var islast = document.querySelector('.islast')
var ending = document.querySelector('.ending')
function  getdifferentColor() {

    let letters = "0123456789ABCDEF";

    
    let  color = '#';

    
    for (let i = 0 ; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
       
    }
    console.log(color);
    islast.style.backgroundColor = color;
    ending.innerHTML= color;
    ending.style.color = color;

    
}

getdifferentColor()












