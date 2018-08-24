import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import Cell from '../src/Cell'

import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

describe('Cell', () => {
    

    it('should contain a button element', () => {
        let cellComponent = shallow(<Cell player="O"/>)
        expect(cellComponent.find("button").length).to.be.equal(1)
    })

    it('should be blank initially', () => {
        let cellComponent = shallow(<Cell />)
        expect(cellComponent.find('.cell').text()).to.be.equal("")
    })

    it('should display X when clicked', () => {
        let cellComponent = shallow(<Cell player='X'/>)
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("X")
    })

    it('should display current player\'s symbol when selected', () =>{
        let cellComponent = shallow(<Cell player="O"/>)
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("O")
    })
})