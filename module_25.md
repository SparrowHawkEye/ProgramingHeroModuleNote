## What is Event, different types of event in web (module 25.1)

-An HTML event can be something the browser does, or something a user does.

- 6 HTML common events onclick, onchange, onmouseover, onmouseout, onkeypress, onkeydown

- when we use HTML inline event we use double quotes. to use string in it we need to use single quotes.

## Add onclick handler directly or via javascript (module 25.2)

`<button onclick="alert('Hello')">Click me</button>`

- event handler is a function that is called when the event happens.
- Given example is a event handler directly use in the HTML element
- When we use global event handler we use onclick on that element and just write the function name to work when we click the button. Otherwise it will applied on load of the page.

## Different ways to use addEventListener on a button (module 25.3)

- addEventListener is a method of the element that is used to add event handler to the element.
  > anonymous function is a function that is not named.
