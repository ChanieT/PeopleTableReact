import React from 'react';

export default class PersonSubmitter extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <input value={this.props.firstName}
                        type="text" className="form-control"
                        placeholder="Enter First Name"
                        onChange={this.props.firstNameChange}/>
                    <input value={this.props.lastName}
                        type="text" className="form-control"
                        placeholder="Enter Last Name"
                        onChange={this.props.lastNameChange}/>
                    <input value={this.props.age}
                        type="text" className="form-control"
                        placeholder="Enter Age"
                        onChange={this.props.ageChange}/>
                </div>
                <div className="col-md-4">
                    <button onClick={this.props.submitPerson}
                        className="btn btn-primary">Add Person</button>
                    <button onClick={this.props.clear}
                        className="btn btn-warning">Clear Textboxes</button>
                    <button onClick={this.props.submitClear}
                        className="btn btn-danger">Clear Table</button>
                </div>
            </div>

        )
    }
}