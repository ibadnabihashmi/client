export function findTodos(from) {
    return (dispatch) => {
        return fetch(`http://localhost:9001/tasks?from=${from}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    dispatch({
                        type: 'FETCH_TODOS',
                        todos: json.tasks,
                        total: json.total
                    });
                });
            }
        });
    }
}

export function addTodo (todo) {
    return (dispatch) => {
        return fetch(`http://localhost:9001/task/create`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    dispatch({
                        type: 'ADD_TODO',
                        todos: json.task
                    });
                });
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
                response.json().then(json => {
                    dispatch({
                        type: 'UPDATE_TODO',
                        todos: json.task
                    });
                });
            }
        });
    }
}

export function deleteTodo (id) {
    return (dispatch) => {
        return fetch(`http://localhost:9001/task/delete/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if (response.ok) {
                dispatch({
                    type: 'DELETE_TODO',
                    id: id
                });
            }
        });
    }
}