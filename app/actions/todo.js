export function findTodos() {
    return (dispatch) => {
        return fetch(`http://localhost:9001/tasks`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    dispatch({
                        type: 'FETCH_TODOS_SUCCESS',
                        todos: json.tasks
                    });
                });
            } else {
                // return response.json().then((json) => {
                // });
            }
        });
    }
}

export function addTodo (todo) {
    console.log(todo);
    return (dispatch) => {
        return fetch(`http://localhost:9001/task/create`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    console.log(json);
                });
            } else {

            }
        });
    }
}

export function editTodo (todo) {
    return (dispatch) => {
        return fetch(`http://localhost:9001/task/update/${todo.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    console.log(json);
                });
            } else {

            }
        });
    }
}

export function deleteTodo (id) {
    return (dipatch) => {
        return fetch(`http://localhost:9001/task/delete/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    console.log(json);
                });
            } else {

            }
        });
    }
}