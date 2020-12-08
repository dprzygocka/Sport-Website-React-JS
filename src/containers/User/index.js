import React, { useEffect } from 'react';
import UserData from './../../api/users.js';


 class UserData extends React.Component{
    constructor(props){
        this.retriveUser = this.retriveUser.bind(this);

        this.state ={
        user : {
            "userId": -1,
            "firstName": "",
            "lastName": "",
            "email": "",
            "age": -1,
            "gender": "",
            "phone": ""
        }
    }}
    
    componentDidMount(){
        this.retriveUser(this.props.user_id);
    }

    retriveUser(user_id){
        //this.setState({user : UserData.getUser(user_id)});
        User.getUser(user_id).then(response => this.setState({ user:{
            userId : response.data.user_id,
            firstName : response.data.firstName,
            lastName : response.data.lastName,
            email : response.data.email,
            age : response.data.age,
            gender : response.data.gender,
            phone : response.data.phone
        }})).catch(error => {
            console.log('error: ', error)
            throw error;
        })
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{this.state.user.firstName + " " + this.state.user.lastName}</h1>
                    </div>
                    <div class Name='row'>
                        <div className='col-md-6'>
                            <table>
                                <tr>
                                    {Object.key(this.state.user).forEach(key => {
                                        <td>{key}</td>
                                    })}
                                </tr>
                                <tr>
                                {Object.key(this.state.user).forEach(key => {
                                        <td>{user.key}</td>
                                    })}
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
export default UserData;
