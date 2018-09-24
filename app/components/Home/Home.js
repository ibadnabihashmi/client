import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Partials/Messages/Messages';
import { Todo } from '../Todo/Todo';
import { Nav } from '../Nav/Nav';
import { TodoModal } from '../TodoModal/TodoModal';

class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="todo-app">
        <Nav toggleModal={this.toggleModal}></Nav>
        {
          this.state.showModal ? 
          <TodoModal toggleModal={this.toggleModal}></TodoModal> :
          ''
        }
        <div className="todo-feed-container container">
          <Messages messages={this.props.messages} />
          <div className="row todo-feed">
            <div className="todo-feed-col col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
              <Todo toggleModal={this.toggleModal}></Todo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
