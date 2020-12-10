

const Activity = props => {
    return(
        <div>
            <h2>{props.activity.activityName}</h2>
            <ul>
                <li>Id: {props.activity.activityId}</li>
                <li>{props.activity.match ? ('Match'):('Training')}</li>
                <li>Capacity: {props.activity.capacity}</li>
                <li>Description:<br/>{props.activity.description}</li>
                <li>{props.activity.isCancelled ? ('Cancelled'):('Active')}</li>
                <li>Creator: {`${props.activity.creator.firstName} ${props.activity.creator.lastName}`}</li>
                <li>Phone: {props.activity.creator.phone}</li>
                <li>Start: {props.activity.reservation.startAt}</li>
                <li>End: {props.activity.reservation.endAt}</li>
                <li>Location: {props.activity.reservation.location.courtName}</li>
                <li>Team: {props.activity.team.teamName}</li>
            </ul>
        </div>
    )
}


export default Activity;