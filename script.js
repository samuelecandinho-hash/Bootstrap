let mode = 1
// 1 = login
// 2 = cadastro
cancel = 0;

document.getElementById("toggle").onclick = () => {
    if (mode == 2){
        mode = 1;
    } else if (mode == 1){
        mode = 2;
    }
    if (mode == 2){
    document.getElementById("Titulo").innerText = "Cadastro";
    }
    if (mode == 1){
    document.getElementById("Titulo").innerText = "Login";
    }
    console.log(mode);
    cancel = 0;
}

document.getElementById("Login001").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email.includes("@")){
        alert("E-mail Inválido")
        cancel = 1;
    }

    if (senha.length < 8){
        alert("Senha muito curta!")
        cancel = 1;
    }
    
    if (mode == 2){
        if (cancel == 0){
        localStorage.setItem(email,senha);
        alert("cadastrado com sucesso");
        }
    }
    else{
        let checker = localStorage.getItem(email);
        if (checker === senha) {
            mensagem.innerHTML = "<div> <p> Login com sucesso </p> </div>"
        }
        else{
             mensagem.innerHTML = "<div> <p> Dados incorretos </p> </div>"
        }
    }

})