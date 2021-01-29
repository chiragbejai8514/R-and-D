const redux = require('redux');
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;


const BUY_CAKE = 'BUY_CAKE';
const BUY_JUICE = 'BUY_JUICE';




//Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyJuice() {
    return {
        type: BUY_JUICE,
        info: 'First Redux Action'
    }
}

//reducer takes previousState and action ,gives back new state

const initialCake = {
    noOfCakes: 10
}

const initialJuice = {
    noOfJuice: 10
}

const reducerJuice = (state = initialJuice, action) => {
    switch (action.type) {
        case BUY_JUICE: return {
            ...state,
            noOfJuice: state.noOfJuice - 1
        }
        default: return state
    }
}

const reducerCake = (state = initialCake, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             noOfCakes: state.noOfCakes - 1
//         }
//         case BUY_JUICE: return {
//             ...state,
//             noOfJuice: state.noOfJuice - 1
//         }
//         default: return state
//     }
// }


const rootReducer = combineReducer({
    cake: reducerCake,
    juice: reducerJuice
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState());//gets initial state
const unsubscribe = store.subscribe(() => { });//every time it updates this is run
store.dispatch(buyCake())//displatch of buyCAke
store.dispatch(buyJuice())//dispatch of buyJuice

store.dispatch(buyCake())
unsubscribe()