// * It's done when I have created a testing suite for the `TaskList` class that verifies the unordered list with tasks renders correctly.

const { TaskList } = require('../lib/taskList');
const { TaskListItem } = require('../lib/taskListItem');

it('should return the full task list in HTML when render() is called', () => {
    const tasks = [{
        text: 'Wake up',
        priority: false
    }, {
        text: 'Eat breakfast',
        priority: true
    }, {
        text: 'Work',
        priority: true
    }]

    const taskListItems = tasks.map((el) => new TaskListItem(el));
    const taskList = new TaskList(taskListItems);
    const expResult = `<ul class="tasks"><li class="tasks-item">Wake up</li><li class="tasks-item-priority">Eat breakfast</li><li class="tasks-item-priority">Work</li></ul>`;

    expect(taskList.render()).toEqual(expResult);
})