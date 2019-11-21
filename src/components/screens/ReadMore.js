// import React, {Component} from 'react'
// import LargeCard from '../../components/AdventureCard/LargeCard'
// import data from './../../mockdata.json'


// export default class ReadMore extends Component {
//     constructor(props) {
// 		super(props)
// 		this.state = {
// 			adventures: []
// 		}
// 	}

// 	componentDidMount() {
// 		this.setState({ adventures: data })
// 	}

// 	renderPosts = () => {
// 		const { history } = this.props
// 		return this.state.adventures.map((item) => (
// 			<LargeCard
//             // id={item.RecAreaID}
//             // name={item.RecAreaName}
//             // imgUrl={item['MEDIA'][0] ? item['MEDIA'][0].URL : "#"}
//             // history={history}
// 			/>
// 		))
// 	}

// 	render() {
// 		return <div className='posts'>{this.renderPosts()}</div>
//     }

// }















// export default class ReadMore extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//             adventure: [],
            
//         }
//     }
    
//     componentDidMount() {
//         this.setState({
//             adventure: data, 
//             // cardIndex: 
//         })
        
//     }

//     renderAdventure = () => {
//         const {history} = this.props
//         console.log(this.state.adventure)
//         return (
//             <div className="adventureCards_container">
//             <img className="card_photo" src={this.props.imgUrl} alt="adventure" />
//             <p>{this.props.name}</p>
//             <p>{this.props.description}</p>
//             <p>{this.props.idee}</p>
//             </div>
            
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <main className="adventure_container">
//                 {this.renderAdventure()}
//                 </main>

//             </div>
//         )
//     }
// }