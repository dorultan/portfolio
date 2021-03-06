import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UpdatePostView from '../components/updatePostViewDashboardComponent';
import diff from 'object-diff';
import {deletePost, updatePost, fetchPostById} from '../actions';

class UpdatePostContainer extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		const {match: {params: {post}}} = this.props;
		this.props.fetchPostById(post);
	}

	handleFormSubmit(formProps) {
		const post_title = this.props.post.title;

		const difference = diff( this.props.post, formProps);

		this.props.updatePost(this.props.post._id, post_title, difference);
		this.props.history.goBack();
	}

	render() {
		if(!this.props.post) {

			return (
					<h1>Loading ...</h1>
			)
		}

		else {

		// const newPost = this.props.post._id !== this.props.match.params.post ? false : true;

			// if(!newPost) {
			// 	return (
			// 		<h1>Loading ...</h1>
			// 	)
			// }

			// else {
				return (
					<UpdatePostView {...this.props} handleFormSubmit={this.handleFormSubmit}/>
				)
			}
		// }
	}
}

const mapStateToProps = ({post}) => {

	return {
		post
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		deletePost,
		updatePost,
		fetchPostById
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(UpdatePostContainer);
