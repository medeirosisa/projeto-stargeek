const cards = document.querySelector(".cards");
const cards2 = document.getElementById("cards2")
const cards3 = document.getElementById("cards3")

var emaillogado;
femaillogado();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

  
    dados.forEach((elemento, indice) =>{
        
            if (elemento.categoria == "f" && elemento.email == emaillogado) {
                let divcard = document.createElement("div");
                divcard.setAttribute("class", "card");
                divcard.innerHTML = `<img src="img/${elemento.foto}">
            <div class="cardbtn">
            <a onclick="Alterar(${indice})">Alterar<a/>
             / <a onclick="Excluir(${indice})">Excluir<a/>
            </div>
            `
                cards.appendChild(divcard);}
        }
    );
        
    

        dados.forEach((elemento, indice) => {
           
            if (elemento.categoria == "s" && elemento.email == emaillogado) {
                let divcard2 = document.createElement("div");
                divcard2.setAttribute("class", "card");
                divcard2.innerHTML = `<img src="img/${elemento.foto}">
            <div class="cardbtn">
            <a onclick="Alterar(${indice})">Alterar<a/>
             / <a onclick="Excluir(${indice})">Excluir<a/>
            </div>
            `
                cards2.appendChild(divcard2);
            }
 });
        
            dados.forEach((elemento, indice) => {
            
                if (elemento.categoria == "a" && elemento.email == emaillogado) {
                    temitem = "f";
                    let divcard3 = document.createElement("div");
                    divcard3.setAttribute("class", "card");
                    divcard3.innerHTML = `<img src="img/${elemento.foto}">
                <div class="cardbtn">
                <a onclick="Alterar(${indice})">Alterar<a/>
                 / <a onclick="Excluir(${indice})">Excluir<a/>
                </div>
                `
                    cards3.appendChild(divcard3);

                }
                });

              

    
}

function Excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function Alterar(indice){
    var url ="cadastrodoitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

carregarCatalogo();

function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
      if (dados == null){
        window.location.assign("login.html");
      } else{
        emaillogado = dados[0].email;
      }}