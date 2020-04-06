var listElement = document.querySelector("#T1 ul");
var doneElement = document.querySelector("#T2 ul");

var inputElement = document.querySelector("#T1 input");
var buttonElement = document.querySelector("#T1 button");
var textElement = document.querySelector("#T1 textarea");

var textos = [];
var listas = JSON.parse(localStorage.getItem("lista_listas")) || [];


function renderLista(){
    listElement.innerHTML = "";

    for(lista of listas){
        var listaElement = document.createElement('li');
        var listaText = document.createTextNode(lista);

        var linkElement = document.createElement("a");
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode("Inspecionar");

        linkElement.appendChild(linkText);

        listaElement.appendChild(listaText);
        listaElement.appendChild(linkElement);
        

        listElement.appendChild(listaElement);

        var pos = listas.indexOf(lista);
        linkElement.setAttribute("onclick", "inspecionar("+ pos +")");


    }
}
renderLista();

function addLista(){
    var listaText = inputElement.value;
    var textoText = textElement.value;

    listas.push(listaText);

    renderLista();
    saveStorage();
}
buttonElement.onclick = addLista;

function inspecionar(pos){
    window.location.href="../Notas/index.html"
    renderLista();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem("lista_listas", JSON.stringify(listas));
}


