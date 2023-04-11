// * It's done when I have created a `TaskListItem` class that inherits from the `Component` class.
// * It's done when the `TaskListItem` class passes children to its parent class and sets a `priority` property.
// * It's done when a `render()` method is placed on the `TaskListItem` class and returns a string of HTML following this format: `<li class="tasks-item">{INNER_HTML}</li>`.
// * It's done when the `render()` method on the `TaskListItem` class optionally places a class name `tasks-item-priority` if the `priority` property is `true`.

const { Component } = require('./component');

class TaskListItem extends Component {
    constructor(task, children = []) {
        super(children);
        this.text = task.text;
        this.priority = task.priority;
    };
    render() {
        return `<li class="${this.priority ? 'tasks-item-priority' : 'tasks-item'}">${this.text}</li>`
    };
};

module.exports = { TaskListItem };