This is a Knowledge sharing site
USES Some stage-2 ES features

 Tests with Mocha,chai and Enzyme using webpack
 //setup need

 install Mocha ,Chai ,Enzyme , mocha-webpack(if using webpack)

 Create a test webpack file(You can duplicate the one you use moslty if you use webpack aliases and add option for (target: 'node'))
 Install "mocha-webpack" 'Its the one we shall use to track well our webpack aliases'
 put the following script in youer package.json as a test script :

 "test": "mocha-webpack --require ./test/dom.js ./test/helpers.js --webpack-config webpack.config.test.js  --recursive \"test/**/*.@(js|jsx)\"",

 setup : dom.js and helpers.js files.

 dom.js //most recently changesd and may look lie this. It helps you fake a browser DOM that will render componsnts while testing

*const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const doc = new JSDOM('<!doctype html><html><body></body></html>');
const win = doc.window;

global.document = win.document;
global.window = win;
global.navigator = {
    userAgent: 'node.js',
};*

other installs needed for enzyme
'enzyme-adapter-react-15 ' //if using react 15\
'react-test-renderer@15.6.1' //if using react 15



helpers.js //Will help you include what you need in global node

*import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { configure , mount, render, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;*


//setup test suits e.g

import React from 'react';
import DisplayMessage from 'DisplayMessage';

describe('DisplayMessage',()=>{
	it("has root element as div",()=>{

		const wrapper = shallow(<DisplayMessage/>);
		expect(wrapper.type()).to.eql('div');

	})
})


in terminal  type :  npm test...

