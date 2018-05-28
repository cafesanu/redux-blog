import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export class Chart extends Component {
    constructor(props) {
        super(props);
    }

    average(data) {
        return _.chain(data)
            .sum()
            .divide(data.length)
            .round()
            .value();
    }

    render() {
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} style={{ strokeWidth: 1.5, stroke: '#336aff'}} />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div className="label-x">{this.average(this.props.data)} {this.props.units}</div>
            </div>
        );
    }
}

Chart.propTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.string,
    units: PropTypes.string,
}
