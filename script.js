const firstName ="Eman"
const id = 1234
const address = "Palestine, Gaza"
const hobbies =["football","Dance"]

const person ={
    firstName: "Eman",
     id: 123,
    address:{
        city:"Gaza",
        Country:"Palestine"
    },
    hobbies: ["football","Dance"],
    sayHi: function(){
        console.log("Saying HI")
    }
}
    
console.log(person)
console.log(person.firstName)
person.sayHi()
console.log(person.address.Country)
console.log(person.address.city)
console.log(person.hobbies[0])
person.firstName="Eman Waleed Eldeeb"
console.log(person.firstName)