let mode = 1
// 1 = login
// 2 = cadastro

document.getElementById("toggle").onclick = () => {
    if (mode == 2){
        mode = 1;
    } else if (mode == 1){
        mode = 2;
    }
    if (mode == 2){
    document.getElementById("Titulo").innerText = "Cadastro com Bootstrap";
    }
    if (mode == 1){
    document.getElementById("Titulo").innerText = "Login com Bootstrap";
    }
    console.log(mode);
}

document.getElementById("Login001").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").innerText;
    let senha = document.getElementById("senha").innerText;

    if (!email.includes("@")) {
        alert("E-mail Inválido")

    }
    if (senha.lenght < 8){
        alert("Senha muito curta!")
    }
    
})