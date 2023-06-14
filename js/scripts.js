//Seleção de elementos
const listaForm = document.querySelector("#lista-form");
const listaInput = document.querySelector("#lista-input");
const listaDeTarefas = document.querySelector("#lista_de_tarefas");
const editInput = document.querySelector("#edit-input");
const editForm = document.querySelector("#edit-form");
const cancelarEditBtn = document.querySelector("#cancelar-edit-btn");

let oldInputValue;

//Funções
const salvarTarefas = (text) => {
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefas");

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

const toggleForms = () => {
    editForm.classList.toggle("esconder");
    listaForm.classList.toggle("esconder");
    listaDeTarefas.classList.toggle("esconder");
};

const updateTarefa = (text) => {
    const tarefas = document.querySelectorAll(".tarefas");

    tarefas.forEach((tarefa) => {
        const tarefaTitulo = tarefa.querySelector("h3");
        if (tarefaTitulo.innerText === oldInputValue) {
            tarefaTitulo.innerText = text;
        }
    });
};

//Eventos
listaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = listaInput.value;
    if (inputValue) {
        salvarTarefas(inputValue);
        listaInput.value = "";
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest(".tarefas");

    if (targetEl.classList.contains("terminar-tarefa")) {
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remover-tarefa")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("editar-tarefa")) {
        toggleForms();
        const tarefaTitulo = parentEl.querySelector("h3").innerText;
        editInput.value = tarefaTitulo;
        oldInputValue = tarefaTitulo;
    }
});

cancelarEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;
    if (editInputValue) {
        updateTarefa(editInputValue);
        toggleForms();
    }
});
