import React from 'react';


function Team(props) {
    let shotPercentageDiv


    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.points / props.stats.shots) * 100)
        shotPercentageDiv = (
            <div>
                <strong>Shooting %: {shotPercentage} </strong>
            </div>

        )
    }

    return (
        <div className="Team">
            <h2>{props.name}</h2>

            <div className="Indentity">
                <img src={props.logo} alt={props.name} />
            </div>

            <div>
                <strong>Shots:</strong> {props.stats.shots}
            </div>

            <div>
                <strong>Points:</strong> {props.stats.points}
            </div>

            {shotPercentageDiv}


            <button onClick={props.shotHandler}>Shoot</button>
        </div>
    )

}







export default Team;