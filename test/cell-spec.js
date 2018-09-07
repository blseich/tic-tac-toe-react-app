import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import sinon from 'sinon'
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
        let cellComponent = shallow(<Cell player='X' callback={()=>{}}/>)
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("X")
    })

    it('should display current player\'s symbol when selected', () =>{
        let cellComponent = shallow(<Cell player="O" callback={()=>{}}/>)
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("O")
    })

    it('should execute callback on click', () => {
        let callbackSpy = sinon.spy(),
            cellComponent = shallow(<Cell player="O" callback={callbackSpy}/>)
        cellComponent.find(".cell").simulate("click")
        sinon.assert.calledOnce(callbackSpy)
    })

    it('should execute callback once when clicked more than once', () => {
        let callbackSpy = sinon.spy(),
            cellComponent = shallow(<Cell player="O" callback={callbackSpy}/>)
        cellComponent.find(".cell").simulate("click")
        cellComponent.find(".cell").simulate("click")
        sinon.assert.calledOnce(callbackSpy)
    })

    it('should not change marked value when already marked', () => {
        let cellComponent = shallow(<Cell player="O" callback={()=>{}}/>)
        cellComponent.find(".cell").simulate("click")
        cellComponent.setProps({player: 'X'})
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("O")

    })
})