import React, { Component } from 'react'

export default class Player extends Component {
    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return <div>Something went wrong, please try again. </div>;
    }

    renderPlayer() {
        return (
            <div>

            </div>
        );
    }
    render() {
        if (this.props.loading) {
            return this.renderLoading();
        } else if (this.props.player) {
            return this.renderPlayer();
        } else {
            return this.renderError();
        }
    }
}
