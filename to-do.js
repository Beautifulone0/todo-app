 var todoform = document.getElementById('to-do')
 var list = document.getElementById('todo')
 var todos =[
   {
    id: 'f5a6i1',
    title: 'wake up and pray',
    description: ' wake up pray get ready for the day',
    complete: false
   },

   {
    id: 'f56a15',
    title: 'bath have breakfast',
    description: 'brush bath and have bread for breakfast',
    complete: false
   },

   {
    id: 'f68a83',
    title: 'practice javaScript',
    description: ' complete your todo app',
    complete: false
   },
 ]

 todoform.addEventListener('submit', function (e){
    e.preventDefault()


    addTodo(e.target.title.value)

    e.target.title.value = ''

    /*console.log(e.target.title.value)

    var element = document.createElement('li')
    element.innerText = e.target.title.value
    list.appendChild(element)*/
 })


 var b = ['a', 'b', 'c', 'd', 'e']

 /*for(i = 0; i < b.length; i++) {
   var element = document.createElement('li')
   element.innerText = b[i]

   list.appendChild(element)
 }*/
 
 // using array method to loop through
 /*b.forEach(function (todo){
   var element =document.createElement('li')
   element.innerText = todo

   list.appendChild(element)
 })*/

  var displayTodo = function () {

    

    
    list.innerHTML = ''

    
    todos.forEach(function (todo){


      var buttons = `<span>
      <img src= 'img/correct.png' alt=''   class='completebtn' id = c-${todo.id} >
      <img src= 'img/delete.png' alt=''  class='deletebtn' id = d-${todo.id} >
    </span>`


      var element =document.createElement('li')
      element.id = todo.id
      if(todo.complete){
        //add a class called completed
        element.classList.add('completed')
        // add a text called completed
        element.innerHTML = todo.title + '<span> completed </span>' + buttons
        console.log(todo.title, 'is completed')
      } else {
        element.innerHTML = todo.title + buttons
      }
      
      //var element =document.createElement('li')
      //var element =document.createElement('li')
      //element.innerHTML = todo.title + buttons
   
      list.appendChild(element)
    })
  }
  


  var addTodo = function (obj) {
    //create the todo object
    // add the todo object to the todo array

    var todoObject = {
      title: obj,
      description: '',
      completed: false
    }

    todos.push(todoObject)

    displayTodo()
  }
 


  var completeTodo = function (id) {

     var index = todos.findIndex(function (b) {
      return b.id == id
    })

    var target = todos[index]

    target.complete = !target.complete

    displayTodo()
  }
  

   var deleteTodo = function (id) {
    //get the todo object
    var index = todos.findIndex(function (d) {
      return d.id == id
    })

    todos.splice(index, 1)

    displayTodo()

   }
   
   list.addEventListener('click', function (e){
    if (e.target.classList.contains('completebtn')) {
      var x = e.target.id
      var y = x.split('-')
      completeTodo(y[1]);
    }

    if (e.target.classList.contains('deletebtn')){
      var x = e.target.id
      var y = x.split('-')
      deleteTodo(y[1]);
    }

     
     displayTodo()
   })


   


  displayTodo()
/*var todoForm = document.getElementById('to-do')
var li = document.getElementById('todo-list')
var todoList = [
  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  },

  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  },

  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  }
]



todoForm.addEventListener('submit', function(e){
  e.preventDefault()

  addTodo(e.target.title.value)

  //e.target.title.value = ''
  //console.log(e.target.title.value);

  //var element = document.createElement('li')
  //element.innerText = e.target.title.value

 //li.appendChild(element)
})



var x = ['a', 'b', 'c']

//for(i = 0; i<x.length; i++){
//  var element = document.createElement('li')
//  element.innerText = x[i]
//
//  ul.appendChild(element)
//}



var displayTodo = function () {
  ul.innerText = ''

  todoList.forEach(function (todo){

    var element = document.createElement('li')
    element.innerText = todo.title
  
    ul.appendChild(element)
  
  })
}
displayTodo()
displayTodo()

//var displayTodo = function(){
//  ul.innerHTML = ''
//  x.forEach(function(todo){
//     var element = document.createElement('li')
//     element.innerText = todo.title
//     ul.appendChild(element)
//  })
//}

var addTodo = function (txt) {
  //create the todo object
  // add the to do object to the todo array

  var T = {
    title: txt,
    description: '',
    completed: false
  }

  todoList.push(T)
  displayTodo()
}

displayTodo()*/