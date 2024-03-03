//***********************************/
//*        CHECKOUT APP
//***********************************/


//! Donguler ile event tanımlamak mümkündür ancak fazla sayida event fazla tuketimi demektir. Bunun yerine bubbling ile parent elementler tek bir event tanımlanarak aşağıdaki elementlerin eventler yakalabilir. Yakalan event event.target ile ayrıştırılabilir. 
// function createEventsForPlusMinus() {
//   const minusBtns = document.querySelectorAll(".fa-minus")
//   const plusBtns = document.querySelectorAll(".fa-plus")

//   console.log(minusBtns)
//   console.log(plusBtns)

//   minusBtns.forEach((minus) => {
//     minus.addEventListener("click", () => {
//       //? Eksilme islemleri
//     })
//   })

//   plusBtns.forEach((plus) => {
//     plus.addEventListener("click", () => {
//       //? Arttirma islemleri
//     })
//   })
// }



// //? Selectors

const deleteallBtn = document.querySelector(".delete-div .fa-trash-can")
// console.log(deleteallBtn)
const products = document.querySelector("article.products")

deleteallBtn.addEventListener("click",( )=>{
products.textContent = "No Products"
products.classList.add("no-product")
document.querySelector(".delete-div").remove()
// document.querySelector(".delete-div").computedStyleMap.display = "none"
})

products.addEventListener("click",(e) => {
// if (e.target.classList.contains("fa-plus")) {
//     alert("plus")
// }else if (e.target.classList.contains("fa-minus")){
//     alert("minus")
// }else if (e.target.classList.contains("fa-trash-can")){
//     alert("delete")
// }


if (e.target.classList.contains("fa-plus")) {

})