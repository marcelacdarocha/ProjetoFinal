document.getElementById('btn-entrar-login').addEventListener('click', entrar);
function entrar(){
    if(localStorage.getItem('usuario') == undefined) {
        alert("Algo deu errado, verificar conta cadastrada.");
        limpaCampos();
        return;
    }
    else{
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let analisarDados = usuarios.filter(exemplo => exemplo.email === document.getElementById('email-form').value && exemplo.senha === document.getElementById('senha-form').value);
        console.log(analisarDados);
        if(analisarDados.lenght > 0){
            let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('email').value);
            let identificacao = {
                usuario: analisarDados[0].email,
                posicao: posicao
            }
            sessionStorage.setItem("registro", JSON.stringify(identificacao));
            window.localStorage.href = 'pagina-home.html';
        }
        else{
            alert("Algo deu errado, verificar dados informados");
            limpaCampos();
        }

    }
}

function limpaCampos(){
    document.getElementById('email-form').value = '';
    document.getElementById('senha-form').value = '';
}