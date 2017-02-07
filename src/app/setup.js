import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body><div id="container"></div></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
