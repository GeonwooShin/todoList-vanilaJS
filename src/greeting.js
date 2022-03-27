import { todoForm } from "./todo.js"

const nameForm = document.querySelector('.name__form')
const nameInput = document.querySelector('.name__form-input')
const nameInputBtn = document.querySelector('.name__form-button')
const greetingBox = document.querySelector('.greeting')

const USERNAME = "username"
const savedName = localStorage.getItem(USERNAME)

function paintGreeting(username) {
  greetingBox.innerText = `${username}님 환영합니다`
  greetingBox.classList.remove('hide')
  todoForm.classList.remove('hide')
}

function onSubmitName(event) {
  event.preventDefault()
  nameForm.classList.add('hide')
  const name = nameInput.value
  localStorage.setItem(USERNAME, name)
  paintGreeting(name)
}

if(savedName === null) {
  nameForm.classList.remove('hide')
  nameForm.addEventListener('submit', onSubmitName)
} else {
  paintGreeting(savedName)
}