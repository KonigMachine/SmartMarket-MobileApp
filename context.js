import React, { Component } from 'react'

const   UserContext = React.createContext();            // Create Context
// 2 elements of Context API => Provider, Consumer


const reducer = (state, action) =>{
    switch(action.type){
        case "PAGE_VISIBILITY":
            return{
                ...state.HomePage,
                HomePage: state.HomePage
            }
    }
}


export class UserProvider extends Component {

    state = {
        HomePage: [
            {
                id: 1,                                  //  Home Page
                isVisible: true,                        // default value -> true       
            },
        ],
        Entry: [
            {
                id: 1,                                  //  Home Page
                isVisible: false,                        // default value -> true       
            },
        ],
        StockGraph: [
            {
                id: 1,                                  //  Home Page
                isVisible: false,                        // default value -> true       
            },
        ],

        dispatch: action =>{
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext value={this.state}>
                {this.props.children}
            </UserContext>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;