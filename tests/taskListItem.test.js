// * It's done when I have created a testing suite for the `TaskListItem` class that verifies that the list item renders correctly.
// * It's done when the `TaskListItem` class testing suite also verifies that a priority task renders correctly.

const { TaskListItem } = require('../lib/taskListItem');

it('should return an li HTML element with a class of "tasks-item" when render() is called and priority is false', () => {
    const taskListItem = new TaskListItem({text: 'Wake up', priority: false});
    const expResult = `<li class="tasks-item">Wake up</li>`;

    expect(taskListItem.render()).toEqual(expResult);
})

it('should return an li HTML element with a class of "tasks-item-priority" when render() is called and priority is true', () => {
    const taskListItem = new TaskListItem({text: 'Wake up', priority: true});
    const expResult = `<li class="tasks-item-priority">Wake up</li>`;

    expect(taskListItem.render()).toEqual(expResult);
})