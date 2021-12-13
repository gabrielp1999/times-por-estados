let todosEstados = [];
let todosTimes = [];

function carregaEstados() {
    fetch('estados.json')
        .then(resposta => resposta.json())
        .then(estados => {
            todosEstados = estados;
            const inputEstados = document.getElementById('estados');
        
            let conteudo = "";
        
            for(let estado of estados){
                conteudo +=
                `<option value="${estado.uf}">${estado.nome}</option>`;
            }
        
            inputEstados.innerHTML = conteudo ;
        });
        
}

function estados(valor){
    const inputTimes = document.getElementById('times');

    const times = todosTimes.filter(function(time){
        const resultado = time.estado === valor;

        return resultado;
    });

    let conteudo = ""

    for(let equipe of times ){
        conteudo +=
        `<option value="${equipe.sigla}">${equipe.time}</option>`;
    }

    inputTimes.innerHTML = conteudo;

}


function buscarTimes(valor){
    fetch('times.json')
    .then(resposta => resposta.json())
    .then(times => {
        todosTimes = times;

    });


};

carregaEstados();
buscarTimes()