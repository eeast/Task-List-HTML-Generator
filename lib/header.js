// * It's done when I have created a `Header` class that inherits from the `Component` class.
// * It's done when a `render()` method is placed on the `Header` class that returns a string of HTML following this format: `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`.

const { Component } = require('./component');
const { formatDate } = require('./date');

class Header extends Component {
    constructor(date, children = []) {
        super(children);
        this.date = new Date();
    };
    render() {
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(this.date)}</p></header>`;
    };
};

module.exports = { Header };