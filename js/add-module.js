function renderModules(modules) {
  let html = "";
  modules.forEach((module, index) => {
    html += `<section class="module modules__item">
                 <p class="accent-text module__name">${module.name}</p>`;
    html += `<div class="module__tasks-list">`;

    for (let task = 0; task < module.numberOfTasks; task++) {
      html += `<button class="button button-tsk module__task-btn" id="${module.id}_task${task + 1}" 
                       data-chapter="${index}" data-task="${task}">Task ${task + 1}</button>`;
    }

    html += `</div><div class="module__task"> 
               <p class="accent-text module__task-name module__task-name-${module.id}"></p>
               <p class="main-text module__task-description module__task-description-${module.id}"></p>
               <button class="button button-ex module__task-execute-btn module__task-execute-${module.id}" data-execution="${module.id}" data-execute="true">Execute</button>
            <div/></section>`;
  });

  const module = document.querySelector(".modules__list");
  module.innerHTML = html;
  hideAllExecuteBtn();
  
  document.addEventListener("click", (event) => {
    closeAllTasks(); 
    if (event.target.tagName !== "BUTTON") { hideAllExecuteBtn(); return; }

    const executeId = event.target.dataset.execution;
    if (event.target.dataset.execute) {
      document.querySelector(`.module__task-name-${executeId}`).style.display="block";
      document.querySelector(`.module__task-description-${executeId}`).style.display="block";
      return;
    }
    hideAllExecuteBtn(); 

    const chapterIndex = +event.target.dataset.chapter;
    const taskIndex = +event.target.dataset.task;
    const module = modules[chapterIndex];
    const task = module.tasks[taskIndex];

    let currentTaskName = document.querySelector(`.module__task-name-${module.id}`);
    let currentTaskDescription = document.querySelector(`.module__task-description-${module.id}`);
    currentTaskName.style.display = "block";
    currentTaskDescription.style.display = "block";
    currentTaskName.innerHTML = task.nameTask;
    currentTaskDescription.innerHTML = task.descriptionTask;

    let executeBtn = document.querySelector(`.module__task-execute-${module.id}`);
    executeBtn.style.display = "block";
    executeBtn.setAttribute('onclick', `executeModule${module.chapter}Task${task.id}()`);
  });
}

renderModules(MODULES);

function closeAllTasks() {
  let taskName = document.querySelectorAll(".module__task-name");
  let taskDescription = document.querySelectorAll(".module__task-description");
  taskName.forEach((name) => {
    name.style.display = "none";
  });
  taskDescription.forEach((description) => {
    description.style.display = "none";
  });
}

function hideAllExecuteBtn(){
  let executeBtn = document.querySelectorAll(`.module__task-execute-btn`);
  executeBtn.forEach((btn) => {
    btn.style.display = "none";
  });
}