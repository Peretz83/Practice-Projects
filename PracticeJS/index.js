// let input = document.getElementById("input")
// let submitBtn = document.querySelector(".submit-btn")
// let todoTable = document.getElementById("todoTable")
// let trHTML = ""


// submitBtn.addEventListener("click",()=>{
//   let MyToDoList = []


// if(input.value==""|input.value=== null){
// console.log("no value sub");
// }else{
// MyToDoList.push(input.value)
// }

// MyToDoList.forEach((element)=>{
  
//         trHTML += `
//           <tr> 
            
//             <td class="my-td">${element}</td>
//             <td><button class="delBtn">Del</button>
//             <button class="editBtn">Edit</button></td>
//             <td>
//             <select>
//             <option>Done</option>
//             <option>In-Progress</option>
//             <option>In-Progress</option>
//             <option>In-Progress</option>
//             </select></td>
//           </tr>`
      
//      todoTable.innerHTML = trHTML

// })

// let allDeleteBtns = document.querySelectorAll(".delBtn")

// allDeleteBtns.forEach((item)=>{
// item.addEventListener("click",(evt)=>{
//    todoTable.deleteRow(item);
// })
// })

// input.value = ''
// })



// let myArr = ["Lee","Nat","Abba","Imma","Emi"]

// for (let i = 0; i < myArr.length; i++) {
//  let myDiv = document.createElement("div")
//  document.body.appendChild(myDiv)
//  myDiv.style.width = "70px"
//  myDiv.style.height = "70px"
//  myDiv.style.margin = "5px"
//  myDiv.style.backgroundColor = "yellow"
//  myDiv.textContent = myArr[i]
 
  
// }

// myArr.forEach((item)=>{
//    let myDiv = document.createElement("div")
//  document.body.appendChild(myDiv)
//  myDiv.style.width = "70px"
//  myDiv.style.height = "70px"
//  myDiv.style.margin = "5px"
//  myDiv.style.backgroundColor = "yellow"
//  myDiv.textContent = item
  
// })

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let root = document.getElementById("root")
let myArr = []

btn.addEventListener("click",()=>{
  root.innerHTML=""
  myArr.push(input.value)
 creatediv()

 
})

let creatediv = ()=>{
   myArr.forEach((item)=>{
   let myDiv = document.createElement("div")
 root.appendChild(myDiv)
 myDiv.style.width = "70px"
 myDiv.style.height = "70px"
 myDiv.style.margin = "5px"
 myDiv.style.backgroundColor = "yellow"
 myDiv.textContent = item
  
})
}