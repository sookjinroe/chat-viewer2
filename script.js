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
          if (!msg.message || !msg.message.trim()) return; // ← 이 줄 추가!
        
          const div = document.createElement('div');
          div.classList.add('message');
          div.classList.add(msg.participant === 'User' ? 'user' : 'ai');
        
          const inner = document.createElement('div');
          inner.classList.add('content');
          inner.innerHTML = marked.parse(msg.message);
        
          div.appendChild(inner);
          container.appendChild(div);
        });
      }
    });
  });
