const images = [
    'images/jacket-1.png',
    'images/jacket-2.png',
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval( () =>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgUrl);
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 1500)