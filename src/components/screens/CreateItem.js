import React, {Component} from 'react'
import ItemForm from './../ItemForm'
import Axios from 'axios'


export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: '',
      description: '',
      image_url: '',
      activities: '',
      link_url: '',
      errorMsg: '',
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props)
  }

  createAdventure = async (formData) => {
    const adventures = await Axios.get(
        `https://5dd1ce6b15bbc2001448d431.mockapi.io/RecAreas`
      );
    const adventureData = {
        RecAreaName: formData.name,
        RecAreaDescription: formData.description,
        MEDIA: [{URL: formData.image_url}],
        ACTIVITY:[ {ActivityName: formData.activities }],
        LINK: [{URL: formData.link_url, LinkType: "Read More"}],
        RecAreaID: "mk" + (adventures.data.length + 1) 
    }  
	try {
		const resp = await Axios.post('https://5dd1ce6b15bbc2001448d431.mockapi.io/RecAreas', adventureData)
		return resp
	} catch (error) {
		throw error
    }
}   

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => 
  {
      console.log("Submit")
    this.createAdventure(this.state);
    e.preventDefault();
  }

  render() {
    const { name, description, image_url, activities, link_url } = this.state
    return (
      <div className="item-forms">
        <img className="add_adv" src={require('./../../media/SVG/add_adventure.svg')} alt='button'/>
        <ItemForm
          formData={{ name, description, image_url, activities, link_url }}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.errorMsg ? (
          <p className="error-text">{this.state.errorMsg}</p>
        ) : null}
      </div>
    )
  }
}