import React from 'react';
import {Button,Form,Col} from 'react-bootstrap'

class FormContainer extends React.Component{
    constructor(props){
        super(props);
        this.onChangetext = this.onChangetext.bind(this);
        this.state = {
            task: ''
        }
    }

    onChangetext(e){
        this.setState({task: e.target.value})
    }

    hundleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state.task)
        this.setState({task: ''})
    }
    render(){
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Col >
                            <Form.Control
                                type = "text"
                                value={this.state.task}
                                placeholder="入力してください"
                                onChange={this.onChangetext}
                            />
                        </Col>
                        <Col>
                            <Button 
                                as="input" 
                                type="submit" 
                                onClick={this.hundleSubmit} 
                                value="追加"
                                variant="info"
                                
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FormContainer;