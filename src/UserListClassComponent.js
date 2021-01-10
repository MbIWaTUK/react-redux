import userDefault from "./logo.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
const KEY = "b1186a4f-cbbb-4035-a7df-e7b360e29e9f";

const UsersListClassComponent = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleFollow = (id) => {
    props.setFollowButtonDisabled(true, id);
    axios
      .post(
        "https://social-network.samuraijs.com/api/1.0/follow/" + id,
        {},
        {
          headers: {
            "API-KEY": KEY,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          props.follow(id);
        }
        props.setFollowButtonDisabled(false, id);
      });
  };

  const handleUnFollow = (id) => {
    props.setFollowButtonDisabled(true, id);
    axios
      .delete("https://social-network.samuraijs.com/api/1.0/follow/" + id, {
        headers: {
          "API-KEY": KEY,
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          props.unfollow(id);
        }
        props.setFollowButtonDisabled(false, id);
      });
  };
  return (
    <>
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={() => props.onChangeActivePage(p)}
            className={`${props.currentPage === p ? "activePage" : "page"}`}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => (
        <div key={u.id} className="users">
          <NavLink to={"/profile/" + u.id}>
            <img
              src={
                u.photos && u.photos.small != null
                  ? u.photos.small
                  : userDefault
              }
              style={{ width: "100px" }}
            />
          </NavLink>
          <span>{u.name}</span>
          <span>{u.status}</span>
          {/* <span>{u.location.country} {u.location.city}</span> */}
          {u.followed === true ? (
            <button
              disabled={props.followButtonDisabled.some((f) => f === u.id)}
              onClick={() => handleUnFollow(u.id)}
            >
              unfollowed
            </button>
          ) : (
            <button
              disabled={props.followButtonDisabled.some((f) => f === u.id)}
              onClick={() => handleFollow(u.id)}
            >
              followed
            </button>
          )}
        </div>
      ))}
      <style jsx>
        {`
          .users {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            padding: 1rem;
            margin: 1rem 0;
          }
          .activePage {
            font-weight: bold;
            padding: 0.5rem;
          }
          .page {
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default UsersListClassComponent;
