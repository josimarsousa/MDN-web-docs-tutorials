let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox.jpg'){
        myImage.setAttribute('src', 'images/fox.jpg')
    }else{
        myImage.setAttribute('src', 'images/firefox.jpg')
    }
}
