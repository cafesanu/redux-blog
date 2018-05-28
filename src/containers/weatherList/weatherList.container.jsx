import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {Chart} from '@app/components/chart/chart.component';
import {GoogleMap} from '@app/components/google-map/google-map.component';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {
        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressures = cityData.list.map((weather) => weather.main.pressure);
        const humidities = cityData.list.map((weather) => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} color={'blue'} units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color={'green'} units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color={'red'} units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Preassure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((city) => this.renderWeather(city))}
                </tbody>
            </table>
        );
    }
}

function mapStatetoProps({weather}) {
    return {weather};
}

// // Anything returned from this function will end up as props on the Booklist container
// function mapDispatchToProps(dispatch) {
//     // Whenever selectBook is called, the result should be passed to all reducers
//     return bindActionCreators({
//         getWeatherAction,
//     }, dispatch);
// }

// // Promote BookList from a component to a container - it needs to know about
// // this new dispatch method, selectBook. Make it available as a prop.
export const WeatherListContainer = connect(mapStatetoProps)(WeatherList);
