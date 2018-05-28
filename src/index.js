import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

import {App} from '@app/components/app/app.component';
import { getWeatherEpic } from '@app/store/epics/get-weather.epic';
import {rootReducer} from '@app/store/reducers';
import {getWeatherAction} from '@app/store/actions/get-weather.action';

const rootEpic = combineEpics(
    getWeatherEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware)
));

store.dispatch(getWeatherAction('new york'))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.querySelector('.container')
);
