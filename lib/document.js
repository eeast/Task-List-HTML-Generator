// * It's done when I have tested the wildcard route by visiting any non-existent path, like `http://localhost/test`.

// TODO: Import your Header, TaskList, and TaskListItem
const { Header } = require('./header');
const { TaskList } = require('./taskList');
const { TaskListItem } = require('./taskListItem');

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  const header = new Header();
  // TODO: Create new TaskListItems from the provided tasks
  const taskListItems = tasks.map((el) => new TaskListItem(el));
  // TODO: Add TaskListItems to a new TaskList
  const taskList = new TaskList(taskListItems);

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <div class="card">
        ${header.render()}
        ${taskList.render()}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
