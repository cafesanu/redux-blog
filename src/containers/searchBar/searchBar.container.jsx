import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeatherAction} from '@app/store/actions/get-weather.action';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value,
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.getWeatherAction(this.state.term);
        this.setState({
            term: '',
        });
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={(event) => this.onFormSubmit(event)}
            >
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapStatetoProps(state) {
    return state;
}

// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({
        getWeatherAction,
    }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export const SearchBarContainer = connect(mapStatetoProps, mapDispatchToProps)(SearchBar);
