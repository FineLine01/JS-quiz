const submitBtn = document.querySelector("#submit")
console.log(submit);

const resultPara = document.querySelector("#resultPara")

submitBtn.addEventListener("click", function(event){
    event.preventDefault(event)
    let questionAnswer = document.querySelector("#questionAnswer").value.toUpperCase()
    console.log(questionAnswer)

    
    if(questionAnswer === "JAVASCRIPT"){
        console.log("correct")
        resultPara.innerHTML = "Correct"
        } 
        else if (questionAnswer !== "CAIRO"){
            console.log("wrong")
        resultPara.innerHTML = "Wrong"
        }

})