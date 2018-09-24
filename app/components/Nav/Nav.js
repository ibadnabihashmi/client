import React from 'react';
import { connect } from 'react-redux'

export class Nav extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="input-group search-container">
                        <i className="material-icons">search</i>
                        <input type="text" className="form-control" placeholder="Search" aria-describedby="search-addon"></input>
                    </div>
                    <button onClick={this.props.toggleModal} type="button" className="btn btn-default add-todo-button" data-toggle="modal" data-target=".bs-example-modal-sm">
                        <i className="material-icons">add</i>
                    </button>
                </div>
            </nav>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(Nav);
