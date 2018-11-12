const dataModel = (function () {
    const storage = {
        taskList: [],
    }
    class Task {
        constructor(task) {
            this.task = task;
        }
        getInfo() {
            return `${this.task}`;
        }

    }
    const createTask = task => new Task(task);


    const addTask = task => {
        storage.taskList.push(task);
    }
    return {
        createTask,
        addTask
    }


})();

const uiModel = (function () {
    const $inputTask = document.querySelector("input");
    const collectInput = () => {
        const inputValue = $inputTask.value;
    }
    const displayTask = task => {
        const $div = document.querySelector(".toDo");
        const $p = $div.createElemnt("p").textContent(inputValue);
        $div.appendChild($p);
    }
    const resetInput = () => {
        $inputTask.value = "";

    }
    return {
        collectInput,
        resetInput,
    }

})();

const controller = (function (data, ui) {

    const setupEventListeners = () => {

        const $inputButton = document.querySelector("button");
        $inputButton.addEventListener("onclick", );
    }


})(dataModel, uiModel);