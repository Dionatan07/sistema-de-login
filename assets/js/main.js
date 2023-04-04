//Capturar evento de submit do formulario
const form = document.querySelector('#formulario');


//Não deixar o formulário ser enviado
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputLogin = event.target.querySelector('#login');
    const inputPassword = event.target.querySelector('#password');

    //Capturar os valores e converter para número
    const login = inputLogin.value;
    const password = inputPassword.value;

    //Verificar se os valores não estão vazios
    if (login !== 'dionatan' || password !== '123456') {
        setResult('Login e/ou password inválido',  false);
    }
    else {
        setResult('Acesso liberado!', true);
    }

 
    
});

    //Função que cria o parágrafo
    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    //Função que mostra o resultado-
    function setResult(msg, isValid ) {
        const result = document.querySelector('.result');
        result.innerHTML = '';
        const p = criaP();
    

    //Validação para mostrar div verde caso seja verdadeiro ou vermelho se for falso
    if (!isValid){
        p.classList.add('p-result-bad') 
    }
    else{
        p.classList.add('p-result-ok');
    }

    //Inserir a mensagem dentro do HTML
    p.innerHTML = msg;
    //Adicionar o parágrafo na DIV
    result.appendChild(p)
    }
