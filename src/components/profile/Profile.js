import React from "react";
import userDefault from '../../logo.svg'
import Preloader from "../../Preloader";
import {  useRouteMatch } from "react-router-dom"

const Profile = (props) => {
  let areaRef = React.useRef()
  let btnRef = React.useRef()
  let location = useRouteMatch()

  let handleAddPost = () => {

    props.addPost()
    // let action = handleAddPostActionCreate()
    // dispatch(action)
  }

  let handleChangeMessage = () => {
    let text = areaRef.current.value
    props.updateText(text)
    // let action = handleChangeMessageActionCreate(text)
    // dispatch(action)
  }

  if (!props.profilePage.user) {
    return <Preloader />
  }
  return (
    <>
      <p>INFO:</p>
      <img src={props.profilePage.user.photos && props.profilePage.user.photos.small ? props.profilePage.user.photos.small : userDefault} />
      <ul>
        <li>{props.profilePage.user.aboutMe}</li>
        {/* <li>{props.profilePage.user.contacts.facebook}</li> */}
        <li>{props.profilePage.user.fullName}</li>
        <li>{props.profilePage.user.lookingForAJob === true ? "в поиске работы" : "нашел работу"}</li>
        <li>{props.profilePage.user.lookingForAJobDescription}</li>
        <li>{props.profilePage.user.userId}</li>
      </ul>
      <textarea ref={areaRef} onChange={handleChangeMessage} value={props.profilePage.newPostText} />
      <button onClick={handleAddPost} ref={btnRef}>Click</button>
      <ul>
        {props.profilePage.posts.map(s => (
          <li key={s.id}>{s.message}</li>
        ))}
      </ul>
    </>
  )
}

export default Profile