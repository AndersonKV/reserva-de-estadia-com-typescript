//var vaga:Array<string> = [];

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}


//data completa
var date = new Date();
//mes
var month = date.getMonth();
//ano
var dateFullYear = date.getFullYear();
//dias
const days = daysInMonth(month,dateFullYear);

// console.log(date)
// console.log(days)
// console.log(month)
// console.log(dateFullYear)


export enum ExactMonth {
    Janeiro = 0,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro,
    'nada encontrado'
}

//console.log(`${ExactMonth[12]} ${dateFullYear} enum`);

//passa o mes e o ano
document.querySelector('h2')!.innerHTML = `${ExactMonth[month]} / ${dateFullYear}`;

class Random {
    ranQuantity: number;
    ranRandom: number;

    constructor(quantity:number, random:number) {
        this.ranQuantity = quantity;
        this.ranRandom = random;
    }    

    get randomizer() {
        return this.randomTd()
        //foi?
    }
    
    randomTd() {
        let tds = document.querySelectorAll('.days-week td');
        return Math.floor(Math.random()*tds.length)
    }
}

(function templateDaysWeek() {
    let i:number;
 
    for(i = 1; i <= days; i++) {
        //cria elemento td e atrela o numero e id com base no param i
        let td = document.createElement("td") as HTMLElement;
        td.innerText = `${i}`;
        td.id = `${i}`;
        //anexa o td criado a classe days-week(tr)
        document.querySelector('.days-week')!.append(td)

    }

    const tds = document.querySelectorAll('.days-week td');
    //console.log(tds[0])
    //instancia o numero aleatorio da classe random
    const random = new Random(10, 10);

    for(i = 0; i < 10; i++) {
        if(random.randomizer === random.randomizer) {
            //não faça nada
        } else {
            tds[random.randomizer].classList.add("vacant");

        }

    }
    for (const td of tds as any) {
        td.onclick = enviar;
    }  
 

    //console.log(document.querySelectorAll('.occupied'))

})();

if(localStorage.getItem('reserva')) {
    let list_occupied = JSON.parse(localStorage.getItem('reserva')||'[]'); 
    const listActives : NodeListOf<Element> = document.querySelectorAll('.active') 

    list_occupied.filter(checkAdult);
    //atrela a function enviar
    for (const td of listActives as any) {
        td.onclick = enviar;
    }  
}
 
function checkAdult(list_occupied: any) {
    let n = (list_occupied.dia-1);
    let listTd : NodeListOf<Element> = document.querySelectorAll('td');
    listTd[n].classList.add('active');

}


function enviar(event:any) {
    let tds : NodeListOf<Element> = document.querySelectorAll('.vacant');

    let td;
    //se a classe existir, exibe o alert, senão, adiciona a vaga etc..
    if(event.target.classList.value.match(/active/)) {
        alert('vaga ja reseervada');
    } else {
        for(td of tds as any) {
            //verifica qual dos tds bate com o id e adiciona e remove a classe
            if(td.id === event.target.id) {
                td.classList.add('active');
                td.classList.remove('vacant');
                
                //localStorage.removeItem('showList');

                var reserva = [];

                var reservar = {
                    dia: event.target.id,
                };
                reserva.push(reservar);
                reserva = reserva.concat(JSON.parse(localStorage.getItem('reserva')||'[]'));
                //console.log(reserva);
                let lista;

                // for(lista of reserva) {
                //     console.log(lista.dia)
                // }

                localStorage.setItem("reserva", JSON.stringify(reserva));      
            }
        }
    
    }
  
 
}

 