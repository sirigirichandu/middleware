import { FETCH_USERS } from './type'
import axios from 'axios';

export function fetchUserList(){

  //using jsonplaceholder to fetch data from the backend
  const REQUEST = axios.get('https://jsonplaceholder.typicode.com/users');

  return{
    type: FETCH_USERS,
    payload: REQUEST
  }
}
