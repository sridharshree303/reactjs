const initialState = {
    name : 'Mark',
    score : 77
}

export default function PlayerTwoReducer(state=initialState,action){
    const {type,payload} =  action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;
    }
}