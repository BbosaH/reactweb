/* dom.js */

const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const doc = new JSDOM('<!doctype html><html><body></body></html>');
const win = doc.window;

global.document = win.document;
global.window = win;
global.navigator = {
    userAgent: 'node.js',
};