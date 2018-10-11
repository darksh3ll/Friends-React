import React, { Component } from 'react'
import json from "./Liste.json"

class ListFriend extends Component {

    render () {

        return (
            <div>
              <ul>
                  {this.props.amis.map((ami) => {
                      return (
                          <div>
                          <li key={ami.id}>{ami.name}</li>
                              <button onClick={()=>this.props.deleteFriends(ami)}>🗑</button>

                          </div>

                      )
                  })}
              </ul>
            </div>
        )
    }
}

export default ListFriend