import React from 'react';
class ProfileStatus extends React.Component {

state = {
    editMode:false, 
    status:this.props.status
}

componentDidUpdate(prevProps,prevState){
    if(prevProps.status !== this.props.status){
        this.setState({
            status:this.props.status
        })
    }
}

activeEditMode=()=>{
    this.setState({
        editMode:true
    });
}

deactiveEditMode=()=>{
    this.setState({
        editMode:false
    });
    this.props.updateStatus(this.state.status)
}

onStatusChange=(e)=>{
    this.setState({
       status: e.currentTarget.value
    })
}

render(){
    return(
        <>
        {this.state.editMode?
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status}></input>
        </div>
        :
        <div>
            <span onDoubleClick={this.activeEditMode}>status:{this.props.status}</span>
        </div>
        }
        </>
    )
}
}

export default ProfileStatus