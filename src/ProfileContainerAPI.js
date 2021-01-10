import Profile from "./Profile";
import React from "react"
import * as axios from "axios"

const KEY = "b1186a4f-cbbb-4035-a7df-e7b360e29e9f"

class ProfileContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
      headers: {
        'API-KEY': KEY
      }
    }).then(res => {
      this.props.setUserProfile(res.data)
    })
  }
  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

export default ProfileContainerAPI;