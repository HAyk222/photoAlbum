import React, { Component } from 'react';
import Load from '../images/loading.gif';
import { NavLink, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';


export default class Albums extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : [],
			isLoaded : false,
		}
	}

	static propTypes = {
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
  	fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/albums`)
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
		return(
			<div className="list">
				<h2>
					<Link to={`/users/${this.props.match.params.id}`} className="title">Albums</Link>
				</h2>
				{ !isLoaded ? <img src={Load} alt="loading" className="loading" /> : 
					data.map( (item, index) => {
					return (
						<NavLink 
							key={index} 
							to={{
								pathname:`/users/${item.userId}/albums/${item.id}`,
								state: { 
									title:`${item.title}` 
								}
							}} 
							activeClassName="active" >
							{item.title}
						</NavLink>
					);
				} )}
			</div>
		);
	}
}

