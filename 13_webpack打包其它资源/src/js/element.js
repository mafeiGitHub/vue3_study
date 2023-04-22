
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = "你好啊，马飞飞"

const imgDivEl = document.createElement('div')
imgDivEl.className = 'img-bg'
document.body.appendChild(divEl)
document.body.appendChild(imgDivEl)

//使用src的方式引用图片
import  imgUrl from "../img/hudie.png"
const imgEl = document.createElement('img')
imgEl.src = imgUrl
document.body.appendChild(imgEl)