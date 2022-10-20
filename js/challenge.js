document.addEventListener('DOMContentLoaded', () => setInterval)

const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const likes = document.querySelectorAll('.likes')
const submit = document.querySelector('form')
const submitBtn = document.getElementById('submit')

let commentForm = document.getElementById('.comment-input')
const commentList = document.querySelectorAll('.Comments')



let heartCount = 0
let count = 0
let intervalID = setInterval(function(){
    counter.innerText = count++
}, 1000)

pause.addEventListener('click', function(){
    if(pause.innerText === 'pause') {
        pause.innerText = 'resume'
        clearInterval(intervalID)
            minus.setAttribute('disabled','')
            plus.setAttribute('disabled','')
            heart.setAttribute('disabled','')
            submitBtn.setAttribute('disabled','')
    } else {
        pause.innerText = 'pause'
        intervalID= setInterval(function(){
            counter.innerText = count++
        }, 1000) 
        minus.removeAttribute('disabled','')
        plus.removeAttribute('disabled','')
        heart.removeAttribute('disabled','')
        submitBtn.removeAttribute('disabled','')
    }
})

plus.addEventListener('click', function(){
    counter.innerText = count ++
})

minus.addEventListener('click', function (){
    counter.innerText = count --
})

heart.addEventListener('click', function(){
    const newLi = document.createElement('li')
    newLi.textContent = count + ' has been liked ' + heartCount++ + ' times'
    likes[0].appendChild(newLi)
})

submit.addEventListener('submit', (e) => { 
    e.preventDefault()
    const newComment = document.createElement('li')
    newComment.textContent = e.target['comment-input'].value
    commentList[0].appendChild(newComment)
    submit.reset()
    })


