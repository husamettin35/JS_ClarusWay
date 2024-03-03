//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")
const h2 = document.querySelector('.add-item h2')
const body = document.querySelector('body')
const myinput = document.querySelector('input')
const addButon = document.getElementById('btn') 
const ul = document.querySelector('ul')
const form = document.querySelector('form')
console.log(h2)
h2.onmouseover = function(){
    // alert('Mouse over');
//    h2.style.color = 'red'
h2.classList.add('red','center','fs-1')
}
   h2.onmouseout = () => {
    h2.classList.remove('red','center')
   }
body.onload = function(){
    // alert('Uygulama Yüklendi')
    myinput.focus()
}


form.onsubmit = function(e ){

    e.preventDefault()
    console.log(e.target)
    addButon.onclick = () =>{
        // alert('tıklandı')
        myinput.focus()
    
        if(!myinput.value.trim()){
            alert('Lütfen Bir Değer Giriniz')
            return
        }
        const li = document.createElement('li')
        li.textContent = myinput.value
        ul.appendChild(li)
        myinput.value = ''
    }
}
myinput.onkeydown = function( e){
    console.log(e)
    back
}