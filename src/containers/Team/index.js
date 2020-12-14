import React, { useEffect } from 'react';
import request from "../../utils/request";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"

class TeamData extends React.Component{
    constructor(props) {
        super(props);
        this.retrieveTeam = this.retrieveTeam.bind(this);

        this.state = {
            teams: []
        };
    }

    /*
    componentDidMount(){
        this.retrieveTeam();
    }*/

   componentDidMount(){
       const url="http://localhost:8181/api/teams"
       axios.get(url).then(response => response.data)
           .then((data) => {
               this.setState({ teams: data })
               console.log(this.state.teams)
           })
   }


    retrieveTeam() {
        request("http://localhost:8181/api/teams", {
            method : 'get'
        }).then(response => {this.setState({
            teams : response.data
        });
            console.log(response.data);
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
                            {
                                this.state.teams && this.state.teams.map(team =>
                                    { return (
                                        <tr>
                                        <th scope="row"></th>
                                        <td>{team.teamId}</td>
                                        <td>{team.teamName}</td>
                                            <td>{team.sport.sportName}</td>
                                    </tr>)}
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default TeamData;