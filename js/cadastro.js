
document.getElementById('btn-cadastrar').addEventListener('click', entrar);

function entrar() {
    let useEmail = document.querySelector('#input-email').value;
    let useSenha = document.querySelector('#input-senha').value;
    let useConfirma = document.querySelector('#input-confirma-senha').value;
    let emailValido = validaEmail(useEmail);
    if (useEmail.length < 8) {
        alert('O Email deve ter no minimo 8 caracterers.');
        return;
    }
    else if (!emailValido) {
        alert('digite um email válido.');
        return;
    }
    else if (useSenha !== useConfirma) {
        alert("As senhas não conferem.");
        return;
    } else if (useSenha.length < 6) {
        alert('A senha deve ter no minimo 6 caracteres.');
        return;
    }
    else if (useEmail === '' || useSenha === '' || useConfirma === '') {
        alert('Preencha todos os campos.');
        return;
    }
    criarUsuario();
}
function criarUsuario() {
    if (localStorage.getItem('usuarios') == undefined) {
        let usuarios = [];
        let novoUsuario = {
            email: document.getElementById('input-email').value,
            senha: document.getElementById('input-senha').value,
            recados: []
        }
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Usuário cadastrado.");
        let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('input-email').value);
        let identificacao = {
            usuario: document.getElementById('input-email').value,
            posicao: posicao
        } 
        sessionStorage.setItem("registro", JSON.stringify(identificacao));
        window.location.href = 'pagina-home.html';
    }
    else {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let verificaEmail = usuarios.filter(exemplo => exemplo.email === document.getElementById('input-email').value);
        console.log(verificaEmail);
        if (verificaEmail.length > 0) {
            alert("OPS! Você já é cadastrado.");
            return;
        }
        let novoUsuario =
        {
            email: document.getElementById('input-email').value,
            senha: document.getElementById('input-senha').value,
            recados: []
        }
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert("TOPEZERA! tu foi cadastrado com sucesso.");
        let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('input-email').value);
        let identificacao = {
            usuario: document.getElementById('input-email').value,
            posicao: posicao
        }
        sessionStorage.setItem("registro", JSON.stringify(identificacao));
        window.location.href = 'pagina-home.html';
    }
}
function validaEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}