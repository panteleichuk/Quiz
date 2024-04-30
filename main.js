import { Qustion } from "./scripts.js"

let div_ans = document.querySelector('.answers')
let ans_arr = div_ans.querySelectorAll("div")
let canClcik= true



let qws = new Qustion()
qws.display()
for(let ans of ans_arr){
    ans.addEventListener('click',function(){
        if (canClcik){
            canClcik = false
            if (+this.innerHTML == qws.correct){
                qws.correct_count += 1
                this.style.background = "#00ff00"
            }
            else{
                this.style.background = "#ff0000"
            }
            anime({
                targets:ans,
                background:"rgb(7, 112, 112)",
                delay:1000,
                duration:100}).finished.then(function(){
                    qws.display()
                    canClcik = true
                })
            
            }
        })
}

function create_result(){
    let h2 = document.createElement("h2")
    h2.class = "res"
    h2.innerHTML = `Всього питань ${qws.count}`
    div_finish.appendChild(h2)

    let h3 = document.createElement("h2")
    h3.className = "res"
    h3.innerHTML = `Всього правильних відповідей ${qws.correct_count}`
    div_finish.appendChild(h3)

    let h4 = document.createElement("h2")
    h4.className = "res"  
    h4.innerHTML = `Кофіцієнт правильних питань ${qws.correct_count/qws.count}`
    div_finish.appendChild(h4)
}
let div_start = document.querySelector('.start')
let div_finish = document.querySelector('.finish')
let div_test = document.querySelector('.card_qw')
let btn_start = document.querySelector(".btn_start")
btn_start.addEventListener("click", ()=>{
    div_start.style.display = "none"
    div_finish.style.display = "none"
    div_test.style.display = "flex"
    qws.range = +document.querySelector('.num').value
    // qws.typeQuiz = document.querySelector()
    setTimeout(()=>{
        div_test.style.display = "none"
        create_result()
        div_finish.style.display = "flex" 
    },+document.querySelector('.time').value);
})

document.querySelector(".back").addEventListener("click", function(){
    div_finish.style.display = "none"
    div_start.style.display = "flex"
})