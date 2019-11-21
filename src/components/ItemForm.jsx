import React from 'react'
import {Input, Button} from './Input'
import './ItemsForm.css'

// name, description, image_url, activities, link_url 

const ItemForm = (props) => {
	const { onChange, onSubmit } = props
	const { name, description, image_url, rating } = props.formData
	return (
		<form className='form' onSubmit={(e) => onSubmit(e)}>
			<Input
				name='name'
				value={name}
				required={true}
				placeholder='Name'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='description'
				value={description}
				required={true}
				placeholder='Description'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='image_url'
				value={image_url}
				required={true}
				placeholder='Image URL'
				onChange={(e) => onChange(e)}
			/>
			<Input
                ///ARRAY?
				name='activites'
				value={rating}
				required={true}
				placeholder='Activities'
				onChange={(e) => onChange(e)}
			/>
            	<Input
				name='link_url'
				value={rating}
				required={true}
				placeholder='Official Link'
				onChange={(e) => onChange(e)}
			/>
			<Button className="form_button" title='submit' color='primary' />
		</form>
	)
}
export default ItemForm
