console.log("***** SELECTORS *****")

document.title = "FS16 🚧"
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
console.log(document.getElementById("add-new-item"))

//? id'si add-new-item olan elementi secer
const headerText = document.getElementById("add-new-item")
console.log(headerText)

//! secilen elementin style propertysini manipule ettik
//? her sey key-value şeklinde yazılır.
headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"
//! NOTE: property 'ler de kebap-case değil camelCase notasyonu kullanılır.

//? NOTE
// headerText.style = "font-family: tahoma; font-size: 30px" //? CSS vari erişim

//? id'si btn olan elementi secer
const addBtn = document.getElementById("btn")
console.log(addBtn)

//? HTML elementlerininin İçerikleri okuma ve değiştirme
//?----------------------------------------
const htmlLi = document.getElementById("html-li")
htmlLi.style.color = "red"

//? bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.
//! textContent, innerText, innerHTML
console.log(htmlLi.textContent)
htmlLi.textContent = "HTML5"
htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "JS"
document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "React JS"
document.getElementById("react-li").innerHTML =
  "<h2 style='color: blue'>REACT JS</h2>"

//?! input'ların degerinin okunması/yazılması
const myInput = document.getElementById("input")
console.log(myInput.value)

addBtn.value = "SUBMIT"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const allLi = document.getElementsByTagName("li")
console.log(allLi) //? HTML Collection

//?HTML collection'daki her bir elemente indisleme ile erişilebilir.
console.log(allLi[1].textContent)
allLi[2].textContent = "JS-React"

//? Tplu bir şekilde erişim için for yapıları kullanılabilir.
for (let li of allLi) {
  console.log(li.textContent)
}

//! array-like grubunda direk array metotları kulanılamamz.
// allLi.forEach((li) => console.log(li))

//? Çözüm olarak array-like grubu array'e çevirilebilri.

//? 1-spread
const arrAllLi = [...allLi]
console.log(arrAllLi)
arrAllLi.forEach((li) => (li.style.color = "fuchsia"))

//? 2-array.from()
console.log(Array.from(allLi))
Array.from(allLi).map((li) => (li.style.backgroundColor = "green"))
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName('list')
console.log(myList)





//* ========================================
//*              QUERYSELECTOR()
//* ========================================
const myH3 = document.querySelector('main section.item-list h3')
console.log(myH3)



//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const liste = document.querySelectorAll('.item-list .list')
console.log(liste)
liste.forEach((li)=> console.log(li.innerText))