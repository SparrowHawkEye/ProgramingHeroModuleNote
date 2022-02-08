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

## Most common ways to set Event Handlers (module 25.4)

- Direct way to addEventListener is an HTML element is by using document.getElementById() using

```
document.getElementById('HTMLElementID').addEventListener('click', function(){
  // do something
});
}
```

- For grabbing input element text we use `document.getElementById().value` which is different from `document.getElementById().innerText`
- To clean an input field or textarea just add the value of the input field to ` " " or empty string`.

## Create a comment box and display comment (module 25.5)

- To create a comment box we use in 5 Steps
  1. Add button event using a addEventListener anonymous function.
  2. Getting the value of the input field using `document.getElementById("inputField").value`
  3. to create a new paragraph comment we use `document.createElement('p')` and to add the value of the input field to it we use `document.createElement('p').innerText = document.getElementById("inputField").value`
  4. to append the new comment in the parent container of the comment we use `document.getElementById("commentContainer").appendChild(document.createElement('p'))`
  5. Cleaning the input field using `document.getElementById("inputField").value = ""`

> we can simplify all this mess by storing the document.getElementById() in a variable.

## Simple github like delete confirmation button (module 25.6)

- Two new eventHandler focus and blur. for input field.
- removeAttribute, setAttribute
-

## Event bubble and Stop propagating (module 25.7)

! important for Job Interview

- Event bubble is when the event is triggered on the element and then it is propagated to the parent element. if the parent element has the same event handler, it will be triggered.

- <p align="center">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--C_W28Kcc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/n1cvpfw8cd7u0dv6kk9w.png" alt="Event Bubble" />
    
    > Click Here to know more About Event Bubble [Event Bubble](https://dev.to/voralagas/event-bubbling-and-capturing-explained-in-the-detailed-and-easiest-way-possible-for-interview-1ic5) 
  </p>

- To stop `bubble event` we use `event.stopPropagation()`
- To stop `capture event` we use `event.stopImmediatePropagation()`

## Event delegate and benefit of Event bubble (module 25.8)

- Event delegate is when we use a event handler on a parent element and then we use that event handler on the child element.
- `removeChild` to remove the child element from the parent element.

## DOM events summary and home work (module 25.9)

- mouseover,mouseenter, mouseout event is used to hover over the element.

> HomeWork:

- 2 input field and 3 buttons are created.
  -1st button is used to grab the value of the 1st input field and display it in console.
  -2nd button is used to grab the value of the 2nd input field and display it in console.
  -3rd button is used to grab the value from the 1st and 2nd input field and concatenate those 2 input and display it in console.
