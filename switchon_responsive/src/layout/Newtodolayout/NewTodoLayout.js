import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Row,Col,Form,Card} from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SideLayout from '../Sidelayout/SideLayout';
import './newtodolayout.css';

function NewTodoLayout(props) {
   
  return (
    <div>
        <Container fluid="md">
            <Row>
                <Col xs={12} lg={4} md={4} className="sidelayoutclass1">
                        <SideLayout></SideLayout>
                </Col>
                <Col xs={12} lg={8} md={8} >
                        <Row>
                            <Col style={{float:"left"}}>
                                <Button variant="light" className="buttonclass" onClick={props.back} ><ArrowBackIcon className="iconclass"/>Create Task</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={8} md={8}>
                                <Card className="newcardclass">
                                    <Form  className="formclass" >
                                        <Form.Group >
                                            <Form.Label>Enter Task Name</Form.Label>
                                            <Form.Control onChange={props.taskname} placeholder="Task Name" />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Enter Description</Form.Label>
                                            <Form.Control onChange={props.description}  placeholder="Description" />
                                        </Form.Group>
                                    </Form>
                                    <Form.Group className="formclass" >
                                        <Form.Label>Branch To</Form.Label>
                                            <Form.Control as="select" onChange={props.branchto} style={{width:"70%"}}>
                                                <option>To-Do</option>
                                                <option>In-Progress</option>
                                                <option>Done</option>
                                            </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="formclass" >
                                        <Form.Label>Type of</Form.Label>
                                            <Form.Control as="select" onChange={props.typeoftask} style={{width:"70%"}}>
                                                <option>Personal</option>
                                                <option>Official</option>
                                                <option>Miscel...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    <Form.Group className="formclass" >
                                        <label style={{display:"block"}}> Select Date</label>
                                        <input type="date" onChange={props.dateselect}  className="inputclass" ></input>
                                    </Form.Group>
                                    <Form.Group className="formclass" >
                                        <Button variant="outline-info"  style={{margin:"5px"}}>Cancel</Button>
                                        <Button variant="success" onClick={props.create} style={{marginLeft:"10px"}}>Create</Button>
                                    </Form.Group>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} md={4}>
                                <Card className="newcardclass">
                                    <Form>
                                        <Form.Group style={{margin:"20px"}} >
                                            <Form.Label>Sub Task</Form.Label>
                                            {props.cardlist.map( el => { return <Form.Control key={el.key} onChange={el.onChange} style={{marginTop:"10px"}} placeholder={el.placeholder} /> } )}
                                        </Form.Group>
                                    </Form>
                                    <Button variant="light" onClick={props.subtask} className="subtaskclass">+  New Sub task </Button>
                                </Card>
                            </Col>
                        </Row>

                </Col>
            </Row>
   
        </Container>
    </div>
  )
}
export default NewTodoLayout