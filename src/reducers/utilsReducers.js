export default function(state ={}, action) {
    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "RESET_LOADING":
            return {
                ...state,
                isLoading: false
            }
        case "SHOW_ERROR":
            return {
                ...state,
                errorMessage: action.payload
            }
        case "HIDE_ERROR":
            return {
                ...state,
                errorMessage: ""
            }
        default:
            return state;
    }
}