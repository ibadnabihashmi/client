import React from 'react';
import { connect } from 'react-redux';

export class TodoModal extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                        <div className="todo-modal">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Title"></input>
                            </div>
                            <div className="form-group">
                                <textarea rows="5" className="form-control" placeholder="Description"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default btn-save">save</button>
                                <button type="submit" className="btn btn-default btn-cancel" onClick={this.props.toggleModal}>cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(TodoModal);