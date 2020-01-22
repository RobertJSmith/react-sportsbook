import React from 'react';
import {connect} from 'react-redux';
import {addBet} from '../../actions/betslip-actions';

class HorseRacingRunner extends React.Component {
    onSelect = () => {
        let bet = {
            id: this.props.runnerId,
            target: this.props.name,
            betType: 'TOWIN',
            oddOffered: this.props.odds
        };

        this.props.addBet(bet);
    }

    render() {
        return (
            <div className="horse-racing-runner">
                <div className="horse-racing-jockey-silk">{this.props.silk}</div>
                <div className="horse-racing-runner-details">
                    <div className="horse-racing-runner-name">{this.props.name}</div>
                    <div className="horse-racing-jockey-name">{this.props.jockey}</div>
                </div>
                <div className="horse-racing-runner-odds" onClick={this.onSelect}>{this.props.odds}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({   
    bets: state.bets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBet: (data) => dispatch(addBet(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HorseRacingRunner);