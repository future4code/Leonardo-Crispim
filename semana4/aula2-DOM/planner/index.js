function AddTask(){
let DiaSemana = document.getElementById("WeekDays")
let Tarefa = document.getElementById("TaskID")
let DayMarker = document.getElementById("MainContainer".children)


if(Tarefa.value === ""){
    alert("Insira uma Tarefa!")
}

else{

    switch (DiaSemana.value){

        case "Segunda":
            let segunda = document.getElementById("Monday")
            segunda.innerHTML += "<p onclick='TaskLine()'>" + Tarefa.value + "</p>"
        break;
    
        case "Terca":
            let terca = document.getElementById("Tuesday")
            terca.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
        case "Quarta":
            let quarta = document.getElementById("Wednesday")
            quarta.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
        case "Quinta":
            let quinta = document.getElementById("Thursday")
            quinta.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
        case "Sexta":
            let sexta = document.getElementById("Friday")
            sexta.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
        case "Sabado":
            let sabado = document.getElementById("Saturday")
            sabado.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
        case "Domingo":
            let domingo = document.getElementById("Sunday")
            domingo.innerHTML += "<p>" + Tarefa.value + "</p>"
        break
    
    }
    
    Tarefa.value = ""

}

}