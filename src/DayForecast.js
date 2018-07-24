import React, {Component} from 'react';
import './DayForecast.css';

export class DayForecast extends Component {

    render() {
        let src = `/images/${this.props.weather}.png`;
        return (
            <li className="forecast-day">
                <p className="day">{this.props.day}</p>
                <img src={src} alt=""/>
                <p className="temps">
                    <span className="low">{this.props.low}&deg;C</span>
                    <span className="high">{this.props.high}&deg;C</span>
                </p>
            </li>
        );
    }

}