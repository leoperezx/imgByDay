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

function imagenDia(numeroDelDia){
    // Crear una funcion  que reciba el numeroDia y ejecute los cambios en la imagen
    // Agregar una clase en la imagen para cada dia que debe mostrar
    const image = document.querySelector(".ventana img")

    switch (numeroDelDia) {
        case 0: image.style.top = '-270px'; break;
        case 1: image.style.top = '-10px'; break;
        case 2: image.style.top = '-54px'; break;
        case 3: image.style.top = '-96px'; break;
        case 4: image.style.top = '-140px'; break;
        case 5: image.style.top = '-184px'; break;
        case 6: image.style.top = '-228px'; break;
        
    }

}

function saludo() {
    const fecha = new Date()
    const hora = fecha.getHours()
    const numeroDia = fecha.getDay()
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const ano = fecha.getFullYear()

    imagenDia(numeroDia)

    // Refactorizar esto en una funcion que reciba hora y devuelva los valores
    const estiloHora = { styleName: 'mañana', saludo: 'Buenos días' }
    if (hora < 13) { estiloHora.saludo = "Buenos días"; estiloHora.styleName = "mañana" }
    else if (hora < 19) { estiloHora.saludo = "Buenas tardes"; estiloHora.styleName = "tarde" }
    else if (hora < 24) { estiloHora.saludo = "Buenas noches"; estiloHora.styleName = "noche" }

    document.querySelector(".hello").innerHTML = estiloHora.saludo
    document.querySelector(".today").innerHTML = `Hoy es ${dia} de ${monthByNumber(mes)} de ${ano}`
    document.body.classList.add(estiloHora.styleName)

}



saludo()
