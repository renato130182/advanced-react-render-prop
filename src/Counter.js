import React,{ Component,Fragment } from "react"

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    incremet = () => {
        const {count} = this.state
        this.setState({
            count: count + 1
        })
    }

    decrement = () => {
        const {count} = this.state
        this.setState({
            count: count - 1
        })
    }

    render() {
        const {render} = this.props
        const {count} = this.state

        return(
            <>
                {
                    render({
                        incremet: this.incremet,
                        decrement: this.decrement,
                        count
                    })
                }
            </>
        )
    }
}

export default Counter
