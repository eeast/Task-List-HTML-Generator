// * It's done when I have created a `Component` class that takes in children, which defaults to an empty array if not provided.
// * It's done when a `render()` method is placed on the `Component` class that throws an error saying `Child class must implement render() method.`
// * It's done when a `renderInnerHTML()` method is placed on the `Component` class that loops over the children and converts any that aren't strings to strings by calling their `render()` method.

class Component {
    constructor (children = []) {
        this.children = children;
    };
    render() {
        throw new Error("Child class must implement render() method.");
    };
    renderHTML() {
        return children.map(element => {
            return element.render();
        });
    };
};

module.exports = { Component };