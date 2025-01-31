import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { configure , mount, render, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;
