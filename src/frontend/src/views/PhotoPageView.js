// File: ./frontend/src/views/PhotoPageView.js

import React from 'react'
import '../App.css'

export default class PhotoPageView extends React.Component {
	render() {
		return <div><main><h2>PhotoPageView</h2>
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
	}
}