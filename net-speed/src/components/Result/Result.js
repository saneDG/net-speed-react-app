import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: [
                {x: 0, y: 0, reach: 9},
                {x: 20, y: 20, reach: 6},
                {x: 10, y: 0, reach: 12},
                {x: 5, y: 5, reach: 13},
                {x: 99, y: 25, reach: 2}
            ],
            x: 0,
            y: 0,
            speed: 0
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.device !== this.props.device) {
            this.calculateSpeed()
        }
    }

    calculateSpeed() {
        // (reach - device's distance from network station)^2
        let fastest = {x: 0, y: 0, speed: 0};

        this.state.stations.forEach((station) => {
            let distance = Math.hypot(station.x - this.props.device.x, station.y - this.props.device.x);
            let speed = (station.reach - distance)^2

            if (fastest.speed < speed && distance < station.reach) {
                station.speed = speed;
                fastest = station;
            } else {

            }
        })

        this.setState({x: fastest.x});
        this.setState({y: fastest.y});
        this.setState({speed: fastest.speed});
    }

    render () {
        return (
            this.state.speed > 0 ?
            <p>
                Best network station for point
                <b> {this.props.device.x},</b>
                <b>{this.props.device.y} </b>
                is
                <b> {this.state.x},</b>
                <b>{this.state.y} </b>
                with speed
                <b> {this.state.speed} </b>
            </p>
            :
            <div>No network station within reach for point
                <b> {this.props.device.x},</b>
                <b>{this.props.device.y} </b>
            </div>
        );
    }
}

export default Input;