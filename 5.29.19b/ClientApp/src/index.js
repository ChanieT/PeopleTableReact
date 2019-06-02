import React from 'react';
import { render } from 'react-dom';
import PersonSubmitter from './PersonSubmitter';
import PeopleList from './PeopleList';

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    clear = () => {
        this.setState({ firstName: '', lastName: '', age: '' });
    }

    clearTable = () => {
        this.setState({ people: [] });
    }

    onSubmitClick = () => {
        const copy = [...this.state.people];
        const { firstName, lastName, age }=this.state;
        const person = {firstName,lastName,age};
        copy.push(person);
        this.setState({ people: copy });
        this.clear();
    }

    firstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }
    lastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }
    ageChange = e => {
        this.setState({ age: e.target.value })
    }

    deletePerson = idx => {
        const copy = [...this.state.people];
        copy.splice(idx, 1);
        this.setState({ people: copy });
    }


    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <PersonSubmitter
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    //numberTextChange={this.onNumberTextChange}
                    submitPerson={this.onSubmitClick} clear={this.clear}
                    firstNameChange={this.firstNameChange} lastNameChange={this.lastNameChange} ageChange={this.ageChange}
                    submitClear={this.clearTable} />


                <PeopleList people={this.state.people} delete={this.deletePerson}/>
            </div>
        );
    }
}


render(<App />, document.getElementById('root'));


