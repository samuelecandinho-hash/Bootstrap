document.getElementById("Login001").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email.includes("@")) {
        alert("E-mail Inválido")
        console.log("GigaPenis")
    }
    if (senha.lenght < 8){
        alert("GigaPiroca")
    }
    
})