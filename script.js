function atualizarRelogio() {
    const agora = new Date();

    const h = agora.getHours();
    const m = agora.getMinutes();
    const s = agora.getSeconds();

    const grausHora = (h % 12) * 30 + m * 0.5;
    const grausMin = m * 6;
    const grausSeg = s * 6;

    document.getElementById("hourHand").style.transform = `rotate(${grausHora}deg)`;
    document.getElementById("minuteHand").style.transform = `rotate(${grausMin}deg)`;
    document.getElementById("secondHand").style.transform = `rotate(${grausSeg}deg)`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();