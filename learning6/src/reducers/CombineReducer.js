import {combineReducers} from 'redux';
import PlayerOneReducer from './PlayerOne';
import PlayerTwoReducer from './PlayerTwo';

const reducer = combineReducers({
    playerone : PlayerOneReducer,
    playertwo : PlayerTwoReducer
})

export default reducer;