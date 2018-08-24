import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import Board from '../src/Board'
import Cell from '../src/Cell'

import { expect } from 'chai'

describe('Board', () => {

    it('has 9 cells', () => {
        let boardComponent = shallow(<Board />)
        expect(boardComponent.find(Cell).length).to.be.equal(9)
    })

    it('should have 3 cells per row', () => {
        let boardComponent = shallow(<Board />)
        let allRows = boardComponent.find('.row')
        expect(allRows.at(0).find(Cell).length).to.be.equal(3)
        expect(allRows.at(1).find(Cell).length).to.be.equal(3)
        expect(allRows.at(2).find(Cell).length).to.be.equal(3)
    })


})