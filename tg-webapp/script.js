// Базовая функция отправки данных в бот
function sendMessageToBot(action) {
    const userId = document.getElementById("userId").value;
    const message = document.getElementById("message").value;

    if (!userId || !message) {
        alert("Заполните все поля!");
        return;
    }

    const payload = {
        action: action,
        userId: userId,
        message: message
    };

    fetch('https://api.telegram.org/bot7667866512:AAGSFQ7_hNFs6IVqdfaAu48T86tHT91mYuA/sendMessage', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: 7470311335,  // твой админский ID
            text: `📩 Новое сообщение с Web App\n\nДействие: ${action}\nID пользователя: ${userId}\nСообщение: ${message}`
        })
    }).then(response => response.json())
      .then(data => {
          if (data.ok) {
              document.getElementById("status").innerText = "✅ Сообщение отправлено!";
          } else {
              document.getElementById("status").innerText = "❌ Ошибка при отправке.";
          }
      }).catch(err => {
          document.getElementById("status").innerText = "⚠️ Сеть недоступна.";
      });
}
