const clockDate = document.querySelector('.clock__date')
const clockSession = document.querySelector('.time-session')
const clockTime = document.querySelector('.time-time')

function updateClock() {
  const date = new Date()
  // console.log(date.getDay(), date.getMonth())
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const dayOfWeek = days[date.getDay()]
  let hour = date.getHours()
  let session = hour >= 12 ? '오후' : '오전'
  if(hour == 0) {
    hour = 12
  } else if(hour > 12) {
    hour = hour - 12
  }
  const hours = String(hour).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  
  clockDate.innerText = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`
  clockSession.innerText =`${session}`
  clockTime.innerText = `${hours}:${minutes}:${seconds}`
}

function initClock() {
  updateClock()
  setInterval(updateClock, 1000)
}

initClock()