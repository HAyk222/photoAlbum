import React, { Component } from 'react';
import Load from '../images/loading.gif';
import { NavLink, Link } from 'react-router-dom';

export default class Users extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : [],
			isLoaded : false,
		}
	}

	componentDidMount () {
    fetch(`https://jsonplaceholder.typicode.com/users`)
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
				<Link to="/" className="title">Users</Link>
			</h2>
			{ !isLoaded ? <img src={Load} alt="loading" className="loading" /> :
				data.map( (item, index) => {
					return (
						<NavLink 
							key={index} 
							to={`/users/${item.id}`} 
							activeClassName="active" >
							{item.name}
						</NavLink>
					);
				} )}
			</div>
		);
	}
}