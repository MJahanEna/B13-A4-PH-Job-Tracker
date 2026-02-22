1. What is the difference between getElementById, getElementByClassName, and querySelector / querySelectorAll?
   Ans: The difference is in how each of these selects elements. getElementById selects one element by its unique ID, getElementsByClassName selects multiple elements by class name, querySelector selects the first element matching a CSS selector, and querySelectorAll selects all elements matching a CSS selector.

2. How do you create and insert a new element into the DOM?
   Ans: Assuming there is an existing unordered list (id="my-ul") with 2 list items in the DOM and I want to create a new list item in the list, I would write the following code in JavaScript: const myUl = document.getElementById("my-ul"); const myNewList = document.createElement("li"); myNewList.innerText = "I am three"; myUl.appendChild(myNewList);

3. What is Event Bubbling? And how does it work?
   Ans: Event bubbling is when an event starts on the clicked element and then moves upward to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event delegation is a technique where we can attach a single event listener to a parent element to handle events for its child elements using event bubbling. It is useful because it improves performance and allows dynamically added elements to work without adding new listeners.

5. What is the difference between preventDefault() and Propagation() methods?
   Ans: The difference between them is that they stop different things. While preventDefault() stops the browser’s default action, like preventing a form from submitting or a link from opening, stopPropagation() stops the event from moving up to parent elements during bubbling. So one stops the default behavior, and the other stops the event from spreading
