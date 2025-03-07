function sendMessage(category) {
    const telegramId = document.getElementById('telegramId').value;
    const message = document.getElementById('message').value;

    const text = `Категория: ${category}\nID: ${telegramId}\nСообщение: ${message}`;

    fetch(`https://api.telegram.org/bot7667866512:AAGSFQ7_hNFs6IVqdfaAu48T86tHT91mYuA/sendMessage?chat_id=-4748970144&text=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Сообщение отправлено!');
            } else {
                alert('Ошибка отправки.');
            }
        });
}

function showRules() {
    alert('Здесь можно показать текст с правилами');
}
