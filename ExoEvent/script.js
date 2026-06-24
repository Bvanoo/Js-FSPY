const alertBtn = document.getElementById("alertBtn")
const inputTxt = document.getElementById("inputTxt")
const red = document.getElementById("red")
const hid = document.getElementById('hid')
const alertHour = document.getElementById('alertHour')

alertBtn.onclick = () =>{
    alert("BONJOUR ! ")
}


inputTxt.addEventListener('input', (e)=>{
    console.log(e.target.value);
})

red.addEventListener('mouseover', ()=>{
    document.body.classList.add('red');
})
red.addEventListener('mouseleave', ()=>{
    document.body.classList.remove('red')
})


// let hidd = false
// hid.onclick=(()=>{
//     if(hidd){
//         inputTxt.style.opacity = 1;
//         hidd=false;
//     }else{
//         inputTxt.style.opacity = 0;
//         hidd=true;
        
//     }
// })

hid.onclick=(()=>{
    if(inputTxt.classList.contains('hide')){
        inputTxt.classList.remove('hide')
    }else{
        inputTxt.classList.add('hide')
    }
})

alertHour.onclick = (()=>{
    alert(new Date().toString());
})