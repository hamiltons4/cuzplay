// File: ./frontend/src/views/CreateView.js

import React from 'react'
import { gql, graphql } from 'react-apollo'

const query = gql`
{
	currentUser {
		id
	}
}
`

class CreateView extends React.Component {
	componentWillUpdate(nextProps) {
		console.log(nextProps.data.currentUser);
		if (!nextProps.data.loading && nextProps.data.currentUser === null) {
			//window.location.replace('/login/')
			console.log(nextProps.data.currentUser);
		}
	}
	render() {
		let { data } = this.props
		if (data.loading) {
			return <div>Loading... </div>
		}
		return <div>CreateView</div>
	}
}

CreateView = graphql(query)(CreateView)
export default CreateView