const intialState = {
    name : 'Chandhu',
    score : 80
}

export default function PlayertwoReducer(state=intialState,action){
    const {type,payload} = action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state
    }
}