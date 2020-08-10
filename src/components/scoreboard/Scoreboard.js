import React from 'react';

function ScoreBoard(props) {
    return (
        <div className="ScoreBoard">
        <div className="teamStats">
            <h3>AWAY</h3>
            <h3>{props.awayTeamStats.points}</h3>
        </div>

        <h3>SCOREBOARD</h3>

        <div className="teamStats">
            <h3>HOME</h3>
            <h3>{props.homeTeamStats.points}</h3>
        </div>
    </div>
    )
}





export default ScoreBoard;