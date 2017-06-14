export default function fetchRepository(scopeName) {
  return (dispatch, getState, api) => {
    const { fetchRepository } = api

    fetchRepository(scopeName).then( (repository) => {
       let res = repository;
       res._isReady = false;
      
             dispatch({
              type: 'FETCH_REPOSITORY_SUCCESS',
              data: res
            })
      
 
      
    })
  }
}