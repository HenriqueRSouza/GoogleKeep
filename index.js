var listElement = document.querySelector("#teste ul");
var inputElement = document.querySelector("#teste input");
var buttonElement = document.querySelector("#teste button");

var listas = JSON.parse(localStorage.getItem("lista_listas")) || [];

var doneElement = document.querySelector("#teste2 ul");

var feitos = [];

function renderListas(){
    listElement.innerHTML = "";
    
    for(lista of listas){

        var listaElement = document.createElement('li');
        var listaText = document.createTextNode(lista);

        var linkElement = document.createElement('a');
        var link2Element = document.createElement("a");

        linkElement.setAttribute('href', '#');
        link2Element.setAttribute("href", "#");

        var pos = listas.indexOf(lista);
        linkElement.setAttribute("onclick", "deleteLista("+ pos +")");

        var after = listas.indexOf(lista);
        link2Element.setAttribute("onclick","addFeitos ("+ after +")");


        var linkText = document.createTextNode("Excluir");
        var link2Text = document.createTextNode("Feito");

        linkElement.appendChild(linkText);
        link2Element.appendChild(link2Text);

        listaElement.appendChild(listaText);
        listaElement.appendChild(linkElement);
        listaElement.appendChild(link2Element);


        listElement.appendChild(listaElement);
        
    }
}
renderListas();

function renderFeitos(){
    doneElement.innerHTML = "";
    for(feito of feitos){
        var feitoElement = document.createElement('li');
        var feitoText = document.createTextNode(feito);

        var link3Element = document.createElement('a');
        

        link3Element.setAttribute('href', '#');
        

        var pei = feitos.indexOf(feito);
        link3Element.setAttribute("onclick", "deleteFeitos("+ pei +")");

        var link3Text = document.createTextNode("Excluir");
        

        link3Element.appendChild(link3Text);

        feitoElement.appendChild(feitoText);
        feitoElement.appendChild(link3Element);
        
        doneElement.appendChild(feitoElement);
    }
}
renderFeitos();

function addFeitos(after){
    var feitoText = after;

    feitos.push(feitoText);
    inputElement.value = "";
    renderFeitos();
    saveStorage();
    
}
function deleteFeitos(pei){
    feitos.splice(pei, 1);
    renderListas();
    saveStorage();

}


function addLista(){
    var listaText = inputElement.value;

    listas.push(listaText);
    inputElement.value = "";
    renderListas();
    saveStorage();
    
}
buttonElement.onclick = addLista;

function deleteFeitos(pos){
    listas.splice(pos, 1);
    renderListas();
    saveStorage();

}




function deleteLista(pos){
    listas.splice(pos, 1);
    renderListas();
    saveStorage();


}

function saveStorage(){
    localStorage.setItem("lista_listas", JSON.stringify(listas));

}


