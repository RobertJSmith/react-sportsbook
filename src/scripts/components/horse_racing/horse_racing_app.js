import React from 'react';
import HorseRacingEvent from './horse_racing_event';
import HorseRacingRunner from './horse_racing_runner';

/*
<div className="horse-racing-runner">
                <div className="horse-racing-jockey-silk">{this.props.silk}</div>
                <div className="horse-racing-runner-details">
                    <div className="horse-racing-runner-name">{this.props.name}</div>
                    <div className="horse-racing-jockey-name">{this.props.jockey}</div>
                </div>
                <div className="horse-racing-runner-odds">{this.props.odds}</div>
            </div> */


const raceRunners = [{
    raceId: 10,
    runners: [{
        runnerId: 220,
        silk: 'red',
        name: 'Joe Red',
        jockey: 'Joe Red',
        odds: 1
    }, {
        runnerId: 221,
        silk: 'green',
        name: 'Joe Green',
        jockey: 'Joe Red',
        odds: 2
    }]
},
{
    raceId: 11,
    runners: [{
        runnerId: 222,
        silk: 'purple',
        name: 'Joe Purple',
        jockey: 'Joe Red',
        odds: 1
    }, {
        runnerId: 223,
        silk: 'pink',
        name: 'Joe Pink',
        jockey: 'Joe Red',
        odds: 1
    }]
}];

export default class HorseRacingApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRaceId: '',
            activeRaceRunners: [],
            scheduledRaces: this.getScheduledRaces()
        };
    }

    activeRaceSelected(locationID, raceID) {
        this.setState({activeRaceRunners: raceRunners.reduce((accum, obj) => {
            if (obj.raceId === raceID) {
                accum = obj.runners;
            }
            return accum;

        }, []), activeRaceId: raceID});
    }

    getScheduledRaces() {
        return [{
            id: 1,
            location: 'Lingfield',
            races: [{
                        raceId: 10,
                        time: '12:45pm'
                    },
                    {
                        raceId: 11,
                        time: '1.15pm'
                    }, 
                    {
                        raceId: 12,
                        time: '2:15pm'
                    },
                    {   
                        raceId: 13,
                        time:'2.45pm'
                    }]
        },
        {
            id: 2,
            location: 'Southwell',
            races: [{
                raceId: 14,
                time: '2:45pm'
            },
            {
                raceId: 15,
                time: '3.15pm'
            }, 
            {
                raceId: 16,
                time: '4:15pm'
            },
            {   
                raceId: 17,
                time:'4.45pm'
            }]
        },
        {
            id: 3,
            location: 'Taunton',
            races: [{
                raceId: 18,
                time: '12:45pm'
            },
            {
                raceId: 19,
                time: '2.15pm'
            }, 
            {
                raceId: 20,
                time: '3:15pm'
            },
            {   
                raceId: 21,
                time:'4.45pm'
            }]
        }];
    }

     renderRaces() {
         return (
            <React.Fragment>
                {this.state.scheduledRaces && this.state.scheduledRaces.map((item) => {
                    return (
                        <HorseRacingEvent key={item.id} {...item} activeRaceSelected = {this.activeRaceSelected.bind(this)} activeRaceId = {this.state.activeRaceId}/>
                    );
                })}
                {this.state.activeRaceRunners && this.state.activeRaceRunners.map((runner) => {
                    return (
                        <HorseRacingRunner key={runner.runnerId} {...runner}/>
                    );
                })}
            </React.Fragment>
         );
     }

    render() {        
        return (
            <div className="horse-racing-list">
                {this.renderRaces()}
            </div>
        );
    }
};