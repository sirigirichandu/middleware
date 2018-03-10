import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component{

  componentWillMount(){
      this.props.fetchUserList();
  }

  _userList(user){
    return(
      <div key={user.name} className="col-sm-4">
        <div className="card">
          <div className="card-body" style={{padding:"8px", margin:"10px"}}>
            <div className="card-title">name : {user.name}</div>
            <p className="card-text">Comapny : {user.company.name}</p>
            <a href="#" className="btn btn-primary">{user.email}</a>
          </div>
        </div>
      </div>
    )
  }

  render(){
    console.log(this.props)
    return(
      <div className="row">
        <h1>User Details:</h1>
        {this.props.users.map(this._userList)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{ users : state.usersList }
}

export default connect(mapStateToProps, actions)(UserList);
