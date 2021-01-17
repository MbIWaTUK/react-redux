import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div className="header">
        {props.isAuth ? (
          <div>
            email: {props.email}, login:{props.login},
            <button onClick={props.logout}>logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>login</NavLink>
        )}
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
};

export default Header;
