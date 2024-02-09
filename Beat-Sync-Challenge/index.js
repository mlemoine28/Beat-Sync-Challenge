let playnow = document.querySelector('#playnow')
function onClick() {
    document.querySelector('#intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = "block";
    console.log('hello')    
}

playnow.addEventListener('click', onClick)
