function addDonation(){

let food=document.getElementById("food").value
let quantity=document.getElementById("quantity").value
let location=document.getElementById("location").value

let list=document.getElementById("donationList")

let item=document.createElement("li")

item.innerText=food+" - "+quantity+" - "+location

list.appendChild(item)

}
