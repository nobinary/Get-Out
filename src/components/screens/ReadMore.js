import React, {Component} from 'react'
import LargeCard from '../../components/AdventureCard/LargeCard'
import data from './../../mockdata.json'

export default class ReadMore extends Component {
    constructor(props) {
        super(props)
        this.state ={
            adventure: [],
            key: 0
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
            <LargeCard 
            // key={this.state.adventure[{cardIndex}].RecAreaID}
            // name={this.state.adventure.RecAreaName}
            // // description={item.RecAreaDescription}
            // // activity={item.activity.activityname}
            // // imgUrl={this.state['MEDIA'][0] ? this.state['MEDIA'][0].URL : 'http://www.google.com'}
            // history={history}
            />
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