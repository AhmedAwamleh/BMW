import React from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }


    ifClick = () => {
        this.setState({ counter: this.state.counter + 1 })

    }

    render() {
        return (
            <>
                {/* <span>👍{this.state.counter}</span>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} onClick={this.ifClick} />
                <p>{this.props.discription}</p> */}

                {/* hello */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.ifClick} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.discription}
                        </Card.Text>
                        <span>👍{this.state.counter}</span>
                    </Card.Body>

                </Card>





            </>
        )
    }
}

export default Main;









