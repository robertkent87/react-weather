import React, {Component} from 'react';
import {DayForecast} from './DayForecast';
import moment from 'moment';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast_data: []
        };

        let api_key = '4bb5f03cb1cebe071131cae471b6b4fc';
        let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Edinburgh,GB&units=metric&cnt=5&APPID='+api_key;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({forecast_data: data.list}));
    }

    render() {
        return (
            <div className="App">
                <h1>Weather in Edinburgh, UK</h1>
                <ul className="forecast-list">
                    {this.state.forecast_data.map((day, i) => {
                        let day_txt = moment.unix(day.dt).format('ddd Do MMM');
                        let day_weather = day.weather[0].main;
                        let day_low = Math.round(day.temp.min);
                        let day_high = Math.round(day.temp.max);

                        return <DayForecast day={day_txt} weather={day_weather} high={day_high} low={day_low} key={i} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
