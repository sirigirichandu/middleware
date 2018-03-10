//All actions are processed thru middlewares. midlewares are functions that can log, modify, stop or simply by pass the actions to reducers
//reducers are fucntions that returns the piece of an application state
//Middlewares are like gate keepers to API requests to fetch or Post data to backend

export default function ( {dispatch} ){
  return next => action =>{
    //If action doesnot have any payload, or payload doesnot have .then property,
    //we dont care about action, we just send
    if(!action.payload || !action.payload.then){
      return next(action)
    }

    //example to by pass the action which doesnot have any payload
    //console.log('action doesnot have any payload');

    action.payload
      .then( response => {
        //create a new action with old type, but replace the promise with response
        const newAction = { ...action, payload:response }
        dispatch(newAction)
      })
  }
}
