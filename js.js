
let arr = [1,5,3,6,8,4,3];
let questions =["На графіку відображено зміну робочої температури двигуна легкового автомобіля протягом 10 хвилин з моменту його запуску. Визначте за графіком кількість хвилин, протягом яких робоча температура двигуна була не більшою за 50 °С.",""];
let answers = [["7","4","3","2"]]
let right_answers=[2]

question.innerHTML=questions[0]
label1.innerHTML =answers[0][0]
label2.innerHTML =answers[0][1]
label3.innerHTML =answers[0][2]
label4.innerHTML =answers[0][3]

btn.addEventListener("click",check);
function check(){
    n = document.getElementsByName("question");
    k=0;
    n.forEach(element => {
        if (element.checked){
            if (k == right_answers[0]){
                console.log("right");
                document.getElementById("btn").style.backgroundColor ="#00ff6e";
            }
            else{
                console.log("wrong");
                document.getElementById("btn").style.backgroundColor ="#e34234";
            }
        }
        
    k++;
    });
}
arr.forEach(element => {
    console.log(element);
});