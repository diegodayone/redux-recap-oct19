export const loadWithThunk = searchString => {
    return async (dispatch, getState) => {
      dispatch({
        type: "SET_LOADING"
      })
  
      const response = await fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=24ad60e9`)
      const json = await response.json()
  
      if (json.Search && response.ok){
        dispatch({
          type: "LOAD_BOOKS",
          payload: {
              result: json.Search,
              search: searchString
          }
        });  
        dispatch({
          type: "RESET_LOADING"
        })
        dispatch({
          type: "HIDE_ERROR",
        })
      }
      else {
        dispatch({
          type: "SHOW_ERROR",
          payload: json.Error || "Something went wrong with the request. Try later"
        })
        dispatch({
          type: "RESET_LOADING"
        })
      }
    }
  }