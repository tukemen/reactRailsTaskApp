import React from 'react';
import {Button,ListGroup,Row,Col} from 'react-bootstrap';

function Edit(props){
    if(props.editmode){
        return (
        <div>    
        <input type="text" value={props.newTask} onChange={(e) => props.handleInput(e)}/>
        <input type="button" value="確定" onClick={props.handleUpdate}/>
        </div>
        );
    }else{
        return (
            <div>{props.task}</div>
        );
    }
}

class ViewTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updateText: '',
            editmode: false
        }
    }

    handleDelete = () => {
        this.props.onDelete(this.props.data.id)
    }

    handleUpdate = () => {
        this.props.onUpdate(this.props.data.id, this.state.updateText)
        this.setState({editmode: !this.state.editmode})
    }

    handleInput = (e) => {
        this.setState({updateText: e.target.value})
    }

    handleChange = () => {
        this.setState({editmode: !this.state.editmode})
    }

    
    render(){
        return (
            <ListGroup.Item action>
                
                <Row>
                    <Col><Edit editmode={this.state.editmode} task={this.props.data.task} newTask={this.state.updateText} handleInput={this.handleInput} handleUpdate={this.handleUpdate}/></Col>
                    
                    <Button as="input" variant="info" type ="submit" onClick={this.handleChange} value="編集"/>
                    
                    <Button as="input" variant="info" type="reset" onClick={this.handleDelete} value="完了"/>
                </Row>
            </ListGroup.Item>
        );
    }
}

export default ViewTask;