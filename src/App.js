import React, { Component } from "react";
import "./App.css";
import Students from "./Students";
import ListeFriend from "./ListFriend"
class App extends Component {
  state = {
    friendlist: []
  };
  addfriend(friend) {
    let currentFriend = this.state.friendlist;
    currentFriend.push(friend);
    this.setState({ friendlist: currentFriend });
  }
  deleteFriends = (notfriend) => {
       let currentFriends = this.state.friendlist;
      const indexOfNotFriend = currentFriends.indexOf(notfriend);
      currentFriends.splice(indexOfNotFriend,1);
      this.setState({friendlist:currentFriends})
  };
  render() {
    return (
      <div className="App">
      <Students addfriend={(friend) => this.addfriend(friend)} />
      <ListeFriend
          amis = {this.state.friendlist}
          pasAmis = {this.state.friendlist}
          deleteFriends={notfriend => this.deleteFriends(notfriend)}

      />
      </div>
    );
  }
}

export default App;
