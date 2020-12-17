import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import {Button,Container,Row,Col,Form,FormControl,InputGroup,Card} from 'react-bootstrap';
import SideLayout from '../Sidelayout/SideLayout'
import './todolayout.css';

function TodoLayout(props) {
 
  return (
    <div>
        <Container fluid="md">
            <Row>
                <Col xs={12} lg={4} md={4} className="sidelayoutclass1">
                        <SideLayout ></SideLayout>
                </Col>
                <Col xs={12} lg={8} md={8} >
                        <Row>
                            <Col >
                                <InputGroup style={{width:"100%",margin:"10px"}}>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text className="inputsearchiconclass"><SearchIcon /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className="inputsearchclass" placeholder="Search Task By Title" />
                                    <Button style={{marginLeft:"10px"}}variant="outline-info" onClick={props.newtask}>New Task</Button>
                                    <input type="date" className="inputclass" ></input>
                                </InputGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={4} md={4}>
                                <Card className="cardclass" >
                                    <Card.Header  className="cardheaderclass cardheaderclass1" >To Do</Card.Header>
                                    <Card.Body className="cardbodyclass">{props.todocard}</Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} md={4}>
                                <Card className="cardclass" >
                                    <Card.Header className="cardheaderclass cardheaderclass2" >In-progress</Card.Header>
                                    <Card.Body className="cardbodyclass">{props.progcard}</Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} md={4}>
                                <Card className="cardclass" >
                                    <Card.Header className="cardheaderclass cardheaderclass3" >Done</Card.Header>
                                    <Card.Body className="cardbodyclass" >{props.donecard}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </Col>
            </Row>
    
        </Container>
       
    </div>
  )
}

export default TodoLayout
