import profileReducer from './profileReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "qwerty", likeCount: 10 },
        { id: 2, message: "sssss", likeCount: 5 }
      ],
      newPostText: ""
    }
  },
  getState() {

    return this._state
  },
  render() {

  },
  subscribe(observer) {
    this.render = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this.render()
  }
}

export default store