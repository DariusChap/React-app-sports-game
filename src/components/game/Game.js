import React, { Component } from 'react';
import ScoreBoard from '../scoreboard/Scoreboard';
import Team from '../team/Team';
import ShotSound from '../../assets/audio/Basketball_Bounce_Sound_Effect.mp3';
import PointSound from '../../assets/audio/Basketball_Net_Swish_Sound_Effect.mp3';
import ResetSound from '../../assets/audio/Pacman_Eating_Cherry_Sound_Effect.mp3';


class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shots: 0,
                points: 0

            },
            awayTeamStats: {
                shots: 0,
                points: 0

            }
        }
        this.shotSound = new Audio(ShotSound)
        this.pointSound = new Audio(PointSound)
        this.resetSound = new Audio(ResetSound)
        // Sounds from soundfxcenter.com
    }
    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let points = this.state[teamStatsKey].points
        this.shotSound.play()


        if (Math.random() > 0.5) {
            points += 1

            setTimeout(() => {
                this.pointSound.play()
            }, 100);


        }


        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1, points
            }
        }))
    }

    resetGame = () => {
        this.setState((state, props) => ({
           resetCount: state.resetCount + 1, 
           homeTeamStats: {
               shots: 0,
               points: 0
           },
           awayTeamStats: {
               shots: 0,
               points: 0
           } 
        }));
            this.resetSound.play()
            
    }

    render() {
        return (
            <div className="Game">    
            <ScoreBoard 
            awayTeamStats={this.state.awayTeamStats}
            homeTeamStats={this.state.homeTeamStats}
            
            />
                <h1>Welcome to {this.props.venue}</h1>
                <div className="stats">
                    <Team name={this.props.awayTeam.name}
                        logo={this.props.awayTeam.logoSrc}
                        stats={this.state.awayTeamStats}
                        shotHandler={() => this.shoot('away')}
                    />

                    <div className="versus">
                        <h2>VS</h2>
                        <div>
                            <strong>Resets</strong> {this.state.resetCount}
                            <button onClick={this.resetGame}>Reset Game</button>
                        </div>
                    </div>

                    <Team name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />
                </div>
            </div>
        );

    }

}

export default Game;