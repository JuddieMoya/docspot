import getUsersReducer from '../reducers/users'
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const axios = require('axios')

const fetUsersRequest= ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetUsersSuccess= users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetUsersFailure= error =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
const fetchUsers =() =>{
    return function (dispatch){
        dispatch(fetUsersRequest())
axios.get('https://kwitter-api.herokuapp.com/users')
.then (response=>{
    const usersData =response.data.users.map(user => user.username)
dispatch(fetUsersSuccess(usersData))
})
.catch(error =>{
dispatch(fetUsersFailure(error.message))
})
    }
}
export const actions = {
    fetchUsers
  }
const store = createStore(getUsersReducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())