import React from 'react';

export default class PeopleList extends React.Component {

    render() {
        const { people } = this.props;
        return(
        <div className="row">
                <table className="table table-bordered table striped">
                    <tbody>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                    </tr>
                    
                    {people.map((p, idx) =>
                        <tr key={idx}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                                <td>{p.age}</td>
                                <td><button onClick={() => { this.props.delete(idx) }}
                                    className="btn btn-danger">Delete Person</button></td>
                        </tr>
                        )}
                    </tbody>     

            </table>
        </div>
        )
    }
}