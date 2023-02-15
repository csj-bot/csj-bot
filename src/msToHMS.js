module.exports = (ms) => {
    let seg = ms * 0.001
    let hr = parseInt(seg * 0.00027777777)
    seg = seg % 3600
    let min = parseInt(seg * 0.01666666666)
    seg = seg % 60

    let txt = 'faz '

    if (hr > 0)
        txt += `${Math.floor(hr)} horas, `

    if (min > 0)
        txt += `${Math.floor(min)} minutos e `

    txt += `${Math.floor(seg)} segundos`

    if (seg === 0)
        txt = ' agora'

    return txt
}