var senhaVF;
var emailVF;
var nomeVF;
var sobrenomeVF;

function validarSenha(senha) 
{
 if (senha.value.match(/[a-zA-Z0-9]{6,10}/) && (senha.value.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/)))
  {
    senhaVF = true;
  }
  else
  {
    alert('Senha Inválida!');
    senhaVF = false;
  }
}
function validarEmail(email)
{
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
  {
    emailVF = true;
  }
  else
  {
    alert('Email Inválido!');
    emailVF = false;
  }

}

function validarNome(nome)
{
  if (nome.value.match(/^[A-Za-z]+$/) && (nome.value.length > 1))
  {
    nomeVF = true;
  }
  else
  {
    alert('Nome Inválido!');
    nomeVF = false;
  }
}

function validarSobrenome(sobrenome)
{
  if (sobrenome.value.match(/^[A-Za-z]+$/) && (sobrenome.value.length > 1))
  {
     sobrenomeVF = true;
  }
  else
  {
    alert('Sobrenome Inválido!');
    sobrenomeVF = false;
  }
}

function validaCadastro(nome, sobrenome, email, senha)
{
  validarNome(nome);
  validarSobrenome(sobrenome);
  validarEmail(email);
  validarSenha(senha);

  if((senhaVF == true) && (emailVF == true) && (nomeVF == true) && (sobrenomeVF == true))
  {
    alert('Cadastro Realizado!');
    nome.value = "";
    sobrenome.value = "";
    email.value = "";
    senha.value = "";
    return true;
  }
}

function validaLog(email, senha)
{
  validarEmail(email);
  validarSenha(senha);

  if((senhaVF == true) && (emailVF == true))
  {
    alert('Cadastro Realizado!');
    email.value = "";
    senha.value = "";
    return true;
  }
}