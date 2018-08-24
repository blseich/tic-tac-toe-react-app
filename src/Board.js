import React from 'react'
import Cell from './Cell'

const buildCells = () => Array(3).fill().map((el) => <Cell />)

class Board extends React.Component {

    render() {
        return <div>
                <div className="row">
                    {buildCells()}
                </div>
                <div className="row">
                    {buildCells()}
                </div>
                <div className="row">
                    {buildCells()}
                </div>
            </div>
    }

}

export default Board