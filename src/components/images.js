import React, { Component } from 'react';
import Load from '../images/loading.gif';
import ReactRouterPropTypes from 'react-router-prop-types';

export default class Images extends Component {
	constructor(props){
		super(props);
		this.state = {
			users : [],
			isLoaded : false,
		}
	}

	static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  }

	componentDidMount () {
		this.fetchData()
	}

	componentDidUpdate (prevProps, prevState) {
		if(this.props.match.params.id !== prevProps.match.params.id){
			this.setState({ isLoaded : false })
			this.fetchData()
		}
  }

  fetchData () {
  	fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          data : json
        })
      })
  }

	render(){
		const {data, isLoaded} = this.state
		return (
			<div className="list list-album">
				<h2><span>{this.props.location.state.title}</span></h2>
				{ !isLoaded ? <img src={Load} alt="loading" className="loading" /> : 
					data.map( (item, index) => {
					return (
						<img key={index} 
							src={item.url} 
							alt={item.title} />
					);
				} )}
			</div>
		);
	}
}