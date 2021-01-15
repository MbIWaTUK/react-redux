import React from "react";
import userDefault from '../../logo.svg'
import Preloader from "../../Preloader";
import ProfileStatus from "./ProfileStatus"
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators"
import { TextArea } from "../../FormsControls";

const maxLengthCreator10 =maxLengthCreator(10)
const Profile = (props) => {

  let handleAddPost = (values) => {
    props.addPost(values.message)
  }


  if (!props.profilePage.user) {
    return <Preloader />
  }
  return (
    <>
      <p>INFO:</p>
      <img src={props.profilePage.user.photos &&
       props.profilePage.user.photos.small ?
         props.profilePage.user.photos.small 
         :userDefault} style={{width:"200px"}}/>
         <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <ul>
        <li>{props.profilePage.user.aboutMe}</li>
        <li>{props.profilePage.user.fullName}</li>
        <li>{props.profilePage.user.lookingForAJob === true ? "в поиске работы" : "нашел работу"}</li>
        <li>{props.profilePage.user.lookingForAJobDescription}</li>
        <li>{props.profilePage.user.userId}</li>
      </ul>
      
      <ReduxMessageFormSend onSubmit={handleAddPost}/>
      <ul>
        {props.profilePage.posts.map(s => (
          <li key={s.id}>{s.message}</li>
        ))}
      </ul>
    </>
  )
}

const MessageFormSend=(props)=>{
  const { handleSubmit } = props
  return(
      <form onSubmit={handleSubmit}>
        <Field name={"message"} component={TextArea} validate={[required,maxLengthCreator10]}/>
        <button>Send</button>
      </form>
  )
}
const ReduxMessageFormSend=reduxForm({
  // a unique name for the form
  form: 'messageSend'
})(MessageFormSend)

export default Profile