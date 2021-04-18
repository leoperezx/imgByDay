// hora del sistema

const MESES = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

const monthByNumber = (mes) => { return MESES[mes] }

function saludo() {
    const fecha = new Date()
    const hora = fecha.getHours()
    const n_dia = fecha.getDay()
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const ano = fecha.getFullYear()

        console.log(n_dia)
    // Refactorizar esto en una funcion que reciba hora y devuelva los valores
    const estiloHora = {
        styleName: 'mañana',
        saludo: 'Buenos días'
    }
    if (hora < 13) { estiloHora.saludo = "Buenos días"; estiloHora.styleName = "mañana" }
    else if (hora < 19) { estiloHora.saludo = "Buenas tardes"; estiloHora.styleName = "tarde" }
    else if (hora < 24) { estiloHora.saludo = "Buenas noches"; estiloHora.styleName = "noche" }

    document.querySelector(".hello").innerHTML = estiloHora.saludo
    document.querySelector(".today").innerHTML = `Hoy es ${dia} de ${monthByNumber(mes)} de ${ano}`
    document.body.classList.add(estiloHora.styleName)
}



saludo()