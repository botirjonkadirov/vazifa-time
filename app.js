const d = document.querySelector(`.day`)
const m = document.querySelector(`.month`)
const y = document.querySelector(`.year`)
const t = document.querySelector(`.time`)
function today () {
    const date = new Date()
    d.textContent=date.getDate()<10 ? `0`+ date.getDate() : date.getDate()
m.textContent=1+date.getMonth()<10 ? `0`+ (1+ date.getMonth()) : (1+ date.getMonth())
y.textContent=date.getFullYear()
let hour = `HH`
let min = `MM`
let sec = `SS`
hour= date.getHours()<10 ? `0`+ date.getHours() : date.getHours()
min=date.getMinutes()<10 ? `0`+ date.getMinutes() : date.getMinutes()
sec=date.getSeconds()<10 ? `0`+ date.getSeconds() : date.getSeconds()
let time = `${hour}:${min}:${sec}`
t.textContent = time
}
setInterval(today, 1000);