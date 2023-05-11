const formtaDigito = (digito) => `0${digito}`.slice(-2)

function atualizar(tempo) {
    const segundos = document.getElementById('seconds')
    const minutos = document.getElementById('minutes')
    const horas = document.getElementById('hours')
    const dias = document.getElementById('day')

    const day = Math.floor(tempo / (60 * 60 * 24))
    const hours = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((tempo % (60 * 60)) / 60)
    const seconds = tempo % 60

    dias.innerHTML = formtaDigito(day)
    horas.innerHTML = formtaDigito(hours)
    minutos.innerHTML = formtaDigito(minutes)
    segundos.innerHTML = formtaDigito(seconds)
}

const paraContagem = (id) => clearInterval(id)

const contagemRegressiva = (tempo) => {

    const contar = () => {
        if (tempo === 0) {
            paraContagem(id)
        }
        atualizar(tempo)
        tempo--

    }
    const id = setInterval(contar, 1000)
}

const tempoRestante = () => {
    const dataEvento = new Date('2023-05-18 20:00:00')
    const dataHoje = Date.now()
    return Math.floor((dataEvento - dataHoje) / 1000)
}

contagemRegressiva(tempoRestante())