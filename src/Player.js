import React, { Component } from 'react';
import TrackInformation from './TrackInformation';
import Scrubber from './Scrubber';
import Controls from './Controls';
import Timestamps from './Timestamps';


class Player extends Component {
    render() {
        return (
            <div className="Player">
                <div className="Background"></div>
                <div className="Header"><div className="Title">Now playing</div></div>
                <div className="Artwork"></div>
                <TrackInformation />
                <Scrubber />
                <Controls />
                <Timestamps />
                <audio>   
                    <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3" />
                </audio>
            </div>
        );
    }
}

export default Player;