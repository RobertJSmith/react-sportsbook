import React from 'react';
import {connect} from 'react-redux';

class HorseRacingEvent extends React.Component {
    onSelection = (event) => {
        this.props.activeRaceSelected(this.props.id, Number(event.target.id));
    }

    render() {
        return (
            <div className="horse-racing-list-scheduledRace">
                <div className="horse-racing-list-scheduledRace_location">{this.props.location}</div>    
                <div className="horse-racing-list-scheduledRace_times">
                    {this.props.races && this.props.races.map((race) => {
                        return (
                            <div id={race.raceId} onClick={this.onSelection} key={race.raceId} className={this.props.activeRaceId == race.raceId ? "horse-racing-list-scheduledRace_time is-active" : "horse-racing-list-scheduledRace_time"}>
                                {race.time}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({   
    bets: state.bets
});

export default connect(mapStateToProps)(HorseRacingEvent);