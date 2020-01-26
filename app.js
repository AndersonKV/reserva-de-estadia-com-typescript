"use strict";
//var vaga:Array<string> = [];
Object.defineProperty(exports, "__esModule", { value: true });
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
//data completa
var date = new Date();
//mes
var month = date.getMonth();
//ano
var dateFullYear = date.getFullYear();
//dias
var days = daysInMonth(month, dateFullYear);
// console.log(date)
// console.log(days)
// console.log(month)
// console.log(dateFullYear)
var ExactMonth;
(function (ExactMonth) {
    ExactMonth[ExactMonth["Janeiro"] = 0] = "Janeiro";
    ExactMonth[ExactMonth["Fevereiro"] = 1] = "Fevereiro";
    ExactMonth[ExactMonth["Mar\u00E7o"] = 2] = "Mar\u00E7o";
    ExactMonth[ExactMonth["Abril"] = 3] = "Abril";
    ExactMonth[ExactMonth["Maio"] = 4] = "Maio";
    ExactMonth[ExactMonth["Junho"] = 5] = "Junho";
    ExactMonth[ExactMonth["Julho"] = 6] = "Julho";
    ExactMonth[ExactMonth["Agosto"] = 7] = "Agosto";
    ExactMonth[ExactMonth["Setembro"] = 8] = "Setembro";
    ExactMonth[ExactMonth["Outubro"] = 9] = "Outubro";
    ExactMonth[ExactMonth["Novembro"] = 10] = "Novembro";
    ExactMonth[ExactMonth["Dezembro"] = 11] = "Dezembro";
    ExactMonth[ExactMonth["nada encontrado"] = 12] = "nada encontrado";
})(ExactMonth = exports.ExactMonth || (exports.ExactMonth = {}));
//console.log(`${ExactMonth[12]} ${dateFullYear} enum`);
//passa o mes e o ano
document.querySelector('h2').innerHTML = ExactMonth[month] + " / " + dateFullYear;
var Random = /** @class */ (function () {
    function Random(quantity, random) {
        this.ranQuantity = quantity;
        this.ranRandom = random;
    }
    Object.defineProperty(Random.prototype, "randomizer", {
        get: function () {
            return this.randomTd();
            //foi?
        },
        enumerable: true,
        configurable: true
    });
    Random.prototype.randomTd = function () {
        var tds = document.querySelectorAll('.days-week td');
        return Math.floor(Math.random() * tds.length);
    };
    return Random;
}());
(function templateDaysWeek() {
    var i;
    for (i = 1; i <= days; i++) {
        //cria elemento td e atrela o numero e id com base no param i
        var td = document.createElement("td");
        td.innerText = "" + i;
        td.id = "" + i;
        //anexa o td criado a classe days-week(tr)
        document.querySelector('.days-week').append(td);
    }
    var tds = document.querySelectorAll('.days-week td');
    //console.log(tds[0])
    //instancia o numero aleatorio da classe random
    var random = new Random(10, 10);
    for (i = 0; i < 10; i++) {
        if (random.randomizer === random.randomizer) {
            //não faça nada
        }
        else {
            tds[random.randomizer].classList.add("vacant");
        }
    }
    for (var _i = 0, _a = tds; _i < _a.length; _i++) {
        var td = _a[_i];
        td.onclick = enviar;
    }
    //console.log(document.querySelectorAll('.occupied'))
})();
if (localStorage.getItem('reserva')) {
    var list_occupied = JSON.parse(localStorage.getItem('reserva') || '[]');
    var listActives = document.querySelectorAll('.active');
    list_occupied.filter(checkAdult);
    //atrela a function enviar
    for (var _i = 0, _a = listActives; _i < _a.length; _i++) {
        var td = _a[_i];
        td.onclick = enviar;
    }
}
function checkAdult(list_occupied) {
    var n = (list_occupied.dia - 1);
    var listTd = document.querySelectorAll('td');
    listTd[n].classList.add('active');
}
function enviar(event) {
    var tds = document.querySelectorAll('.vacant');
    var td;
    //se a classe existir, exibe o alert, senão, adiciona a vaga etc..
    if (event.target.classList.value.match(/active/)) {
        alert('vaga ja reseervada');
    }
    else {
        for (var _i = 0, _a = tds; _i < _a.length; _i++) {
            td = _a[_i];
            //verifica qual dos tds bate com o id e adiciona e remove a classe
            if (td.id === event.target.id) {
                td.classList.add('active');
                td.classList.remove('vacant');
                //localStorage.removeItem('showList');
                var reserva = [];
                var reservar = {
                    dia: event.target.id,
                };
                reserva.push(reservar);
                reserva = reserva.concat(JSON.parse(localStorage.getItem('reserva') || '[]'));
                //console.log(reserva);
                var lista = void 0;
                // for(lista of reserva) {
                //     console.log(lista.dia)
                // }
                localStorage.setItem("reserva", JSON.stringify(reserva));
            }
        }
    }
}
