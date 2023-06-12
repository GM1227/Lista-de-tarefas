//Seleção de elementos
const listaForm = document.querySelector("#lista-form")
const listaInput = document.querySelector("#lista-input")
const listaDeTarefas = document.querySelector("#lista_de_tarefas")
const editInput = document.querySelector("#edit-input")
const editForm = document.querySelector("#edit-form")
const cancelarEditBtn = document.querySelector("#cancelar-edit-btn")



//Funçôes
const salvarTarefas = (text) => {
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefas"); // Adiciona a classe "tarefas"
  
    const tarefaTitulo = document.createElement("h3");
    tarefaTitulo.innerText = text;
    tarefa.appendChild(tarefaTitulo);
  
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("terminar-tarefa");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    tarefa.appendChild(doneBtn);
  
    const editBtn = document.createElement("button");
    editBtn.classList.add("editar-tarefa");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    tarefa.appendChild(editBtn);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remover-tarefa");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    tarefa.appendChild(deleteBtn);
  
    listaDeTarefas.appendChild(tarefa);
  };




//Eventos
listaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = listaInput.value
    if (inputValue) {
        salvarTarefas(inputValue)
    }
});