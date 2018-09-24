import React from 'react';
import { connect } from 'react-redux';

export class Todo extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-feed-item">
                <h3>
                    Heading
                </h3>
                <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                    mollis euismod. Donec sed odio dui.
                </p>
                <div className="todo-action">
                    <button type="button" className="btn btn-default" onClick={this.props.toggleModal}>
                        <i className="material-icons">edit</i>
                    </button>
                    <button type="button" className="btn btn-default">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Todo);