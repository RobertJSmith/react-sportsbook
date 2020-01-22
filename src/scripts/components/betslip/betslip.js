import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {removeBet, placeBet} from '../../actions/betslip-actions';
import BetslipEntry from './betslip_entry';

class Betslip extends React.Component {
    onRemove = (bet) => {
        this.props.removeBet(bet);
    }

    checkAuthentication() {
        const authenticated = false;
        if (authenticated) {
            return (
            <div>
                <Button className="betslip-place-bet">Place Bet</Button>
            </div>
            );
        } else {
            return (<div>
                <h5 className="card-header info-color white-text text-center py-4">Sign in</h5>
                <input className="betslip-login-user" type="text"></input>
                <input className="betslip-login-password" type="password"></input>
                <Button className="betslip-login-and-bet">Log In And Place Bet</Button>
            </div>);
        }
    }

    getBets() {
        debugger;
        return (
            <div className="betslip-bet-wrapper">
                {this.props.bets && this.props.bets.map((item) => {
                    return (
                        <BetslipEntry key={item.id} {...item} onRemove = {this.onRemove.bind(this)}/>
                    );
                })}
                {this.props.bets.length === 0 && <p>Your betslip is empty</p>}
            </div>
        );
    }

    render() {
        return (
            <div className="betslip">
                <div className="betslip-wrapper">
                    <div className="counter"><span className="counter-text">{this.props.bets.length}</span></div>
                    {this.getBets()}
                    {this.checkAuthentication()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({   
    bets: state.bets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeBet: (data) => dispatch(removeBet(data)),
    placeBet: (data) => dispatch(placeBet(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Betslip);