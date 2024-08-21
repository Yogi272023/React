import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "Dummy",
                location: "Default",
            }
        }

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
    }
  render(){
    const {name, location,avatar_url}=this.state.userInfo;
    
    return(
        <div className="user-card">
          <div> LoggedInUser: 
            <UserContext.Consumer>
              {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1> }
            </UserContext.Consumer>
            </div>
          <img src={avatar_url}/>
          <h2> Name: {name}</h2>
          <h3> Address: {location}</h3>
          <h4> Contact: 35648634</h4>
        </div>
    )
  }
}

export default UserClass;