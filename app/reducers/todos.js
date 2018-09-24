const initialState = {
    tasks: [],
    isLoaded: false
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return Object.assign({}, state, {
                tasks: action.todos
            });
        default:
            return state;
    }
}