let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
    users: [],
    loggedInUser: localLoggedinUser ,
    cartItems: [],
    singleUser: '',
    userCount: null
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'COUNT_USERS':
            return { ...state, userCount: action.number[0]['total'] };
        case 'SET_USER':
            return { ...state, loggedInUser: action.user };
        case 'GET_USER':
            return { ...state, singleUser: action.userId };
        case 'SET_USERS':
            return { ...state, users: action.users };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };
        case 'UPDATE_USER':
            return{
                ...state,
                users: state.users.map(user=>(action._user._id === user._id)?action._user : user )
            }
        

        default:
            return state
    }
}



