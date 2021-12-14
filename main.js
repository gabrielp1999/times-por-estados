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
    const imagem = document.getElementById('imagem')
    const timesId = document.getElementById('timesId')
    timesId.style.display="flex"
    imagem.style.display ="none";

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


}

function times(valor) {
    const imagem = document.getElementById('imagem')
    imagem.style.display ="block";

    let conteudo = "";
    
    switch(valor){

        case "CRU":
        conteudo = `<img src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2022.png" alt="">` 
        break;

        case "CAM":
        conteudo = `<img src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F7632.png" alt="">` 
        break;

        case "AME":
        conteudo = `<img src="https://www.americamineiro.com.br/wp-content/uploads/2020/10/cropped-iconAmerica.png" alt="">` 
        break;

        case "BET":
        conteudo = `<img src="https://i.pinimg.com/originals/75/0d/d7/750dd746a871f27c91eb067f582177e2.png" alt="">` 
        break;

        case "FLA":
        conteudo = `<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png" alt="">` 
        break;


        case "FLU":
        conteudo = `<img src="https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png" alt="">` 
        break;

        case "VAS":
        conteudo = `<img src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F3454.png" alt="">` 
        break;
        
        case "BOT":
        conteudo = `<img src="https://uploads.metropoles.com/wp-content/uploads/2020/08/27142222/Messi-no-Botafogo-600x400.jpg" alt="">` 
        break;

        case "PAL":
        conteudo = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png" alt="">` 
        break;

        case "COR":
        conteudo = `<img src="https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-0.png" alt="">` 
        break;

        case "SAN":
        conteudo = `<img src="https://bolavip.com/__export/1609945825475/sites/bolavip/img/2021/01/06/neymar-santos_crop1609945504128.jpg_1159711837.jpg" alt="">` 
        break;

        case "SAO":
        conteudo = `<img src="https://s2.glbimg.com/tA3TPdadwceekcZfOWPRvQzE_uE=/0x344:1196x1364/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/D/a/XlsDxnSq6CQ49TFaJXmg/49525829133-21d9b93476-o.jpg" alt="">` 
        break;

        default:
        conteudo = `<img src="https://cdn.icon-icons.com/icons2/1239/PNG/512/shield_83973.png" alt="">`
        break;
    }

    imagem.innerHTML = conteudo;


}


carregaEstados();
buscarTimes()