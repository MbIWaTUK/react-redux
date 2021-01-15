import { Field, reduxForm } from "redux-form"
import { Input } from "../../FormsControls";
import { required } from "../../utils/validators/validators";

const LoginContainer=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData);
    }
    return(
        <div>
            <h2>login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm=(props)=>{
    const { handleSubmit } = props
    return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={"login"} component={Input} validate={[required]}/>   
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
        )
}

const LoginReduxForm=reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

export default LoginContainer