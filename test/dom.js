/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T00:23:20+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: dom.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T00:51:35+03:00
 */
 const jsdom = require("jsdom");

 const {JSDOM} = jsdom
 const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
 console.log(dom.window.document.querySelector("p").textContent);
 // var exposedProperties = ['window', 'navigator', 'document'];
 //
 // global.document = new JSDOM('');
 // global.window = document.defaultView;
 // Object.keys(document.defaultView).forEach((property) => {
 //   if (typeof global[property] === 'undefined') {
 //     exposedProperties.push(property);
 //     global[property] = document.defaultView[property];
 //   }
 // });
 //
 // global.navigator = {
 //   userAgent: 'node.js'
 // };
