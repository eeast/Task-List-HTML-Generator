// * It's done when I have created a testing suite for the `Component` class to verify that `render()` throws an error when called directly.

const { Component } = require('../lib/component');

it('should throw an error when render() is called directly', () => {
    const testComp = new Component();
    const error = new Error("Child class must implement render() method.");

    expect(() => testComp.render()).toThrow(error);
})