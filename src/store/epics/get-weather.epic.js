import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap, map } from 'rxjs/operators';
import {
    GET_WEATHER,
    getWeatherFulfilledAction,
} from '@app/store/actions/get-weather.action';


const API_KEY = 'a80cbffa8f2c7d147ce64db163a3a977';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// epic
export function getWeatherEpic(action$) {
    return action$.ofType(GET_WEATHER)
        .pipe(
            mergeMap((action) => {
                const URL = `${ROOT_URL}&q=${action.payload},us`;
                return ajax.get(URL)
                    .pipe(
                        map(data => getWeatherFulfilledAction(data))
                    );
            })
        );
}
