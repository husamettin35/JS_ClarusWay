console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const h2 = document.getElementById('add-new-item')
console.log(h2.parentNode)
console.log(h2.parentElement)
console.log(h2.parentNode.parentNode.parentNode)

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild


//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling
