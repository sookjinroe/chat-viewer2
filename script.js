fetch('gpt-chat.csv')
  .then(response => response.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const messages = results.data;
        const container = document.getElementById('chat-container');

        messages.forEach(msg => {
          const div = document.createElement('div');
          div.classList.add('message');
          div.classList.add(msg.participant === 'User' ? 'user' : 'ai');
          div.innerText = msg.message;
          container.appendChild(div);
        });
      }
    });
  });
