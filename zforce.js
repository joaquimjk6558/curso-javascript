// Aguarda DOM carregado
document.addEventListener('DOMContentLoaded', () => {
    // -------- Navegação Suave --------
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
        }
      });
    });
  
    // -------- Chatbot Zinho --------
    const zinhoBotao = document.getElementById('zinho-botao');
    const zinhoChat = document.getElementById('zinho-chat');
    const mensagensZinho = document.getElementById('zinho-mensagens');
    const botoesPerguntas = document.querySelectorAll('.zinho-perguntas button');
  
    // abre/fecha chat
    zinhoBotao.addEventListener('click', () => {
      const style = getComputedStyle(zinhoChat).display;
      zinhoChat.style.display = (style === 'none') ? 'block' : 'none';
    });
  
    // define respostas por tópico
    const respostas = {
      faixa:     "As faixas indicam o progresso do aluno no Jiu-Jitsu, do iniciante ao mestre.",
      kimono:    "Recomendamos kimonos de algodão, próprios para Jiu-Jitsu, nas cores branca, azul ou preta.",
      graduacao: "A graduação segue critérios técnicos, tempo de treino e desempenho do aluno.",
      objetivo:  "O objetivo é evolução pessoal, disciplina, defesa pessoal e superação constante."
    };
  
    // listener dos botões de pergunta
    botoesPerguntas.forEach(btn => {
      btn.addEventListener('click', () => {
        const topico = btn.getAttribute('data-topico');
        if (topico === 'treinamento') {
          mostrarTreinamento(); // caso seja o botão de treinos
        } else {
          const resposta = respostas[topico] || "Desculpe, não entendi sua pergunta.";
          const novaMsg = document.createElement('div');
          novaMsg.className = 'msg-zinho';
          novaMsg.textContent = resposta;
          mensagensZinho.appendChild(novaMsg);
          mensagensZinho.scrollTop = mensagensZinho.scrollHeight;
        }
      });
    });
  
    // -------- Slideshow --------
    let slideIndex = 0;
    const slides = document.getElementsByClassName('mySlides');
    (function showSlides() {
      Array.from(slides).forEach(s => s.style.display = 'none');
      slideIndex = (slideIndex % slides.length) + 1;
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000);
    })();
  
    // -------- Carrinho --------
    const listaCarrinho    = document.getElementById('itens-carrinho');
    const valorTotalEl     = document.getElementById('valor-total');
    let totalCarrinho      = 0;
    const produtos         = {
      "Faixa Azul":        150.00,
      "Kimono Tradicional":299.90,
      "Rash Guard":        149.90,
      "Protetor Bucal":     39.90
    };
  
    window.adicionarAoCarrinho = function(produto) {
      const preco = produtos[produto] || 0;
      const li = document.createElement('li');
      li.textContent = `${produto} - R$ ${preco.toFixed(2)}`;
      listaCarrinho.appendChild(li);
      totalCarrinho += preco;
      valorTotalEl.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    };
  
    window.limparCarrinho = function() {
      listaCarrinho.innerHTML = '';
      totalCarrinho = 0;
      valorTotalEl.textContent = `Total: R$ 0,00`;
    };
  
    // -------- Agendamento de Aula Experimental --------
    document.getElementById('form-aula').addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('form-aula').reset();
      const msg = document.getElementById('mensagem-confirmacao');
      msg.style.display = 'block';
      setTimeout(() => msg.style.display = 'none', 5000);
    });
  });
  
  // -------- Função de Treinamento (scroll até a seção) --------
  function mostrarTreinamento() {
    const sec = document.getElementById('treinamentos');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }