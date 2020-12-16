import { connect } from 'react-redux'
import selectors from './selectors'
import React, { useEffect } from 'react';
import request from "../../utils/request";
import * as actions from './actions'
import * as _ from 'lodash'
import Activity from '../../components/Activity'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import { forEach, keys } from 'lodash';
//import { getActivities } from "../../api/sport/activities";


class Dashboard extends React.Component{

    constructor(props) {
        super(props);

        this.retrieveActivities = this.retrieveActivities.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.updateSort = this.updateSort.bind(this);

        this.state = {
            activities: [],
            currentPage: '',
            totalPages: '',
            totalActivities: '',
            page: '0',
            size: '5',
            sort: ['activityId,desc'],
            pageSizes: [5,10,15,20],
            //sortingOptions: new Map([['Id', 'activityId'], ['Match', 'match.matchesId'], ['Name', 'activityName'], ['Capacity', 'capacity'], ['Description', 'description'], ['Cancelled', 'isCancelled', 'creator.lastName', 'reservation.startAt', 'reservation.endAt','reservation.location.courtName','team.teamName']])
            //sortingOptions: new Map([['Id', 'activityId'], ['Match', 'match.matchesId'], ['Name', 'activityName'], ['Capacity', 'capacity'], ['Description', 'description'], ['Cancelled', 'isCancelled'], ['Creator', 'creator.lastName'], ['Start', 'reservation.startAt'], ['End', 'reservation.endAt'], ['Location', 'reservation.location.courtName'], ['Team', 'team.teamName']])
            sortingOptions: {
              'Id': 'activityId',
              'Match': 'match.matchesId',
              'Name': 'activityName',
              'Capacity': 'capacity',
              'Description': 'description',
              'Cancelled': 'isCancelled',
              'Creator': 'creator.lastName',
              'Start': 'reservation.startAt',
              'End': 'reservation.endAt',
              'Location': 'reservation.location.courtName',
              'Team': 'team.teamName'
            }
          }
    }

    componentDidMount(){
        this.retrieveActivities(this.state.page, this.state.size, this.state.sort.join(','));
    }

    retrieveActivities = (page, size, sort) => {
      request(`${process.env.REACT_APP_SERVER}/activities?page=` + page + "&size=" + size + "&sort=" + sort, {
          method: 'get'
      }).then(response => { //this is the response from web server
        this.setState({
          activities: response.activities,
          currentPage: response.currentPage,
          totalPages: response.totalPages,
          totalActivities: response.totalActivities,
        });
        console.log(response.data); //print in console, just for testing
      })
      .catch(e => {
        console.log(e);
      });
    }

    changePage(number){
      this.state.page = this.state.currentPage + number;
      if (this.state.page === this.state.totalPages) {
        this.state.page = this.state.totalPages-1;
      }
      if (this.state.page < 0) {
        this.state.page = 0;
      }
      this.retrieveActivities(this.state.page, this.state.size, this.state.sort.join(','));
    }

    changePageSize(pageSize){
      this.state.size = pageSize;
      this.retrieveActivities(this.state.page, this.state.size, this.state.sort.join(','));
    }

    updateSort(key){
      console.log("key " + key);
      let option = this.state.sortingOptions[key];
      console.log("option " + option);
      let options = [];
      if (option && option.includes(",")){
        options = option.split(",");
      } else {
        options[0] = option;
      }
      console.log("options " + options);
      if(options[1] === "desc"){
        this.state.sortingOptions[key] = options[0];
        console.log("sorting option3 " + this.state.sortingOptions.key);
      } else if (options[1] === "asc") {
        this.state.sortingOptions[key] = options[0] + ",desc";
        console.log("sorting option2 " + this.state.sortingOptions.key);
      } else {
        this.state.sortingOptions[key] = options[0] + ",asc";
        console.log("sorting option1 " + this.state.sortingOptions.key);
      }
      //console.log("options2 " + options);
      this.state.sort = [];
      for (key of Object.keys(this.state.sortingOptions)){
          if (this.state.sortingOptions[key].includes(",")){
            this.state.sort.push(this.state.sortingOptions[key])
          }
        }
        console.log("Sort " + this.state.sort);
        this.retrieveActivities(this.state.page, this.state.size, this.state.sort.join(','));
      }



    /*updateSort(key, direction, checked) {
      let checkbox = document.getElementById(key + "," + direction);
      let oppositeDirection;
      let value = this.state.sortingOptions[key];
      console.log("Sort1 " + this.state.sort);
      console.log("Chcekbox " + checkbox);
      console.log("Checked " + checked);
      console.log("V " + value);
      console.log("D " + direction);
      if (direction === 'asc'){
        oppositeDirection = 'desc';
      } else {
        oppositeDirection = 'asc';
      }
      console.log("OD " + oppositeDirection);
      //console.log("CHV " + checkbox.checked);
      //console.log("CH2 " + checkbox.getAttribute("checked"));
      if(checkbox.checked){
        this.state.sort.push(`${value},${direction}`);
        if (document.getElementById(`${value},${oppositeDirection}`)){
          document.getElementById(`${value},${oppositeDirection}`).disabled = true;
        }
      } else {
        this.state.sort.splice(this.state.sort.indexOf(`${value},${direction}`));
        if (document.getElementById(`${value},${oppositeDirection}`)){
          document.getElementById(`${value},${oppositeDirection}`).disabled = false;
        }
      }
      console.log("Sort2" + this.state.sort);
    }*/

    render(){
        return (
        <div>
          {Object.keys(this.state.sortingOptions).map(key => { return(
            <Button onClick={() => this.updateSort(key)} placeholder={`${key} ${this.state.sortingOptions[key].split(',')[1] ? this.state.sortingOptions[key].split(',')[1]  : ''}`} id={`${key}`}/>);})
          }
          <br/>
         {/* {Object.keys(this.state.sortingOptions).map(key => { return(
            <Checkbox onClick={() => this.updateSort(key,'desc')} value={`${key}↓`} id={`${key},desc`}/>);})
          }*/}
          <br/>
          <Button onClick={() => this.changePage(-1)} placeholder="<-"/>
          <Button onClick={() => this.changePage(0)} placeholder={this.state.currentPage + 1}/>
          <Button onClick={() => this.changePage(1)} placeholder="->"/>
          <br/>
          {this.state.pageSizes.map((pageSize) => (
                <Button onClick={() => this.changePageSize(pageSize)} onClick="changeValue" placeholder={pageSize}/>
            ))}
            <h1>Activities!</h1>
            {this.state.activities.map((activity) => (
                <Activity activity={activity}/>
            ))}
            <br/>
          <Button onClick={() => this.changePage(-1)} placeholder="<-"/>
          <Button onClick={() => this.changePage(0)} placeholder={this.state.currentPage + 1}/>
          <Button onClick={() => this.changePage(1)} placeholder="->"/>
          <br/>
          {this.state.pageSizes.map((pageSize) => (
                <Button onClick={() => this.changePageSize(pageSize)} onClick="changeValue" placeholder={pageSize}/>
            ))}
        </div>
        )
    }
}

export default connect(selectors, actions)(Dashboard);