## What is JavaScript? (Module 24.1)

> A programming language which is single threaded, object-oriented, interpreted, high-level language.

## Create Script tag and connect external Script file (Module 24.2)

- External `script` file should be used in html file to load the script file Inside the body tag and use it as the last tag.

## What is DOM (Document Object Model) (Module 24.3)

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## Get different HTML elements in JS by using tag name (Module 24.4)

- document is a object. where we can use . notation to get the different elements inside the document object.
- document.getElementById() is used to get the element by id.
- document.getElementsByTagName() is used to get the element by tag name.
- document.getElementsByClassName() is used to get the element by class name.
- document.getElementsByName() is used to get the element by name.
- innerHTML is html tag with its content inside.
  `<h3>This is a heading</h3>` //this is a innerHTML.
- if we use innerHTML to get the content of the element, we can use innerText to get the content of the element.

## Capture and change Element by using getElementById (Module 24.5)

- `document.getElementById("req'dID")` is used to get the element by id. forward by `.style` to change the style of the element. forward by CSS property to change the style of the element. CSS property is used using camel case.

  `document.getElementById("req'dID").style.color = "red";`

## Explore getElementsByClassName and querySelectorAll (Module 24.6)

- `document.getElementsByClassName("req'dClass")` is used to get the element by class name.
- `document.querySelectorAll(".req'dClass")` is used to get the element by class name.

1. `getElementsByTagName`
2. `getElementsByID`
3. `getElementsByClassName`
4. `querySelector`
5. `querySelectorAll`

## NodeList, htmlcollection, setAttribute, parentNode, childnodes (Module 24.7)

<p align="center">
  <img src="https://www.w3schools.com/js/pic_htmltree.gif" alt="DOM Tree" />
</p>

<p align="center">
  <img src="https://www.tutorialstonight.com/assets/js/Javascript-DOM-Navigation.webp" alt="Node Relations" />
</p>

- `htmlcollection` is a collection of elements works partially like an array but not an array.

  - we can use `forEach` to iterate over the collection.
  - we can use `length` to get the length of the collection.
  - we can use `item()` to get the element by index.

- `nodeList` is a part of DOM tree. each node is

- `setAttribute` is used to set the attribute of the element. to set attribute of the element, we use `setAttribute()` method and we need to pass the attribute name and value.

-`getattribute` is used to get the attribute of the element. to get attribute of the element, we use `getAttribute()` method and we need to pass the attribute name.

## Create HTML elements using Javascript and appendChild (Module 24.8)

- `document.createElement()` is used to create the element. to create the element, we use `createElement()` method and we need to pass the element name.
- `document.appendChild()` is used to append the element. to append the element, we use `appendChild()` method and we need to pass the element.
- `document.classList.add()` is used to add the class to the element.

## Module summary and DOM Review (Module 24.9)

- external script
- document is an object.
-
