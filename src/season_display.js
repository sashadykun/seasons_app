
import React from 'react';
import './season_display.css';

const seasonConfig = {
    summer: {
        outputText: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        outputText: 'Burr, it is cold',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {

    if(month > 2 && month < 9){
        return latitude > 0 ? 'summer' : 'winter';
    }else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    // const outputText = season === 'winter' ? 'Burr, it is chily' : 'Lets hit the beach'
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const {outputText, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={` icon-left massive ${iconName} icon`}/>
            <h1>{outputText}</h1>
            <i className={` icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;