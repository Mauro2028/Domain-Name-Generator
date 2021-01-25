let pronoun = ["the", "ours", "mine","her"];
let adjetive = ["big", "better", "great"];
let noun = ["chicken", "racoon","computer"];

function domainGenerator(part1, part2, part3){
    for(let a=0; a<part1.length; a++){
        for(let b=0; b<part2.length; b++){
            for(let c=0; c<part3.length; c++){
                let newName = document.createTextNode(part1[a] + part2[b] + part3[c] + ".com");
                let lista = document.getElementById("listaDominios");
                let element = document.createElement("div");
                element.className = "alert alert-dark";
                lista.appendChild(element);
                element.appendChild(newName);
                let seleccionador = document.createElement("input");
                seleccionador.className = "form-check-input";
                seleccionador.setAttribute("type", "radio");
                seleccionador.setAttribute("name", "opcion");
                seleccionador.setAttribute("value", newName.textContent);
                element.appendChild(seleccionador);
            }
        }
    }
    const selectores = document.querySelectorAll("input");
    for(let i=0; i<selectores.length; i++){
        selectores[i].addEventListener("input", function(){
            if(selectores[i].checked){
                let elegido = selectores[i].value;
                let titulo = document.querySelector("#titulo");
                titulo.innerHTML = elegido;
            }
        });
    }
}
let boton=document.querySelector("#boton").addEventListener("click", function(){
    domainGenerator(pronoun, adjetive, noun);
    document.querySelector("#boton").style.display ="none";
})