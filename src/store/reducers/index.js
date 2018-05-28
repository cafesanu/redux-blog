import { combineReducers } from 'redux';
import { weatherReducers } from '@app/store/reducers/weather.reducer';

export const rootReducer = combineReducers({
    weather: weatherReducers,
});
