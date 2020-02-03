export default function(state ={}, action) {
    switch(action.type) {
        case "LOAD_BOOKS":
            return {
                ...state,
                searchResult: action.payload.result,
                searchQuery: action.payload.search
            }
        default:
            return state;
    }
}