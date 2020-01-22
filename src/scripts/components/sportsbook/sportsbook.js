import React from 'react';
import HeaderNavigation from '../header_navigation/header_navigation';
import Betslip from '../betslip/betslip';
import HorseRacingApp from '../horse_racing/horse_racing_app';
import Footer from '../footer/footer';

const navigationItems = [{
    id: 'sportsbook',
    url: '/sportsbook',
    name: 'Sportsbook'
  },
  {
    id: 'casino',
    url: '/casino',
    name: 'Casino'
  },
  {
    id: 'Lotto',
    url: '/lotto',
    name: 'Lotto'
}];
  
export default class Sportsbook extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
 
    render() {
        return (
            <div className="sportsbook">
                <HeaderNavigation menuItems={navigationItems}/>
                <main>
                    <HorseRacingApp/>
                </main>
                <aside>
                    <Betslip/>
                </aside>
                <Footer/>
            </div>
        );
    }
}