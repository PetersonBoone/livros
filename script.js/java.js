document.getElementById('linkInscricao').addEventListener('click', function (event) {
    event.preventDefault();
  
    // Evita múltiplas notificações
    if (document.getElementById('notificacaoForm')) return;
  
    // Criar o container da notificação
    const container = document.createElement('div');
    container.id = 'notificacaoForm';
  
    // Conteúdo HTML do formulário
    container.innerHTML = `
      <strong>Inscreva-se</strong>
      <input type="text" id="nomeInput" placeholder="Seu nome">
      <input type="email" id="emailInput" placeholder="Seu email">
      <button id="btnEnviar">Enviar</button>
      <button id="btnFechar">Cancelar</button>
    `;
  
    document.body.appendChild(container);
  
    // Eventos do botão
    document.getElementById('btnEnviar').addEventListener('click', function () {
      const nome = document.getElementById('nomeInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
  
      if (!nome || !email) {
        alert('Por favor, preencha nome e email.');
        return;
      }
  
      // Aqui você poderia enviar via fetch para o backend
      console.log('Enviando inscrição:', nome, email);
  
      alert('Inscrição realizada com sucesso!');
      container.remove();
    });
  
    document.getElementById('btnFechar').addEventListener('click', function () {
      container.remove();
    });
  });