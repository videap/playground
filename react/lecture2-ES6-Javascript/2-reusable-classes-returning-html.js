
todo_list = [
    {
        "item": "Do dishes",
        "checked": false
    },
    {
        "item": "Clean windows",
        "checked": true
    },
    {
        "item": "Feed Dog",
        "checked": false
    }
]

function render(chore) {
    return (`
        <div>
            <input type="checkbox" class="todo-checkbox" ${ chore.checked ? "checked" : "" }/> ${chore.item}
        </div>
    `)
};

function newTodo() {
    todo_list.forEach(item => {
        document.getElementById("todo-list").innerHTML += render(item)
    });
}