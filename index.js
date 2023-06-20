let visual1=document.getElementById("display")
let visual2=document.getElementById("display2")
let visual4=document.getElementById("inp")
let details=[];
// let edit=[];

function add(){
let item = {
  budgetitem: visual1.value,
  price: visual2.value,
  
  
};
details.push(item)
display();
if(visual1.value=="" || visual2.value==""){
    alert("please ensure all your fields are filled")
    remove()
}
console.log(details)
}
function display() {
  row.innerHTML = "";
  details.forEach(function (element, i) {
    row.innerHTML += `<tr>
    <td>${i + 1}</td>
     <td> ${element.budgetitem}</td>
     <td> ${element.price}</td> 
     <td><button class="btn btn-danger btn-lg" onclick="remove(${i})">delete</button></td> 
       <td><button class="btn-btn-danger btn-lg" onclick="edit(${i})"> edit</button></td>  </tr> `;
  });
}
// function total(){
//      visual2.value==visual4.innerHTML
// }
function remove(i){
  details.splice(i , 1)
  display();
}
// function edit(i){

//    editing.innerHTML+=`
//         <input> ${eleme.}</ input> ` 
//     details.splice(i, 1,)
// }