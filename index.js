// const prompt = require('prompt-sync')()

// var name = prompt("Qual é o seu nome? ");

//showName(nome)

function showName() {
    var list = document.getElementById("result"); 
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    } 

    const nome = document.querySelector("#nome").value;

    let arr = [];

    for(let i = 0; i < nome.length; i++){
        let word = nome[i].replace(" ", "");
        let counter = 0;

        for(let j = 0; j < nome.length; j++){
            let letra = nome[j];
            if(word === letra){
                counter++
            }
        }

        if(counter > 1){
            let count = 0;
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if(element.letra === word) {
                    count++;
                }
            }

            if(count < 1)
                arr.push({letra: `${word}`, qtd: `${counter}`})

        }
    }
    console.log("")
    if(arr.length > 0) {
        

        console.log("As letras repetidas são: ")
        console.log("")
        for(let k = 0; k < arr.length; k++){
            var para = document.createElement("P");
            para.classList.add('letra')
            console.log(`letra ${arr[k].letra}: ${arr[k].qtd}`)
            var t = document.createTextNode(`letra ${arr[k].letra}: ${arr[k].qtd} vezes`)
            para.appendChild(t); 
            document.getElementById("result").appendChild(para);
        }
    } else {
        console.log("Não há letras repetidas!")
        var para = document.createElement("P");
        para.classList.add('semRepeticao')
        var t = document.createTextNode("Não há letras repetidas!")
        para.appendChild(t); 
        document.getElementById("result").appendChild(para);
    }

    console.log("")
};

