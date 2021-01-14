import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"

const Dialogs = (props) => {

  return (
    <>
      <span>DIALOGS</span>
    </>
  )
}

export let DialogsRedirectComponent = WithAuthRedirect(Dialogs)

// (props) =>{
//   if(!props.isAuth) return <Redirect to={"/login"} />
//   return <Dialogs {...props}/>
// }

export default Dialogs