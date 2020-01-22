import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default class BetslipEntry extends React.Component {
    onRemove = () => {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <ListGroup className="betslip-bet">
                <ListGroup.Item>
                    <Button variant="outline-danger" className="betslip-bet-remove" onClick={this.onRemove}>X</Button>
                    <span className="betslip-bet-target">{this.props.target}</span>
                    <span className="betslip-bet-type">{this.props.betType}</span>
                    <span className="betslip-bet-odds">{this.props.oddsOffered}</span>
                    <input className="betslip-bet-stake" type="number"></input>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}