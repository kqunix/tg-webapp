let selectedCategory = '';

function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('status').innerText = `Выбрана категория: ${category}`;
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (!selectedCategory || !message) {
        alert('Выберите категорию и напишите сообщение!');
        return;
    }

    fetch('https://твой-сервер-бота/send', {  // сюда ставим хостинг с Flask или FastAPI
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({category: selectedCategory, message})
    }).then(response => {
        if (response.ok) {
            document.getElementById('status').innerText = '✅ Сообщение отправлено';
        } else {
            document.getElementById('status').innerText = '❌ Ошибка отправки';
        }
    });
}
