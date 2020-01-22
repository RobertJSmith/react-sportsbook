import React, { Component } from 'react';
import HeaderNavigationItem from './header_navigation_item';

export default class HeaderNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: this.props.menuItems
        }
    }

    renderMenuItems() {
        return (
            <nav className ="header-nav-wrapper">
                {this.state.menuItems && this.state.menuItems.map((item) => {
                    return <HeaderNavigationItem key={item.id} {...item}/>
                })}
            </nav>
        );
    }

    render() {
        return (
            <header className ="header-nav">
                {this.renderMenuItems()}
            </header>
        );
    }
}