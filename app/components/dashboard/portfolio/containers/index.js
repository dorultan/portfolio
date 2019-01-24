import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchSkills} from '../../profile/actions';
import {fetchProjects, createProject, deleteProject, updateProject,
		loadInitialData, resetInitialData} from '../actions';

import Portfolio from '../';
 
class PortfolioContainer extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchProjects();
		this.props.fetchSkills();
	}

	render() {

		return (
			<Portfolio {...this.props}/>
		)
	}
}

const mapStateToProps = ({projects, skills, initialData}) => {
	return {
		projects,
		skills,
		initialData
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchSkills,
		fetchProjects,
		createProject,
		deleteProject,
		updateProject,
		loadInitialData,
		resetInitialData
	}, dispatch);
} 
export default connect(mapStateToProps, bindActionCreatorsToProps)(PortfolioContainer);