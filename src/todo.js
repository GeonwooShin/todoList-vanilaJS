import { savedName } from "./greeting.js"

const todoForm = document.querySelector('.todo__form')
const todoInput = document.querySelector('.todo__form-input')
const todoList = document.querySelector('.todo-list')

const TODOS_KEY = "todos"

let todos = []

if(savedName) {
  todoForm.classList.remove('hide')
}

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  todos = parsedTodos
  console.log(parsedTodos)
  parsedTodos.forEach(parsedTodo => addTodo(parsedTodo))
}

function addTodo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const button = document.createElement('button')
  li.setAttribute('class', 'todo-list-item')
  li.setAttribute('id', `${newTodo.id}`)
  span.setAttribute('class', 'todo-content')
  span.innerText = `${newTodo.text}`
  button.innerText = 'x'
  button.addEventListener('click', deleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  todoList.appendChild(li)
}

function updateTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
  const deleteTarget = event.target.parentElement
  const deleteTargetId = parseInt(deleteTarget.id)
  deleteTarget.remove()
  console.log(deleteTargetId)
  todos = todos.filter(todo => todo.id !== deleteTargetId)
  updateTodo()
}

function onSubmitTodo(event) {
  event.preventDefault()
  const newTodo = todoInput.value
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  todoInput.value = ""
  todos.push(newTodoObj)
  addTodo(newTodoObj)
  updateTodo()
}

todoForm.addEventListener('submit', onSubmitTodo)