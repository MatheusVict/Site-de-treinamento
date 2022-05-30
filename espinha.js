/*var a = 9.5;
var b =6;
var c = a+b;
alert('a soma entre ' + c/2);

var nome;
nome = prompt('digite seu nome');
alert('olá ' + nome);

var not1 = 9;
var not2 = 8;
var media = (not1 + not2)/2
if(media >=7){
    alert('aprovado')
}
else{
    alert('reprovado')
}
var sair = confirm('deseja sair?');
if(sair == 1){
    window.location = "https://www.google.com.br";
}
var x = 2;
var y = 10;
var tod = 'todos os pares: ';
while(x <= y){
    tod = tod + x + ', ';
    x = x + 2;
    
} 
alert(tod);*/

/*quando carregar e reorganizar a página*/ 
function carregar(){
    document.getElementById('ti').innerHTML += 'carregar <br>';
}
function reor(){
    document.getElementById('ti').inerHTML += 'reorganizei';
}

/*quando clicar em alguma imagem ou algo */
function aper(){
    document.getElementById("fonte1").src="yasu.jpg";
}
function doiscli(){
    document.getElementById('fonte1').src='miruko.jpg';
}

/*formulario */
function submeti(){
    document.getElementById('formulario').innerHTML += 'subimetido<br>';
    return false;
}
function resetado(){
    document.getElementById('formulario').innerHTML += 'resetado<br>';
    
}
function saiu(){
    document.getElementById('formulario').innerHTML += 'sai<br>';
}
function mudou(){
    document.getElementById('formulario').innerHTML += 'mudou tudo<br>';
}
function entrei(){
    document.getElementById('formulario').innerHTML += 'entrou<br>';
}
function selecionado(){
    document.getElementById('formulario').innerHTML += 'selecionei<br>';
}
function tebaixo(){
    document.getElementById('formulario').innerHTML += 'apertado<br>';
}
function tecima(){
    document.getElementById('formulario').innerHTML += 'segurado<br>';
}

/*mouse */
function sobre(){
    document.getElementById('cor').style.backgroundColor = "red";
    document.getElementById('cor').innerHTML += 'o mouse sobre a div fica:vermelho<br>';
}
function apertado(){
    document.getElementById('cor').style.backgroundColor = 'blue';
    document.getElementById('cor').innerHTML += 'clicando fica: azul <br>';
}
function movendo(){
    document.getElementById('cor').style.backgroundColor = 'green';
    document.getElementById('cor').innerHTML += 'movendo o mouse fica: verde <br>';
}
function saindo(){
    document.getElementById('cor').style.backgroundColor = 'yellow';
    document.getElementById('cor').innerHTML += 'saindo ele fica: amarela <br>';
}
function pracim(){
    document.getElementById('id').style.backgroundColor = 'pink';
    document.getElementById('cor').innerHTML += 'soltando fica: rosa <br>';
}

/* confirmação de formulario */
function confirmador(){
    document.getElementById("senha").style.borderColor  = 'white';
    document.getElementById("senha").style.backgroundColor = 'white';
    if(document.getElementById("senha").value == " "){
        alert('digite a senha');
        document.getElementById("senha").style.borderColor = 'red';
        document.getElementById("senha").style.backgroundColor = 'red';
        document.getElementById("senha").focus();
        return false;
    }
}
function maiuscula(){
    var mai = document.getElementById('letrama').value;
    mai = mai.toUpperCase();
    document.getElementById('letrama').value = mai;
}
/* sweetalert*/
function but(){
    Swal.fire({
        title: 'Você deseja salvar as mudanças?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        denyButtonText: `Não salvar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Salvo!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Formulario não foi salvo', '', 'info')
        }
      })}
function apagar(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Excluido',
        showConfirmButton: false,
        timer: 1500
      })
}