const axios = require("axios")
function getRequest() {
    axios.get("https://api.vschool.io/courtneyhamilton/todo")
.then(response => {
    listData(response.data)
    console.log(response.data)
})
.catch(error => console.log(error)) 
}
function listData(data){
    for (let i = 0; i < data.length; i++) {
       const title = document.createElement("h2")
       const price = document.createElement("h2")
       const description = document.createElement("h2")
       const imgUrl = document.createElement("h2")
       const erase = document.createElement("button")
       erase.textContent = "Delete"
       title.textContent = `Chore: ${data[i].title}`
       price.textContent = `Price: ${data[i].price}`
       description.textContent = `Description: ${data[i].description}`
       //imgUrl.src = data[i].imgUrl
       document.getElementById("list").appendChild(title)
       document.getElementById("list").appendChild(price)
       document.getElementById("list").appendChild(description)
       document.getElementById("list").appendChild(imgUrl)
       document.getElementById("list").appendChild(erase)
       erase.addEventListener("click", function(){
        axios.delete(`https://api.vschool.io/courtneyhamilton/todo/${data[i]._id}`)
        title.remove(title)
        price.remove(price)
        description.remove(description)
        imgUrl.remove(imgUrl)
        this.remove()
       })
       console.log("functionfire")
      }
}

getRequest()
const todoForm = document.getElementById("todoform")
todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

        axios.post("https://api.vschool.io/courtneyhamilton/todo", newTodo)
    .then(response => getRequest(response.data))
    .catch(error => console.log(error))

})
