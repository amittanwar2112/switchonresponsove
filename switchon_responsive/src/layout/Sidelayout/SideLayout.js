import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,ListGroup,Button,ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Pie,} from 'react-chartjs-2';
import './sidelayout.css';
import { TrendingUpRounded } from '@material-ui/icons';

function SideLayout(props) {
    const graphstate = {
        labels: ['To-Do', 'In-Progress', 'Done'],
        datasets: [
          {
            label: 'Branch',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [props.notodo , props.noinprog, props.nodone]
          }
        ]
      }
  return (
    <div>
        <Row>
            <Col style={{textAlign:"right"}}>
                <ButtonGroup aria-label="Basic example" className="cardlist" >
                        <Button variant="info" className="buttonclass1">User</Button>
                        <Button variant="outline-primary" className="buttonclass2"  onClick={props.onLogout}>Logout</Button>
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col >
                <Row>
                    <Col>
                        <ListGroup horizontal className="cardlistmargin ">
                            <ListGroup.Item  className="cardlistclass cardlist1">All</ListGroup.Item>
                            <ListGroup.Item className="cardlistclass">{props.noall}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup horizontal className="cardlistmargin">
                            <ListGroup.Item  className="cardlistclass cardlist2">Personal</ListGroup.Item>
                            <ListGroup.Item className="cardlistclass">{props.nopersonal}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup horizontal className="cardlistmargin">
                            <ListGroup.Item  className="cardlistclass cardlist3">Official</ListGroup.Item>
                            <ListGroup.Item className="cardlistclass">{props.noofficial}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup horizontal className="cardlistmargin">
                            <ListGroup.Item className="cardlistclass cardlist4" >Misc.</ListGroup.Item>
                            <ListGroup.Item className="cardlistclass">{props.nomsic}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <div >
                    <Pie data={graphstate}
                            options={{
                                title:{
                                display:true,
                                text:'Branch',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right',
                                fontSize:10
                                }
                            }}
                    />
                </div>
            </Col>
        </Row>

    </div>
  )
}
const mapStateToProps = state =>{
    return {
        notodo : state.nooftodo,
        noinprog : state.noofinprog,
        nodone : state.noofdone,
        nopersonal: state.nofopesonal,
        noofficial: state.noofofficial,
        nomsic: state.noofmsic,
        noall : state.noofall
    };
};
const mapDispatchToProps = dispatch =>{
    return {
        onLogout : () => dispatch({type :'LOGOUT',value : ""}),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SideLayout)

