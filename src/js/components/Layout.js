import React from "react";
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions";

import Header from "./Header"

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    };
})

export default class Layout extends React.Component{

    componentWillMount(){
        this.props.dispatch(fetchUser())
    }

    render(){

        return (
            <div>
                <Header />
                <h2>{this.props.user.name}</h2>
            </div>
        );
    }
}