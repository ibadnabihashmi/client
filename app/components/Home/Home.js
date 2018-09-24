import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Partials/Messages/Messages';
import { Todo } from '../Todo/Todo';
import { Nav } from '../Nav/Nav';
import { TodoModal } from '../TodoModal/TodoModal';
import { findTodos, addTodo, editTodo, deleteTodo } from '../../actions/todo';

class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      todos: props.todos,
      todo: {
        id: '',
        title: '',
        description: ''
      }
    }

    this.addTodoModal = this.addTodoModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.editTodoModal = this.editTodoModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount () {
    this.props.dispatch(findTodos());
  }

  addTodoModal () {
    const todo = {
      id: '',
      title: '',
      description: ''
    }
    this.setState({
      showModal: true,
      todo: todo
    });
  }

  closeModal () {
    this.setState({
      showModal: false
    });
  }

  handleSave () {
    if (this.state.todo.id.toString().trim() !== "") {
      this.props.dispatch(editTodo(this.state.todo));
    } else {
      this.props.dispatch(addTodo(this.state.todo));
    }
  }

  editTodoModal (todo) {
    this.setState({
      showModal: true,
      todo: todo
    });
  }

  deleteTodo (id) {
    this.props.dispatch(deleteTodo(id));
  }

  renderTodos (todos) {
    const _todos = [];
    todos.forEach((todo) => {
      _todos.push(
        <Todo 
          editTodoModal={this.editTodoModal} 
          id={todo.id} title={todo.title} 
          description={todo.description} 
          key={todo.id}
          deleteTodo={this.deleteTodo}>
        </Todo>
      )
    });
    return _todos;
  }

  render() {
    return (
      <div className="todo-app">
        <Nav addTodoModal={this.addTodoModal}></Nav>
        {
          this.state.showModal ? 
          <TodoModal 
            handleSave={this.handleSave} 
            todo={this.state.todo}
            closeModal={this.closeModal}>
          </TodoModal> :
          ''
        }
        <div className="todo-feed-container container">
          <Messages messages={this.props.messages} />
          <div className="row todo-feed">
            <div className="todo-feed-col col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
              {
                this.props.todos.tasks.length ? 
                this.renderTodos(this.props.todos.tasks) : 
                ''
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Home);
