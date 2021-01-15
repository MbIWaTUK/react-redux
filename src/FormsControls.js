export const TextArea = ({
    input,
  label,
  type,
  meta: { touched, error, warning }
}) =>{
    return(
        <div>
            <textarea {...input} type={type}/>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}

export const Input = ({
    input,
  label,
  type,
  meta: { touched, error, warning }
}) =>{
    return(
        <div>
            <input {...input} type={type}/>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}