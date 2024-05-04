export function randint(min,max){
    let n = Math.random()
    n = n*(max-min) + min
    n = Math.floor(n)
    return n
}
export function shuffle(arr){
    for(i = 0; i < arr.length; i++){
        let j  = randint(0,arr.length)
        let a = arr[i]
        arr[i] = arr[j]
        arr[j] = a
    }
}
function choose(arr){
    let i = randint(0,arr.length)
    return arr[i]
}
let div_qw = document.querySelector('.qw')
let div_ans = document.querySelector('.answers')
let ans_arr = div_ans.querySelectorAll("div")
export class Qustion{
    constructor(){
        this.qw = NaN
        this.correct = NaN
        this.ans = []
        this.symbol = ["+","-","*","/"]
        this.count = 0
        this.correct_count = 0 
        this.range = 10
        this.typeQuiz = "num"
    }
    display(){
        this.newqw()
        this.count += 1
        div_qw.innerHTML = this.qw
        shuffle(ans_arr)
        for(let i = 0; i < ans_arr.length; i += 1){
            ans_arr[i].innerHTML = this.ans[i]
        }
    }
    newqw(){
        let symb = choose(this.symbol)
        let n1 = randint(0,this.range)
        let n2 = randint(0,this.range)
        if (symb == '+'){
            this.correct = n1+n2
        }
        if (symb == '-'){
            this.correct = n1-n2
        }
        if (symb == '*'){
            this.correct = n1*n2
        }
        if (symb == '/'){
            n2 = randint(1,this.range)
            while (n1%n2 != 0){
                n2 = randint(1,this.range)
            }
            this.correct = n1/n2
        }
        this.qw = `${n1} ${symb} ${n2}`
        this.ans = [this.correct]
        for(let i =0; i<4;i++){
            let n = randint(this.correct-15,this.correct+15)
            while (this.ans.includes(n)){
                n = randint(this.correct-15,this.correct+15)
            }
            this.ans.push(n)
        }
    }
}
//letar = [1,2,3,4,5]
//shuffle(ar)
//alert(ar)
