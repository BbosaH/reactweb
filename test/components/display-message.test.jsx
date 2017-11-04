import React from 'react';
import DisplayMessage from 'DisplayMessage';

describe('DisplayMessage',()=>{
	it("has root element as div",()=>{

		const wrapper = shallow(<DisplayMessage/>);
		expect(wrapper.type()).to.equal('div');

	})

	it("Renders h4",()=>{
		const wrapper = shallow(<DisplayMessage/>);
		expect(wrapper.find('h4').length).to.equal(1);
	})

	it("displays right Message",()=>{

		// const wrapper = mount(<DisplayMessage message="valid message"/>);
		// expect(wrapper.contains(<h4>message</h4>)).to.equal(<h4>valid message</h4>)


	})
})