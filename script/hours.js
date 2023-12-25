let currentTimezone = "America/Sao_Paulo";

function changeTimezone() {
    const timeLabel = document.querySelector("#timezoneLabel");
    const timezones = [
        { label: "Horário do Brasil", value: "America/Sao_Paulo" },
        { label: "Horário da Espanha", value: "Europe/Madrid" },
        { label: "Horário do USA", value: "America/New_York" },
        { label: "Horário da Alemanha", value: "Europe/Berlin" },
        { label: "Horário do Japão", value: "Asia/Tokyo" },
        { label: "Horário do Canadá", value: "America/Toronto" },
        { label: "Horário do Reino Unido", value: "Europe/London" },
        { label: "Horário da Índia", value: "Asia/Kolkata" },
        { label: "Horário da Austrália", value: "Australia/Sydney" },
        { label: "Horário da China", value: "Asia/Shanghai" }
    ];

    const currentIndex = timezones.findIndex(tz => tz.value === currentTimezone);
    const newIndex = (currentIndex + 1) % timezones.length;
    currentTimezone = timezones[newIndex].value;
    timeLabel.textContent = timezones[newIndex].label;
    updateClock();
}

function updateClock() {
    const tempo = document.querySelector("#tempo");
    let date = new Date();
    let opcoes = { timeZone: currentTimezone, hour12: false };
    let horaAtualizada = date.toLocaleTimeString("pt-br", opcoes);

    tempo.textContent = horaAtualizada;
}

setInterval(updateClock, 1000);
updateClock();
