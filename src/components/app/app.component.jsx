import React, { Component } from 'react';
import { SearchBarContainer } from '@app/containers/searchBar/searchBar.container';
import { WeatherListContainer } from '@app/containers/weatherList/weatherList.container';

export class App extends Component {
    render() {
        return (
            <div>
                <SearchBarContainer />
                <WeatherListContainer />
            </div>
        );
    }
}
