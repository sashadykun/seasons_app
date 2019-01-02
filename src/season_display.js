import React from 'react';

const getSeason = (latitude, month) => {

    if(month > 2 && month < 9){
        return latitude > 0 ? 'summer' : 'winter';
    }else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    console.log('season', season)
    return <div>Season Display</div>
}

export default SeasonDisplay;