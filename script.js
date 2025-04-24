function adicionarTarefa() {
    const input = document.getElementById('tarefaInput');
    const tarefa = input.value.trim();
    
    if (tarefa === '') {
      alert('Digite uma tarefa!');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = tarefa;
  
    li.addEventListener('click', () => {
      li.classList.toggle('concluida');
    });
  
    const btnRemover = document.createElement('button');
    btnRemover.textContent = '🗑️';
    btnRemover.onclick = () => li.remove();
  
    li.appendChild(btnRemover);
  
    document.getElementById('listaTarefas').appendChild(li);
  
    input.value = '';
    input.focus();
  }
  