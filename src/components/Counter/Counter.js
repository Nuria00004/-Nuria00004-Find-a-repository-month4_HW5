import React from "react";

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             count: 0
        }
    }
    increment = ()=>{
        if(this.state.count < 5 ){
            this.setState((prevState)=>({
                count: prevState.count + 1
            }))
        }
    }
    decrement = ()=>{
        if(this.state.count > 0 ){
            this.setState((prevState)=>({
                count: prevState.count - 1
            }))
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextState.count < 0  || nextContext.count > 5){
            return false
        }return true
    }

    render() {
        return(
            <div>
                <p>count{this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }


}

export default Counter