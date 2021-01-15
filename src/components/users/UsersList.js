import React from "react"
import * as axios from "axios"
import userDefault from '../../logo.svg'

const UsersList = (props) => {

  React.useEffect(() => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(res => props.setUsers(res.data.items))
    }
  })

  return (
    <>
      {props.users.map(u => <div key={u.id} className="users">
        <img src={u.photos.small != null ? u.photos.small : userDefault} />
        <span>{u.name}</span>
        <span>{u.status}</span>
        {u.followed === true ?
          <button onClick={() => props.unfollow(u.id)}>unfollowed</button>
          : <button onClick={() => props.follow(u.id)}>followed</button>}
      </div>)}
      <style jsx>
        {`
          .users{
            display:flex;
            justify-content: space-between;
            width:50%;
            padding:1rem;
            margin: 1rem 0;
          }
        `}
      </style>
    </>
  )
}

export default UsersList