import React, {Component} from 'react';
import './Post.css';

let elems = {
	header: 'dinos be dinoin',
	author: 'Richard Scary',
	content: 'THIS IS A POST ABOUT DINOS'
}

let commentStuff = [
  {
    commentHeader: 'Rawr',
    commentBody: 'Dinobama says hi!'
  },
  {
    commentHeader: 'Radasaurus',
    commentBody: 'RAWRRAWR'
  }
]

class Header extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<h3>{this.props.author}</h3>
			</div>
		)
	}
}

class Content extends Component {

	render() {
		return (
			<p>{this.props.content}</p>
		)
	}
} 

class Comment extends Component {
	render() {
		return (
			<div>
				<h5>{this.props.commentHeader}</h5>
				<p>{this.props.commentBody}</p>
			</div>
		)
	}
}

class Commentpost extends Component {
	render() {
		let comments = [];
		commentStuff.forEach(function(comment, index) {
			comments.push(<Comment commentHeader={comment.commentHeader} commentBody={comment.commentBody}/>);
		})
		return (
			<div>
				{comments}
			</div>
    	)
  	}	
}

class App extends Component{
	constructor(props) {
		super(props)
		this.state ={
			body: ""
		}
		this.changeBody = this.changeBody.bind(this)
	}
	changeBody(e) {
		let bodyValue = prompt("Enter body text")
		this.setState({body: bodyValue})
	}
	render() {
		return (
			<div>
				<Header header={elems.header} author={elems.author} />
				<Content content={this.state.body} />
				<input
					type="button"
					value="Add body content"
				 	onClick={this.changeBody}
				/>
				<Commentpost />
			</div>
		)
	}
}

export default App;

