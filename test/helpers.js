/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T00:22:44+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: helpers.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T00:30:56+03:00
 */

 import {expect} from 'chai';
 import {sinon, spy} from 'sinon';
 import {mount, render, shallow} from 'enzyme';

 global.expect = expect;
 global.sinon = sinon;
 global.spy = spy;

 global.mount = mount;
 global.render = render;
 global.shallow = shallow;
