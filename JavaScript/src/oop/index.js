class Customer{
    constructor(id,customerNumber){
        //prototyping özelliği
        this.id =id
        this.customerNumber = customerNumber
    } 
}

let customer = new Customer(1,"12345");
//prototyping
customer.name = "Rabia Kuran"
console.log(customer.name)

class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id,customerNumber)
        this.companyName
    }

}
//map filter reduce çok önemliler
//filter:yeni bir array oluşturuyor. Referansı değştirdiğimiz anda işliyor
//reduce: akümalör görevi görüyor. örneğin (acc) accye fiyatı ekle sepete(cart) toplam tutarı hesaplar
//map: mapi yeni objeler üretmek içinde kullanabiliyoruz. mapte o an oluşturuğumuzu return de edebiliriz.
