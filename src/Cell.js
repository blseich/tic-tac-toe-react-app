import React from 'react'

class Cell extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { mark: ""}

        this.markIt = this.markIt.bind(this)
    }

    render() {
        return <button className="cell" onClick = {this.markIt}>{this.state.mark}</button>
    }

    markIt() {
        this.setState({ mark: this.props.player})
    }
}

export default Cell