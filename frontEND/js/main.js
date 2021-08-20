$(document).ready(()=>{
    let urlAPI_treinoDorsal = "http://localhost:4000/treino/dorsal"
    let urlAPI_treinoPernas = "http://localhost:4000/treino/pernas"
    let dorsal = document.getElementById("dorsal")
    let pernas = document.getElementById("pernas")
    const cardElement = (tipoTreino, descTreino) =>{
        return `
        <div class="card p-2 mt-2" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${tipoTreino}</h5>
                <hr>
                <p class="lead">
                    ${descTreino}    
                </p>

            </div>
        </div>`
    }

    const cardElement2 = (tipoTreino, descTreino) =>{
        return `
        <div class="card p-2 mt-2" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${tipoTreino}</h5>
                <hr>
                <p class="lead">
                    ${descTreino}    
                </p>

            </div>
        </div>`
    }

    // get treino pernas...
    fetch(urlAPI_treinoPernas,{method: "get"})
    .then((resposta)=>{
        resposta.json().then((data)=>{
            console.log(data)
            pernas.innerHTML = data.map((treino) => {
                return cardElement(treino.tipo, treino.descricao);
            })
            .join("");


        })
    });

    fetch(urlAPI_treinoDorsal,{method: "get"})
    .then((resposta)=>{
        resposta.json().then((data)=>{
            console.log(data)
            dorsal.innerHTML = data.map((treino) => {
                return cardElement(treino.tipo, treino.descricao);
            })
            .join("");


        })
    })
})