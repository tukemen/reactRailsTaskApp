import React from 'react';
import ViewTask from './ViewTask';
import {Card} from 'react-bootstrap'

class TasksContainer extends React.Component{
    render(){
        return  (
            <div className='taskList'>
                  <Card >
                    <Card.Header>
                     <h4>Todo</h4>
                    </Card.Header>
                    <Card.Body>
                    
                    {this.props.taskData.map((data)=>{
                        return (
                            <ViewTask data={data} key={data.id} onDelete={this.props.deleteTask} onUpdate={this.props.updateTask}/>
                        );
                    })}
                   </Card.Body>
                  </Card>
            </div>
        );
    }

}

export default TasksContainer;