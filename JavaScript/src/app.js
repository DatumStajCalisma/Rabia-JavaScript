  //  let sayi=10;
    //sayi1= "Rabia Kuran"
    //let student = {id:1,name:"Rabia"}
    //console.log(student);

function save(ogrenci){
    console.log(ogrenci)

}
save(undefined,student);

let students = ["Rabia Kuran","Ayşe Kara"]
//console.log(students)
let students2 = [student,{id:2,name: "Halit"}]
//onsole.log(students2)

//bir değişkene fonksiyon atanabilir
//rest geriye kalanlar
let showProducts = function name(id,...products){
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)
//...:product diyince array olarak algılıyor: buna rest parametre denir
//showProducts(10,"elma","armut","karpuz")
//3 noktanın spread versiyonu
//restte virgüllerle göndiriyoruz
//console.log(Math.max(1,2,3,4,50,4,60,14))
//spread:ayrıştırmak demekk
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring:react dünyasında çok kullanılıyor
//elimizdeki arrayin değişkenlere atama yöntemi
let populations =[10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations //bunlar bizim değişkenlerimiz
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)

}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name1} = category
console.log(id)
console.log(name1)

