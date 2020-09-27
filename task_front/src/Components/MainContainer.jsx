import React  from 'react';
import axios from 'axios';
import TasksContainer from './TasksContainer';
import FormContainer from './FormContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import update from 'react-addons-update'

class MainContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/tasks')
        .then((results) => {
            console.log(results);
            this.setState({tasks: results.data});
        })
        .catch((data) => {
            console.log(data);
        });
    }

    createTask = (task) => {
        axios.post('http://localhost:3001/tasks',{task: task})
        .then((response) => {
            
            const newData = update(this.state.tasks, {$push:[response.data]})
            
            this.setState({tasks: newData});
          
        })
        .catch((data) => {
            console.log(data)
        })
    }

    deleteTask = (id) => {
        axios.delete(`http://localhost:3001/tasks/${id}`)
        .then((response) => {
            const taskIndex = this.state.tasks.findIndex(x => x.id === id);
            const deleteTasks = update(this.state.tasks, {$splice: [[taskIndex, 1]]});
            this.setState({tasks: deleteTasks});
            console.log(`set`);
        })
        .catch((data) => {
            console.log(data);
        });
    }

    updateTask = (id, task) => {
        axios.patch(`http://localhost:3001/tasks/${id}`,{task: task})
        .then((response) => {
            const taskIndex = this.state.tasks.findIndex(x => x.id === id)
            const tasks = update(this.state.tasks, {[taskIndex]: {$set: response.data}})
            this.setState({tasks: tasks});
        })
        .catch((data) => {
            console.log(data);
        })
    }
    
    //tasksテーブルのis_doneカラムの変更だけを反映させたかった
    updateIsDone = (id, isDone) => {
        axios.patch(`http://localhost:3001/tasks/${id}`,{is_done: isDone})
        .then((response) => {
           console.log(response)
            const isDoneIndex = this.state.tasks.findIndex(x => x.id === id)
            const isDones = update(this.state.tasks, {[isDoneIndex]: {$set: response.data}});
            this.setState({tasks: isDones});
            
        })
        .catch((data) => {
            console.log(data);
        })
    }

    render(){
        return (
            <div className='app-main'>
                <FormContainer handleAdd={this.handleAdd} createTask={this.createTask}/>

                <TasksContainer taskData={this.state.tasks} 
                                deleteTask={this.deleteTask} 
                                updateTask = {this.updateTask} 
                                updateIsDone={this.updateIsDone}
                                />
            </div>
        );
    }
}

export default MainContainer;