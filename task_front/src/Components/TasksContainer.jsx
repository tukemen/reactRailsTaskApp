import React from 'react';
import ViewTask from './ViewTask';
import {Card} from 'react-bootstrap'

class TasksContainer extends React.Component{
    render(){
        let complete = this.props.taskData.filter((data) =>{
            return data.is_done === true;
        });

        let incomplete = this.props.taskData.filter((data) =>{
            return data.is_done === false;
        });

        return  (
            <div className='taskList'>
               
                  <Card style={{width: 'auto'}}>
                    <Card.Header>
                     <h4>未完了</h4>
                    </Card.Header>
                   
                    
                    {incomplete.map((data)=>{
                        
                        return (
                            <ViewTask data={data} key={data.id} onDelete={this.props.deleteTask} onUpdate={this.props.updateTask} onUpdateComp={this.props.updateIsDone} />
                        );
                    })}
                   
                  </Card>
                  
                <Card style={{width: 'auto'}}>
                    <Card.Header>
                        <h4>完了</h4>
                    </Card.Header> 
                    
                    {complete.map((data)=>{
                        return (
                            <ViewTask data={data} key={data.id} onDelete={this.props.deleteTask} onUpdate={this.props.updateTask} onUpdateComp={this.props.updateIsDone} />
                        );
                    })}
                        
                    
                </Card>
            
            </div>
        );
    }

}

export default TasksContainer;