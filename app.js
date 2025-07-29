// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre ==''){
        alert("Porfavor ingrese un nombre valido");
    }else{
    amigos.push(nombre);
    limpiarEspacio('amigo');
    actualizarLista();
    }
};
function limpiarEspacio(id){
    document.getElementById(id).value = ''
};
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let listaHTML = '';
    amigos.forEach(item => {
        listaHTML += `<li>${item}</li>`; 
    });

    lista.innerHTML = listaHTML;
};
function sortearAmigo(){
    if (amigos.length ==0){
        alert("Por favor primero agrege amigos para elegir a su amigo secreto")
    }else{
        let numero = Math.floor(Math.random()*amigos.length)
        limpiarEspacio('listaAmigos')
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = amigos[numero]
    }
}