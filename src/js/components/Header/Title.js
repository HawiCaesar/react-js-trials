import React from "react";

export default class Title extends React.Component{

	render(){
		return (
				<h1>Welcome this is how we do it {this.props.title}</h1>
			);
	}
}
