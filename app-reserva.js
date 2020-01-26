const container = document.querySelector('.container');

if(localStorage.getItem('reserva')) {
    let reserva = JSON.parse(localStorage.getItem('reserva')); 
 
    let novaLista = [];
    let listaVelha;

    for(listaVelha of reserva) {
        novaLista.push(listaVelha.dia)
    }

    var h5 = document.createElement("h5"); 
    var texto = document.createTextNode(`você reservou sua estadia nos dias ${novaLista}`); 
    h5.appendChild(texto); //adiciona o nó de texto à nova div criada 
 
	container.append(h5)

}