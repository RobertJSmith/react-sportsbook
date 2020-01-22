import React from 'react';

const HeaderNavigationItem = props => {
    return (
        <div className="nav-item-container">
            <a className="nav-item-link" href={props.url}>{props.name}</a>
        </div>
    );
};

export default HeaderNavigationItem;