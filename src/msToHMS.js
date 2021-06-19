module.exports = (ms) => {
    let seg = ms / 1000
    let hr = parseInt(seg / 3600)
    seg = seg % 3600
    let min = parseInt(seg / 60)
    seg = seg % 60

    let txt = 'faz '
    if (hr > 0) {
        txt += Math.floor(hr) + ' horas, '
    }

    if (min > 0) {
        txt += Math.floor(min) + ' minutos e '
    }
    txt += Math.floor(seg) + ' segundos'

    if (seg == 0) {
        txt = ' agora'
    }
    return txt
}