import React from "react";

class AddContact extends React.Component
{
    state={
        name:"",
        email:""
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email ==="")
            {
                return("It should not be empty");
            }
            this.props.addContactHandler(this.state);
            this.setState({name:"", email:""})
    };
    render()
    {
        return(
            <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>this.setState({name: e.target.value})}></input>
                </div>
                <div className="field">
                <label>Email</label>
                <input type="text"  placeholder="Enter Your Email" onChange={(e)=>this.setState({email:e.target.value})}></input>
                </div>
                <button className ="ui secondary button" type="submit">Submit</button>
            </form>
        </div>
        )    
    }
}
export default AddContact;