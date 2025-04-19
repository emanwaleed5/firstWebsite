/*const firstName ="Eman"
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
console.log(person)
*/
/*const firstName ="Eman"
const website = "EmanWaleed.com"
console.log(`My name is ${firstName} and my website is ${website}`)
alert("Amazing Job")
window.addEventListener("resize", ()=>{console.log("Window resized")})
const element =document.createElement( "h3")
element.innerText= "2024"
const title = document.getElementsByClassName("title");
Array.from(title).forEach((element)=>{
    element.style.color="blue"
})
console.log(document.getElementById("Jop"))
console.log(document.querySelectorAll(".title"))
*/

const btn = document.querySelector("#clickhere")
console.log(btn.dataset)
btn.addEventListener("click", ()=>{
    const clicks = btn.dataset.clicks;
    btn.dataset.clicks=parseInt(btn.dataset.clicks) +1;
    console.log(`clicked here ${clicks}`);
}
)

btn.addEventListener("mouseenter", ()=>{
    const clicks = btn.dataset.clicks;
    btn.dataset.clicks=parseInt(btn.dataset.clicks) +1;
    console.log(`mouse ented ${clicks}`);
}
)