import {GET_WEATHER_FULFILLED} from '@app/store/actions/get-weather.action';

export function weatherReducers(state = [], action) {
    switch (action.type) {
    case GET_WEATHER_FULFILLED:
        return [action.payload.response, ...state];
    default:
        return state;
    }
}
