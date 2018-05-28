import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon,
            },
        });
    }

    render() {
        return (
            <div ref="map"/>
        );
    }
}

GoogleMap.propTypes = {
    lat: PropTypes.number,
    lon: PropTypes.number,
}
