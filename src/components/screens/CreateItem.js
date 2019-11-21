import React, {Component} from 'react'
import ItemForm from './../ItemForm'


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
  }

//   createFood = async (foodData) => {
// 	try {
// 		const resp = await api.post('/food', foodData)
// 		return resp
// 	} catch (error) {
// 		throw error
// 	}

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

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