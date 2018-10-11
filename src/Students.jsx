import React, { Component } from 'react';
import StudentList from "./Liste.json"
class Students extends Component {

state = {
    List: [],
}

componentDidMount() {
    this.setState({List:StudentList})
}
    render() {
        return (
             <ul>
                 {this.state.List.map((student) => {
                     return (
                         <div>
                         <li key={student.id}>{student.name}</li>
                         <button onClick = {()=>this.props.addfriend(student)}>Add friend</button>
                         </div>
                     )
                 }
                 )}
             </ul>
        );
    }
}

export default Students;