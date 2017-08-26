// File: ./frontend/src/views/PhotoPageView.js

import React from 'react'
import { Link } from 'react-router-dom'
import { gql, graphql } from 'react-apollo'
import '../App.css'

const query = gql`	
{
	allMessages {
		id, message
	}
}
`

class PhotoPageView extends React.Component {
	render() {
		let { data } = this.props
		if (data.loading || !data.allMessages) {
			return <div>Loading ...</div>
		}
		return (
			<div>
			<main>
				<h2>PhotoPageView</h2>
				{data.allMessages.map(item => (
					<p key={item.id}>
						<Link to={'/messages/${item.id}/'}>
							{item.message}
						</Link>
					</p>
				))}
					<a href="a" title="Post 1">
					<article>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit inventore quo facere molestias doloribus, soluta ipsa.</p>
						<figure>
							<img src="http://via.placeholder.com/480x360" alt="image-1"></img>
							<figcaption>Post 1</figcaption>
						</figure>
					</article>
					</a>
					<a href="a" title="Post 2">
					<article>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit inventore quo facere molestias doloribus, soluta ipsa.</p>
						<figure>
							<img src="http://via.placeholder.com/400x360" alt="image-2"></img>
							<figcaption>Post 2</figcaption>
						</figure>
					</article>
					</a>
			</main>

			</div>
		)
	}
}

PhotoPageView = graphql(query)(PhotoPageView)
export default PhotoPageView