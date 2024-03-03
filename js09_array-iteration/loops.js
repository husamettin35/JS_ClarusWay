//* ============================================
//*                FOR LOOP
//* ============================================

// console.log("**** LOOPS IN ARRAYS ***")
const maaslar = [50000,35000,120000,44000]
let sum = 0
for(let i = 0; i < maaslar.length; i++){
    sum += maaslar[i]
    console.log(i,sum)
}
console.log('SUM:' , sum)

const notlar = [50, 45, 67, 100, 10]
const ellidenKucukNotlar = []
const ellidenbuyukNotlar = []
for(let i = 0; i <notlar.length; i++ ){
    if(notlar[i]<50){
        ellidenKucukNotlar.push(notlar[i])
    }else {
        ellidenbuyukNotlar.push(notlar[i])
    }
}
console.log(notlar)
console.log(ellidenKucukNotlar)
console.log(ellidenbuyukNotlar)
//! FOR İN
const sayilar = [50000,35000,120000,44000]
let total = 0
for(let i in sayilar){
    total += sayilar[i]
}
console.log('AVG:', total/sayilar.length)


// FOR OF
//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
// const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

// reduce
// const mayislar =[40000, 30000,25000,100000]
// const toplamMaas = mayislar.reduce((t,m)=>t+m)
// console.log('Toplam', toplamMaas)

// const mayislar =[40000, 30000,25000,100000]
// const toplamMaas = mayislar.reduce((t,m)=>t+m)
// console.log('Toplam', toplamMaas)
//  const toplamZamliMaas = mayislar.filter((m) =>m<4000).map((m)=>)