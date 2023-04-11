// * It's done when I have created a testing suite for the `Header` class to verify the header renders correctly with the date.

const { Header } = require('../lib/header');
const { formatDate } = require('../lib/date');

it('should return the title and date in HTML when render() is called', () => {
    const header = new Header();
    const date = new Date()

    expect(header.render()).toEqual(`<header class="header"><h1>Todo Today</h1><p>${formatDate(date)}</p></header>`);
})