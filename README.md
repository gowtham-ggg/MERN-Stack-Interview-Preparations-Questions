#                                    CSS - **44 Questions**
---
Here are the answers to the CSS questions:

---

### 1. **What is the difference between inline, internal, and external CSS?**  
**Inline CSS:**  
- CSS is written directly inside an HTML element using the `style` attribute.  
- Example: `<p style="color: red;">This is red text</p>`  
- **Pros:** Quick to apply styles for a single element.  
- **Cons:** Not reusable and difficult to maintain for large projects.  

**Internal CSS:**  
- CSS is written inside a `<style>` tag within the `<head>` section of an HTML file.  
- Example:  
  ```html
  <style>
    p { color: blue; }
  </style>
  ```  
- **Pros:** Useful for styling a single HTML file.  
- **Cons:** Cannot be reused across multiple files.

**External CSS:**  
- CSS is written in a separate `.css` file and linked using the `<link>` tag.  
- Example: `<link rel="stylesheet" href="styles.css">`  
- **Pros:** Reusable and easy to maintain.  
- **Cons:** Requires additional HTTP requests to load.

---

### 2. **What is the box model in CSS?**  
The box model describes how elements are displayed in terms of four areas:  
1. **Content:** The actual content of the box (e.g., text or images).  
2. **Padding:** The space between the content and the border.  
3. **Border:** The edge surrounding the padding.  
4. **Margin:** The space between the element's border and other elements.  

### Visual Example:  
![Content -> Padding -> Border -> Margin]

---

### 3. **What is the difference between padding and margin in CSS?**  
- **Padding:** The space between the content and the border of an element.  
  Example:  
  ```css
  div {
    padding: 20px;
  }
  ```  
- **Margin:** The space between the element's border and the neighboring elements.  
  Example:  
  ```css
  div {
    margin: 20px;
  }
  ```  
**Key Difference:** Padding is inside the border, while margin is outside the border.

---

### 4. **What is the difference between absolute and relative positioning in CSS?**  
- **Relative Positioning:**  
  The element is positioned relative to its **original position** in the normal document flow.  
  Example:  
  ```css
  div {
    position: relative;
    top: 20px;
  }
  ```  
  (Shifts 20px down while still taking up its original space.)  

- **Absolute Positioning:**  
  The element is positioned relative to its **nearest positioned ancestor** or the viewport if no ancestor is positioned.  
  Example:  
  ```css
  div {
    position: absolute;
    top: 20px;
  }
  ```  
  (Removes the element from the normal document flow.)

---

### 5. **What is a media query in CSS?**  
A **media query** is a CSS technique to apply styles based on screen size, resolution, or device type.  
Example:  
```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

### 6. **How can you center an element horizontally and vertically in CSS?**  
**Using Flexbox:**  
```css
.container {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;    /* Vertical */
  height: 100vh; /* Full viewport height */
}
```

**Using CSS Grid:**  
```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

---

### 7. **What is the difference between `display: none` and `visibility: hidden` in CSS?**  
- **`display: none`:** Hides the element and removes it from the document flow.  
  Example:  
  ```css
  div {
    display: none;
  }
  ```  

- **`visibility: hidden`:** Hides the element but keeps it in the document flow.  
  Example:  
  ```css
  div {
    visibility: hidden;
  }
  ```

---

### 8. **What is the difference between relative and absolute units of measurement in CSS?**  
- **Relative Units:** Based on another value, like the size of the parent element.  
  Examples:  
  - `em` (relative to the font-size of the parent element).  
  - `rem` (relative to the root element's font size).  
  - `%` (relative to the parent element's dimensions).  

- **Absolute Units:** Fixed and not relative to other elements.  
  Examples:  
  - `px`, `cm`, `mm`.  

---

### 9. **What is a pseudo-class in CSS?**  
A pseudo-class is used to define the special state of an element.  
Example:  
```css
a:hover {
  color: red; /* Change link color on hover */
}
```
Common pseudo-classes:  
- `:hover`  
- `:focus`  
- `:nth-child(n)`  

---

### 10. **How can you make a page responsive in CSS?**  
1. **Use Media Queries:**  
   ```css
   @media (max-width: 768px) {
     body {
       font-size: 14px;
     }
   }
   ```  
2. **Flexible Layouts (Flexbox/Grid):**  
   Use CSS Flexbox or Grid for dynamic layouts.  
3. **Responsive Units:**  
   Use `%`, `em`, `rem`, or `vh/vw` for widths and fonts instead of `px`.  
4. **Images:**  
   Use the `max-width: 100%;` property for images to ensure they scale.  

---

### 11. **What is the difference between an em and a rem in CSS?**  
- **`em`:** Relative to the font size of its nearest parent element.  
  Example:  
  ```css
  div {
    font-size: 2em; /* 2 times the parent's font size */
  }
  ```  

- **`rem`:** Relative to the font size of the root element (usually `<html>`).  
  Example:  
  ```css
  div {
    font-size: 2rem; /* 2 times the root font size */
  }
  ```  

**Key Difference:**  
- `em` is context-dependent (affected by parent elements).  
- `rem` is context-independent (always based on the root element).  

---

### 12. **What is a CSS preprocessor?**  
A CSS preprocessor extends CSS by adding features like variables, nesting, and mixins, making it more dynamic and easier to write. Popular preprocessors include **Sass** and **LESS**.

Example (Sass):  
```scss
$primary-color: blue;

button {
  color: $primary-color;
  &:hover {
    color: darken($primary-color, 10%);
  }
}
```

Advantages of using preprocessors:  
- Code reusability through variables and mixins.  
- Easier maintenance with nesting and partials.  

---

### 13. **What is the difference between a class and an ID in CSS?**  
- **Class:** Used to apply styles to multiple elements. It is denoted by a period (`.`).  
  Example:  
  ```css
  .button {
    background-color: blue;
  }
  ```  
  Applied as: `<button class="button"></button>`  

- **ID:** Used to uniquely style a single element. It is denoted by a hash (`#`).  
  Example:  
  ```css
  #header {
    color: red;
  }
  ```  
  Applied as: `<h1 id="header"></h1>`  

**Key Difference:**  
- **Class:** Reusable for multiple elements.  
- **ID:** Unique and should only be used once per page.  

---

### 14. **What is a CSS framework?**  
A CSS framework is a prewritten library of CSS that provides a foundation for designing web pages. It includes styles for layout, typography, forms, buttons, and more.  

Popular CSS frameworks:  
- **Bootstrap**  
- **Tailwind CSS**  
- **Foundation**  

**Benefits:**  
- Saves time by providing pre-styled components.  
- Ensures consistency across a project.

---

### 15. **What is the difference between CSS resets and CSS normalizations?**  
- **CSS Reset:** Removes all default styles applied by browsers.  
  Example:  
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```  

- **CSS Normalization:** Keeps useful browser styles but removes inconsistencies across browsers.  
  Example: **Normalize.css**  

**Key Difference:**  
- Reset removes **all** default styles.  
- Normalization preserves **useful** default styles.  

---

### 16. **What is the box model in CSS?**  
The box model consists of four parts that determine how an element is displayed:  
1. **Content:** The element’s actual content (e.g., text, images).  
2. **Padding:** Space between content and the border.  
3. **Border:** The edge around the padding.  
4. **Margin:** Space outside the border.  

**Visual Representation:**  
[Content -> Padding -> Border -> Margin]

---

### 17. **How do you center an element horizontally and vertically in CSS?**  
**Using Flexbox:**  
```css
.container {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;    /* Vertical */
  height: 100vh;
}
```

**Using Grid:**  
```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

**Using Absolute Positioning:**  
```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

### 18. **What is a pseudo-class in CSS?**  
A pseudo-class is used to define the special state of an element.  
Example:  
```css
a:hover {
  color: red;
}
```

Common pseudo-classes:  
- `:hover` – Applies when the user hovers over an element.  
- `:focus` – Applies when an element is focused.  
- `:nth-child(n)` – Selects elements based on their position in a parent.

---

### 19. **What is a CSS selector?**  
A CSS selector is a pattern used to select and style specific HTML elements.  

Examples:  
- **Type Selector:** Targets all elements of a specific type.  
  ```css
  p { color: blue; }
  ```  

- **Class Selector:** Targets elements with a specific class.  
  ```css
  .example { color: red; }
  ```  

- **ID Selector:** Targets an element with a specific ID.  
  ```css
  #header { color: green; }
  ```  

---

### 20. **What is the difference between `display: none` and `visibility: hidden` in CSS?**  
- **`display: none`:**  
  - Hides the element and removes it from the document flow.  
  - The element does not take up space.  
  Example:  
  ```css
  div {
    display: none;
  }
  ```

- **`visibility: hidden`:**  
  - Hides the element but keeps it in the document flow.  
  - The element still takes up space.  
  Example:  
  ```css
  div {
    visibility: hidden;
  }
  ```
---

### 21. **What is the difference between `em` and `rem` units in CSS?**  
- **`em`:** Relative to the font size of its nearest parent element.  
  Example:  
  ```css
  div {
    font-size: 1.5em; /* 1.5 times the parent element's font size */
  }
  ```

- **`rem`:** Relative to the font size of the root element (`<html>`).  
  Example:  
  ```css
  div {
    font-size: 1.5rem; /* 1.5 times the root font size */
  }
  ```

**Key Difference:**  
- `em` depends on the parent element, making it potentially compounded.  
- `rem` is consistent across the document as it always refers to the root font size.

---

### 22. **What is the purpose of a `reset.css` file?**  
A **reset.css** file removes all default styling applied by browsers to create a consistent baseline for styles.  

Example:  
```css
/* Common Reset Rules */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Benefits:**  
- Avoids cross-browser inconsistencies.  
- Provides a clean slate for custom styles.

---

### 23. **What is the difference between a CSS framework and a CSS library?**  
- **CSS Framework:** A complete system for building layouts, including pre-styled components, responsive grids, and utilities.  
  Examples: **Bootstrap, Tailwind CSS.**

- **CSS Library:** A collection of reusable styles or utilities, but not as comprehensive as a framework.  
  Example: **Animate.css (for animations).**

**Key Difference:**  
Frameworks focus on layout and design systems, while libraries target specific functionalities.

---

### 24. **What is the difference between `:nth-child` and `:nth-of-type` in CSS?**  
- **`:nth-child(n)`:** Selects the nth child of a parent, regardless of type.  
  Example:  
  ```css
  p:nth-child(2) { color: red; } /* Selects the second child, even if it's not a <p>. */
  ```

- **`:nth-of-type(n)`:** Selects the nth child **of the same type**.  
  Example:  
  ```css
  p:nth-of-type(2) { color: blue; } /* Selects the second <p> element. */
  ```

---

### 25. **How do you create a responsive design in CSS?**  
1. **Media Queries:**  
   ```css
   @media (max-width: 768px) {
     body {
       font-size: 14px;
     }
   }
   ```

2. **Flexible Layouts:** Use percentages, `vh/vw`, or `fr` instead of fixed units.  
   ```css
   .container {
     width: 80%; /* Flexible width */
   }
   ```

3. **Responsive Frameworks:** Use frameworks like Bootstrap or Tailwind CSS.  

4. **Images and Videos:**  
   ```css
   img {
     max-width: 100%;
     height: auto;
   }
   ```

---

### 26. **What is the purpose of the `z-index` property in CSS?**  
The `z-index` property controls the stack order of elements on the z-axis (which elements appear on top).  

- Higher `z-index` values bring elements to the front.  
- Only works on elements with a `position` of `relative`, `absolute`, or `fixed`.  

Example:  
```css
div {
  position: absolute;
  z-index: 10;
}
```

---

### 27. **What is the difference between Flexbox and Grid in CSS?**  
- **Flexbox:**  
  - One-dimensional (handles rows or columns).  
  - Best for aligning items in a single direction.  
  Example:  
  ```css
  .container {
    display: flex;
    justify-content: space-between;
  }
  ```

- **Grid:**  
  - Two-dimensional (handles rows and columns).  
  - Best for designing complete layouts.  
  Example:  
  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ```

---

### 28. **What is the difference between `inline-block` and `block` in CSS?**  
- **`inline-block`:**  
  - Elements are inline but respect block properties like width and height.  
  - Example: Buttons in a row.  

- **`block`:**  
  - Elements take up the full width of their container and start on a new line.  

Example:  
```css
span { display: inline-block; width: 100px; }
div { display: block; width: 100px; }
```

---

### 29. **What is the purpose of the clearfix hack in CSS?**  
The clearfix hack is used to fix issues where floating elements don't expand the height of their parent container.  

Example:  
```css
.container::after {
  content: "";
  display: block;
  clear: both;
}
```

**Why Use It?**  
Prevents layout issues caused by floated elements.

---

### 30. **What is the difference between `position: absolute` and `position: relative` in CSS?**  
- **`position: relative`:**  
  - Positioned relative to its normal position.  
  Example:  
  ```css
  div {
    position: relative;
    top: 10px; /* Moves 10px down from its original position */
  }
  ```

- **`position: absolute`:**  
  - Positioned relative to the nearest **positioned ancestor** (or the viewport if none exists).  
  Example:  
  ```css
  div {
    position: absolute;
    top: 10px; /* Moves 10px down from the ancestor's position */
  }
  ```

---

### 31. **How do you use media queries in CSS?**  
Media queries allow you to apply styles conditionally based on the device’s screen size or other properties.  

**Syntax:**  
```css
@media (condition) {
  selector {
    property: value;
  }
}
```

**Example:**  
```css
/* Styles for devices with a max width of 768px */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

**Common Conditions:**  
- `max-width` and `min-width`  
- `max-height` and `min-height`  
- `orientation` (landscape or portrait)  

---

### 32. **What is the purpose of the `transition` property in CSS?**  
The `transition` property allows smooth animations between property changes.  

**Syntax:**  
```css
selector {
  transition: property duration timing-function delay;
}
```

**Example:**  
```css
button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: green;
}
```

**Purpose:**  
- Makes changes less abrupt.  
- Commonly used for hover effects or animations.

---

### 33. **What is the purpose of the `transform` property in CSS?**  
The `transform` property applies transformations like rotation, scaling, and translation to an element.  

**Examples:**  
- **Rotate:**  
  ```css
  div {
    transform: rotate(45deg);
  }
  ```

- **Scale:**  
  ```css
  div {
    transform: scale(1.5);
  }
  ```

- **Translate:**  
  ```css
  div {
    transform: translateX(50px);
  }
  ```

**Purpose:**  
- Adds visual effects and movements.  
- Can be used in conjunction with `transition` for animations.

---

### 34. **What is the purpose of the `box-sizing` property in CSS?**  
The `box-sizing` property determines how the total width and height of an element are calculated.  

- **`content-box` (default):** Width and height include only the content; padding and borders are added separately.  
- **`border-box`:** Width and height include content, padding, and borders.  

**Example:**  
```css
div {
  box-sizing: border-box;
}
```

**Why Use It?**  
`border-box` simplifies layout calculations by including padding and borders in the element's dimensions.

---

### 35. **What is the difference between `:hover` and `:focus` in CSS?**  
- **`:hover`:** Applies styles when the user hovers over an element with a mouse.  
  Example:  
  ```css
  button:hover {
    background-color: blue;
  }
  ```

- **`:focus`:** Applies styles when an element is focused (e.g., clicked or tabbed to).  
  Example:  
  ```css
  input:focus {
    border-color: green;
  }
  ```

**Key Difference:**  
- `:hover` works only with a mouse.  
- `:focus` works with keyboard navigation, screen readers, and more.

---

### 36. **How do you create a sticky header in CSS?**  
A sticky header stays fixed at the top of the page as you scroll.  

**Example:**  
```css
header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
}
```

**Key Points:**  
- Use `position: sticky`.  
- Set the `top` property to define the stickiness threshold.  
- Ensure the header has enough `z-index` to appear above other elements.

---

### 37. **What is the difference between `@media` and `@import` in CSS?**  
- **`@media`:** Directly applies conditional styles based on media queries.  
  Example:  
  ```css
  @media (max-width: 768px) {
    body {
      background-color: lightgray;
    }
  }
  ```

- **`@import`:** Imports an external stylesheet, optionally with media queries.  
  Example:  
  ```css
  @import url('styles.css') screen and (max-width: 768px);
  ```

**Key Differences:**  
- `@media` is preferred for in-file conditional styles.  
- `@import` adds additional HTTP requests, which can affect performance.

---

### 38. **What is the purpose of the `calc()` function in CSS?**  
The `calc()` function performs mathematical calculations to dynamically determine property values.  

**Example:**  
```css
div {
  width: calc(100% - 50px);
  margin: calc(10px + 5%);
}
```

**Benefits:**  
- Combines relative and fixed units.  
- Allows more flexibility in responsive designs.

---

### 39. **How do you implement a CSS preprocessor like Sass or Less?**  
1. **Install the Preprocessor:**  
   Example (Sass):  
   ```bash
   npm install sass
   ```

2. **Write the Preprocessor Code:**  
   Example (Sass):  
   ```scss
   $primary-color: blue;

   button {
     background-color: $primary-color;
   }
   ```

3. **Compile to CSS:**  
   Use the command:  
   ```bash
   sass input.scss output.css
   ```

4. **Link the Compiled CSS File:**  
   ```html
   <link rel="stylesheet" href="output.css">
   ```

---

### 40. **What is the purpose of the `content` property in CSS?**  
The `content` property is used with pseudo-elements (`::before` and `::after`) to insert content dynamically.  

**Example:**  
```css
button::before {
  content: "✓";
  margin-right: 8px;
}
```

**Purpose:**  
- Adds decorative or informative content.  
- Commonly used for tooltips, icons, and styling.

---
### 41. **What is the purpose of the `will-change` property in CSS?**  
The `will-change` property informs the browser about which properties of an element are likely to change, enabling the browser to optimize for performance ahead of time.  

**Example:**  
```css
div {
  will-change: transform, opacity;
}
```

**Purpose:**  
- Improves rendering performance for animations or transitions.  
- Prevents lag during complex visual changes like transforms or opacity.  

**Note:** Use sparingly, as it can consume extra system resources.

---

### 42. **How do you implement a CSS animation?**  
CSS animations are created using `@keyframes` and applied with the `animation` property.  

**Example:**  
```css
/* Define the animation */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

/* Apply the animation */
div {
  animation: slide 2s ease-in-out infinite;
}
```

**Key Properties:**  
- `animation-name`: Name of the animation (`@keyframes`).  
- `animation-duration`: Duration of the animation.  
- `animation-timing-function`: Easing function (e.g., `ease`, `linear`).  
- `animation-iteration-count`: Number of times the animation repeats (e.g., `infinite`).  
- `animation-delay`: Time before the animation starts.

---

### 43. **What is the difference between `:before` and `:after` in CSS?**  
- **`:before`:** Inserts content **before** the element’s content.  
  Example:  
  ```css
  p::before {
    content: "Note: ";
    font-weight: bold;
  }
  ```

- **`:after`:** Inserts content **after** the element’s content.  
  Example:  
  ```css
  p::after {
    content: " (End)";
    font-style: italic;
  }
  ```

**Key Differences:**  
- Both are used with the `content` property.  
- Placement differs (before or after the actual content).  

---

### 44. **What is the purpose of the `rem` unit in CSS?**  
The `rem` (root em) unit is relative to the font size of the root element (`<html>`).  

**Benefits:**  
- Consistency: Unlike `em`, it is not affected by the font size of parent elements.  
- Accessibility: Changing the root font size adjusts the entire design.  

**Example:**  
```css
html {
  font-size: 16px; /* 1rem = 16px */
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
}
```

**Purpose:**  
- Simplifies responsive typography and spacing.  
- Enhances scalability across devices.

---
#                                            ExpressJS

### 45. **What is Express.js?**  
Express.js is a lightweight and flexible web application framework for Node.js. It simplifies building web applications and APIs by providing robust routing, middleware support, and easy integration with databases. It follows a minimalistic approach and allows developers to create RESTful services efficiently.

---

### 46. **How is routing done in Express.js?**  
Routing in Express.js determines how an application responds to a client request for a specific URL and HTTP method (GET, POST, PUT, DELETE, etc.).  
Example:  
```js
const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Welcome to Home Page');
});

app.post('/submit', (req, res) => {
  res.send('Data submitted successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
Routes can be modularized using `express.Router()`.

---

### 47. **What is middleware in Express.js?**  
Middleware functions are functions that execute in the request-response cycle. They can:  
- Modify request or response objects  
- Execute code  
- End the request-response cycle  
- Call the next middleware function  

Example:  
```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);
```
Middleware can be **built-in**, **third-party**, or **custom**.

---

### 48. **How can you handle errors in Express.js?**  
Express provides error-handling middleware that takes four parameters: `(err, req, res, next)`.  

Example:  
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
You can also use `next(err)` inside a route to pass errors to the error-handling middleware.

---

### 49. **What is the difference between a PUT and a POST request in RESTful APIs?**  
- **PUT**: Used to update an existing resource or create it if it doesn't exist. It is **idempotent** (same request produces the same result).  
- **POST**: Used to create a new resource. It is **not idempotent** (multiple requests create multiple records).  

Example:  
```js
app.put('/user/:id', (req, res) => { /* Update user */ });
app.post('/user', (req, res) => { /* Create user */ });
```

---

### 50. **What is the difference between a GET and a POST request in RESTful APIs?**  
- **GET**: Used to retrieve data. Parameters are sent in the URL.  
- **POST**: Used to send data to the server. Parameters are sent in the request body.  

---

### 51. **What is Express?**  
Express is a fast, unopinionated web framework for Node.js used to build web applications and REST APIs.

---

### 52. **What are the advantages of using Express?**  
- Minimal and fast  
- Supports middleware  
- Robust routing  
- Easily integrates with databases  
- Large ecosystem  

---

### 53. **What is middleware in Express?**  
Middleware is a function that runs before a request reaches the route handler. Examples include logging, authentication, and error handling.

---

### 54. **What is routing in Express?**  
Routing defines how an application handles incoming requests based on URL and HTTP method.

---

### 55. **What is the difference between res.send() and res.json() in Express?**  
- `res.send()`: Sends a response (can be a string, object, or buffer).  
- `res.json()`: Sends a JSON response and sets the `Content-Type` header to `application/json`.

Example:  
```js
res.send({ message: "Hello" }); // Works, but not explicit  
res.json({ message: "Hello" }); // Explicitly sends JSON  
```

---

### 56. **What is the use of app.use() in Express?**  
`app.use()` is used to apply middleware globally or to a specific route.

Example:  
```js
app.use(express.json()); // Parses JSON request bodies  
```

---

### 57. **What is the use of app.listen() in Express?**  
`app.listen()` starts the Express server on a specified port.

Example:  
```js
app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### 58. **What is the purpose of the next() function in Express middleware?**  
`next()` is used to pass control from one middleware function to the next.

Example:  
```js
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Moves to next middleware or route handler
});
```

---

### 59. **What is the difference between app.use() and app.get() in Express?**  
- `app.use()`: Applies middleware to all HTTP methods.  
- `app.get()`: Defines a route handler for GET requests only.  

Example:  
```js
app.use('/user', someMiddleware); // Applies to all methods at /user  
app.get('/user', (req, res) => res.send('User data')); // Only for GET requests  
```

---

### 60. **What is the purpose of app.listen() in Express?**  
It starts the HTTP server and listens for incoming requests.

---

### 61. **What is a route handler in Express?**  
A **route handler** is a function that executes when a specific HTTP request is made to a defined route. It processes requests and sends responses.

Example:  
```js
app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page');
});
```

---

### 62. **What is the purpose of the res.send() function in Express?**  
`res.send()` is used to send a response to the client. It automatically sets the `Content-Type` header based on the response type.

Example:  
```js
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

---

### 63. **How can you serve static files in Express?**  
You can serve static files (CSS, images, JavaScript) using `express.static()`.

Example:  
```js
app.use(express.static('public'));
```
If you have a file `public/style.css`, it can be accessed at `http://localhost:3000/style.css`.

---

### 64. **What is the difference between req.query and req.params in Express?**  
- `req.query`: Retrieves query parameters from the URL (`?key=value`).  
- `req.params`: Retrieves route parameters from the URL (`/user/:id`).  

Example:  
```js
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // Route param
  console.log(req.query.name); // Query param
});
```
For `/user/123?name=John`:  
- `req.params.id` → `123`  
- `req.query.name` → `John`  

---

### 65. **What is Express Router?**  
Express Router is a way to create modular, mountable route handlers.

Example:  
```js
const router = express.Router();
router.get('/home', (req, res) => res.send('Home Page'));
app.use('/', router);
```

---

### 66. **What is CORS in Express?**  
CORS (Cross-Origin Resource Sharing) allows or restricts requests from different origins.

Example:  
```js
const cors = require('cors');
app.use(cors());
```

---

### 67. **What is the difference between a PUT and a POST request in Express?**  
- **PUT** updates an existing resource and is **idempotent**.  
- **POST** creates a new resource and is **not idempotent**.  

Example:  
```js
app.put('/user/:id', (req, res) => res.send('User updated'));
app.post('/user', (req, res) => res.send('User created'));
```

---

### 68. **What is the difference between REST and SOAP?**  
- **REST**: Uses JSON/XML, lightweight, stateless, widely used.  
- **SOAP**: Uses XML, more complex, supports strict security and transactions.  

---

### 69. **What is JWT authentication in Express?**  
JWT (JSON Web Token) is used for secure authentication.

Example:  
```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
```

---

### 70. **What is the difference between synchronous and asynchronous code in Express?**  
- **Synchronous**: Blocks execution until the operation completes.  
- **Asynchronous**: Uses callbacks/promises to avoid blocking.  

Example:  
```js
// Synchronous
const data = fs.readFileSync('file.txt', 'utf-8');

// Asynchronous
fs.readFile('file.txt', 'utf-8', (err, data) => console.log(data));
```

---

### 71. **What is Express generator?**  
Express generator is a CLI tool for quickly setting up Express applications.

Install and use:  
```sh
npm install -g express-generator
express myapp
cd myapp && npm install
```

---

### 72. **What is error handling in Express?**  
Error handling middleware handles errors in Express applications.

Example:  
```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

---

### 73. **What is the difference between app.use() and app.all() in Express middleware?**  
- `app.use()`: Applies middleware to all routes.  
- `app.all()`: Executes for all HTTP methods on a specific route.  

Example:  
```js
app.use('/user', someMiddleware); // Applies to all methods at /user  
app.all('/test', (req, res) => res.send('Runs for any HTTP method'));
```

---

### 74. **What is Express-session?**  
`express-session` is used to manage sessions in Express.

Example:  
```js
const session = require('express-session');
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));
```

---

### 75. **What is cookie-parser in Express?**  
`cookie-parser` parses cookies from incoming requests.

Example:  
```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

---

### 76. **What is body-parser in Express?**  
`body-parser` is middleware that parses incoming request bodies.

Example:  
```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```
Since Express 4.16+, `express.json()` and `express.urlencoded()` replace `body-parser`.

---

### 77. **What is the purpose of the res.json() function in Express?**  
`res.json()` sends a JSON response to the client.

Example:  
```js
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});
```
It sets the `Content-Type` to `application/json` automatically.

---
# HTML-5