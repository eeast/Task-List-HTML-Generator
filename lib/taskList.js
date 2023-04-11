// * It's done when I have created a `TaskList` class that inherits from the `Component` class.
// * It's done when the `TaskList` class passes children to its parent class.
// * It's done when a `render()` method is placed on the `TaskList` class and returns a string of HTML following this format: `<ul class="tasks">{INNER_HTML}</ul>`.

const { Component } = require('./component');

class TaskList extends Component {
    constructor(children = []) {
        super(children);
    };
    render() {
        return `<ul class="tasks">${(this.children.map((el) => el.render())).join("")}</ul>`
    };
};

module.exports = { TaskList };