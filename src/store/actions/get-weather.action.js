export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_FULFILLED = 'GET_WEATHER_FULFILLED';
export function getWeatherAction(city) {
    return {
        type: GET_WEATHER,
        payload: city,
    };
}

export function getWeatherFulfilledAction(response) {
    return {
        type: GET_WEATHER_FULFILLED,
        payload: response,
    };
}
