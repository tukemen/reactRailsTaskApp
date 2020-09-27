import React from 'react';
import {Button,ListGroup,Row,Col,Card} from 'react-bootstrap';

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

function CheckBtn(props){
    
        if(props.isDone){
        　return <Button as="input" variant="warning" onClick={props.handleComplete} type ="submit" value="取り消し"/>
        }else{
        　return <Button as="input" variant="success" onClick={props.handleComplete} type ="submit" value="完了"/>
        }
}

class ViewTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updateText: '',
            editmode: false,
            isDone: props.data.is_done
        }
    }

    handleDelete = () => {
        this.props.onDelete(this.props.data.id);
    }

    handleUpdate = () => {
        
        this.props.onUpdate(this.props.data.id, this.state.updateText);
        this.setState({editmode: !this.state.editmode});
    }

    handleInput = (e) => {
        this.setState({updateText: e.target.value});
    }

    handleChange = () => {
        this.setState({editmode: !this.state.editmode});
    }

    handleComplete = () => {
        
        this.setState({isDone: !this.state.isDone},
        () =>this.props.onUpdateComp(this.props.data.id, this.state.isDone));
    }

    
    render(){
        return (
            <Card.Body>
                <ListGroup.Item action>
                    
                    <Row>
                        <Col><Edit editmode={this.state.editmode} task={this.props.data.task} newTask={this.state.updateText} handleInput={this.handleInput} handleUpdate={this.handleUpdate}/></Col>
                        
                        <CheckBtn isDone = {this.state.isDone} handleComplete={this.handleComplete}/>
                        <Button as="input" variant="secondary" type ="submit" onClick={this.handleChange} value="編集"/>
                        
                        <Button as="input" variant="danger" type="reset" onClick={this.handleDelete} value="削除"/>
                    </Row>

                </ListGroup.Item>
            </Card.Body>
        );
    }
}

export default ViewTask;