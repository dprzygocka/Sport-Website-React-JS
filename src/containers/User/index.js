import React, { useEffect } from 'react';
import request from "../../utils/request";
import 'bootstrap/dist/css/bootstrap.css';


 class UserData extends React.Component{
    constructor(props){
        super(props);
        this.retriveUser = this.retriveUser.bind(this);

        this.state ={
        user : {
            "userId": -1,
            "firstName": " ",
            "lastName": " ",
            "email": " ",
            "age": -1,
            "gender": " ",
            "phone": " "
        }
    }}
    
    componentDidMount(){
        this.retriveUser(this.props.user_id);
    }

    retriveUser(user_id){
        //this.setState({user : UserData.getUser(user_id)});
        request(`http://localhost:8181/api/profiles/user/`+ user_id, { 
            method : 'get'
        }).then(response => {
            console.log(response);
            this.setState({ 
            user:{
                userId : response.userId,
                firstName : response.firstName,
                lastName : response.lastName,
                email : response.email,
                age : response.age,
                gender : response.gender,
                phone : response.phone
            }
            })
        }).catch(error => {
            console.log('error: ', error)
            throw error;
        })
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                        <div className='col-md-6'>
                            <table className='table table-hover'>
                                <tbody>
                                        {Object.keys(this.state.user)
                                        .map(name => { return(
                                        <tr>
                                            <th scope="row"></th>
                                            <td>{name}</td>
                                            <td>{this.state.user[name]}</td>
                                        </tr>);
                                        })} 
                                </tbody>
                                
                            </table>
                        </div>
                </div>
            </div>
        );
    }
}
export default UserData;
