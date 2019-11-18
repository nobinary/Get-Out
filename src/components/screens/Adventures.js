import React, {Component} from 'react'
import './adventures.css'
import data from './../../mockdata.json'
import {Card} from './../../common/index'

export default class Adventures extends Component {
    constructor() {
        super()
        this.state = {
            adventures: [],
            adventuresToDelete: {},
            toDelete: false,
        }
    }

    componentDidMount() {
        this.setState({adventures: data})
    }

    renderAdventures = () => {
        const {history} = this.props
        console.log(this.state.adventures)
        return this.state.adventures.map((item) => (
            <Card 
            key={item.RecAreaID}
            name={item.RecAreaName}
            // description={item.RecAreaDescription}
            // activity={item.activity.activityname}
            // imgUrl={item.media[0].url}
            history={history}
            />
        ))
    }

    render() {
        return (
            <div>
                <main >
                {this.renderAdventures()}
                </main>

            </div>
        )
    }

    // className="adventure_container"




}

