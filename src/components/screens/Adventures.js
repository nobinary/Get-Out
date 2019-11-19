import React, {Component} from 'react'
import './Adventures.css'
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

    handleClick(event) {

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
            imgUrl={item['MEDIA'][0] ? item['MEDIA'][0].URL : 'http://www.google.com'}
            history={history}
            // onClick={event.handleClick()}
            />
        ))
    }

    render() {
        return (
            <div>
                <main className="adventure_container">
                {this.renderAdventures()}
                </main>

            </div>
        )
    }

    // className="adventure_container"




}

