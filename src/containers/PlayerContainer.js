import React, { Component } from 'react'

class PlayerContainer extends Component {
    state = { loading: true };

    render() {
        return <Player />;
    }
}

export default PlayerContainer;