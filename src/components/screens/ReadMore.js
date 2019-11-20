import React, {Component} from 'react'
import LargeCard from '../../components/AdventureCard/LargeCard'
import {NavLink} from 'react-router-dom'
import data from './../../mockdata.json'

export default class ReadMore extends Component {
    constructor(props) {
        super(props)
        this.state ={
            adventure: [],
            
        }
    }
    
    componentDidMount() {
        this.setState({
            adventure: data, 
            // cardIndex: props.key
        })
        
    }

    renderAdventure = () => {
        const {history} = this.props
        console.log(this.state.adventure)
        return (
            <div className="adventureCards_container">
            <img className="card_photo" src={this.props.imgUrl} alt="adventure" />
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            <NavLink exact activeClassName='active' to='/readmore'>
            <button>Read More</button>
            </NavLink>
        </div>
            
        )
    }

    render() {
        return (
            <div>
                <main className="adventure_container">
                {this.renderAdventure()}
                </main>

            </div>
        )
    }
}