#                                    CSS - **44 Questions**
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
# HTML
--- 
### **78. Difference between HTML and XHTML**  
- **HTML (HyperText Markup Language)** is the standard markup language used to create web pages.  
- **XHTML (Extensible HyperText Markup Language)** is a stricter, XML-based version of HTML.  
- XHTML requires all tags to be properly closed, attributes to be quoted, and elements to be properly nested.  

### **79. New Features in HTML5**  
- Semantic elements (`<header>`, `<footer>`, `<article>`, `<section>`)  
- Multimedia support (`<audio>`, `<video>`)  
- Form enhancements (`<input type="date">`, `<input type="email">`)  
- Canvas API (`<canvas>` for drawing graphics)  
- Local storage (`localStorage`, `sessionStorage`)  
- Geolocation API  

### **80. Role of DOCTYPE in HTML**  
- Declares the HTML version used in the document.  
- Ensures correct rendering in web browsers.  
- Example: `<!DOCTYPE html>` (for HTML5).  

### **81. Difference Between `<head>` and `<body>`**  
- `<head>` contains metadata (title, links, scripts).  
- `<body>` contains visible content (text, images, videos).  

### **82. Types of Lists in HTML**  
- Ordered List (`<ol>`) - Numbered list.  
- Unordered List (`<ul>`) - Bulleted list.  
- Definition List (`<dl>`, `<dt>`, `<dd>`) - Term and description.  

### **83. Difference Between `<div>` and `<span>`**  
- `<div>`: Block-level, used for layout.  
- `<span>`: Inline, used for styling a part of text.  

### **84. Difference Between ID and Class**  
- **ID (`id="unique"`)**: Unique, used once per page.  
- **Class (`class="common"`)**: Can be applied to multiple elements.  

### **85. Purpose of `alt` Attribute in HTML**  
- Provides alternative text for images.  
- Improves accessibility and SEO.  

### **86. What is Semantic HTML?**  
- Using meaningful tags (`<header>`, `<nav>`, `<article>`) instead of `<div>`.  
- Improves readability, SEO, and accessibility.  

### **87. Difference Between `<span>` and `<div>`**  
- `<span>`: Inline element, used for small text styling.  
- `<div>`: Block-level element, used for larger layout sections.  

### **88. Purpose of `title` Attribute**  
- Provides tooltip text when hovered over an element.  

### **89. Difference Between `<section>` and `<div>`**  
- `<section>`: Represents a meaningful section of content.  
- `<div>`: Generic container without semantic meaning.  

### **90. Purpose of `target` Attribute**  
- Specifies how a link should open (e.g., `_blank` for new tab).  

### **91. Purpose of `<meta>` Tag**  
- Provides metadata about a web page (charset, description, viewport).  

### **92. Difference Between `<ol>` and `<ul>`**  
- `<ol>`: Ordered list with numbers.  
- `<ul>`: Unordered list with bullets.  

### **93. Purpose of `placeholder` Attribute**  
- Displays hint text inside form fields before user input.  

### **94. Difference Between `<b>` and `<strong>`**  
- `<b>`: Bold text (visual only).  
- `<strong>`: Bold text with importance (SEO, accessibility).  

### **95. Difference Between `<form>` and `<fieldset>`**  
- `<form>`: Container for input fields.  
- `<fieldset>`: Groups related form elements together.  

### **96. Purpose of `<figure>` and `<figcaption>`**  
- `<figure>`: Contains media (image, video).  
- `<figcaption>`: Caption for the media content.  

### **97. Purpose of `href` Attribute**  
- Specifies the URL for a link (`<a href="url">`).  

### **98. Difference Between `<article>` and `<section>`**  
- `<article>`: Independent, self-contained content.  
- `<section>`: Thematic grouping of content.  

### **99. Difference Between `<label>` and `<legend>`**  
- `<label>`: Describes an input field.  
- `<legend>`: Describes a `<fieldset>`.  

### **100. Purpose of `<nav>` Element**  
- Represents navigation links for a website.  

### **101. Difference Between `<cite>` and `<em>`**  
- `<cite>`: Used for citing works (books, articles).  
- `<em>`: Emphasizes text (italic).  

### **102. Purpose of `<audio>` and `<video>`**  
- Embed audio and video content in web pages.  

### **103. Difference Between `<time>` and `<date>`**  
- `<time>`: Represents time/date information.  
- `<date>`: Not an HTML tag.  

### **104. Purpose of `<source>` Element**  
- Specifies multiple media sources for `<audio>` and `<video>`.  

### **105. Purpose of `<header>` and `<footer>`**  
- `<header>`: Top section of a page or article.  
- `<footer>`: Bottom section with copyright, links, etc.  

### **106. Purpose of `<canvas>`**  
- Used for drawing graphics, animations via JavaScript.  

### **107. Difference Between `<ruby>` and `<rt>`**  
- `<ruby>`: Represents annotations for East Asian text.  
- `<rt>`: Provides pronunciation for `<ruby>`.  

### **108. Purpose of `<details>` and `<summary>`**  
- `<details>`: Collapsible content.  
- `<summary>`: Summary/title for the collapsible section.  

### **109. Purpose of `<iframe>`**  
- Embeds another webpage inside the current page.  

### **110. Difference Between `<meter>` and `<progress>`**  
- `<meter>`: Represents a measurement within a range.  
- `<progress>`: Displays the progress of a task.  

### **111. Purpose of `<output>` Element**  
- Displays results of calculations or scripts.  

### **112. Difference Between `<datalist>` and `<select>`**  
- `<datalist>`: Provides suggestions for input fields.  
- `<select>`: Dropdown list with predefined options.  

### **113. Purpose of `<picture>`**  
- Displays different images based on screen size/resolution.  

### **114. Difference Between `<dialog>` and `<details>`**  
- `<dialog>`: Displays a pop-up/modal.  
- `<details>`: Expands and collapses content.  

### **115. Purpose of `<object>` and `<embed>`**  
- `<object>`: Embeds multimedia (PDF, Flash).  
- `<embed>`: Inserts external content (videos, plugins).  

### **116. Difference Between `<nav>` and `<menu>`**  
- `<nav>`: Navigation links.  
- `<menu>`: List of commands (mostly obsolete).  

### **117. Purpose of `<track>`**  
- Provides subtitles, captions for `<video>`.  

### **118. Difference Between `<thead>` and `<tbody>`**  
- `<thead>`: Groups header row of a table.  
- `<tbody>`: Groups body rows of a table.  

### **119. Purpose of `<!DOCTYPE>`**  
- Defines the document type for correct rendering.  

### **120. Ways to Include CSS in HTML**  
- Inline (`style="color:red;"`).  
- Internal (`<style>` in `<head>`).  
- External (`<link rel="stylesheet">`).  

### **121. Semantic HTML Tags**  
- Meaningful tags (`<header>`, `<article>`, `<footer>`).  

### **122. Difference Between `id` and `class`**  
- `id`: Unique, used once.  
- `class`: Can be reused for multiple elements.  

### **123. Difference Between Inline and Block Elements**  
- **Inline:** Does not start a new line (`<span>`, `<a>`).  
- **Block:** Starts a new line (`<div>`, `<p>`).  

### **124. Difference Between Relative and Absolute URL**  
- **Relative:** Refers to a location within the site.  
- **Absolute:** Full URL (with domain).  

### **125. How to Add an Image in HTML**  
```html
<img src="image.jpg" alt="Description">
```  

### **126. Purpose of `alt` Attribute in `<img>`**  
- Provides alternative text for accessibility and SEO.  

### **127. Purpose of `viewport` Meta Tag**  
- Controls responsive behavior on mobile devices.  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```  
---
# JavaScript
---

### **128 What is a closure in JavaScript?**  
A **closure** is a function that remembers the variables from its outer scope even after the outer function has finished executing.  

**Example:**
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```
Here, `inner` forms a closure over `count`.

---

### **129 Difference Between `==` and `===` in JavaScript**  
- `==` (loose equality) compares values after **type conversion**.  
- `===` (strict equality) compares both **value and type**.

**Example:**
```javascript
console.log(5 == "5");  // true  (type conversion)
console.log(5 === "5"); // false (different types)
```

---

### **130. What is the `this` keyword in JavaScript?**  
- `this` refers to the **context** in which a function is called.  
- It behaves differently in **strict mode**, arrow functions, and object methods.  

**Example:**
```javascript
const obj = {
  name: "Gowtham",
  show: function() {
    console.log(this.name);
  }
};
obj.show(); // "Gowtham"
```

---

### **131. What is a callback function in JavaScript?**  
A **callback function** is a function passed as an argument to another function, which executes it later.  

**Example:**
```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Callback executed.");
}

greet("Gowtham", done);
```

---

### **132 . Difference Between Synchronous and Asynchronous JavaScript**  
- **Synchronous:** Code executes **line by line**.
- **Asynchronous:** Code executes **non-blocking**, allowing other tasks to run.

**Example:**
```javascript
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");

// Output: 
// Start
// End
// Async Task (after 1 sec)
```

---

### **133. Function Declaration vs Function Expression**  
- **Function Declaration:** Named and hoisted.  
- **Function Expression:** Assigned to a variable, **not hoisted**.  

**Example:**
```javascript
// Declaration
function greet() {
  console.log("Hello");
}

// Expression
const greetExp = function() {
  console.log("Hello");
};
```

---

### **135. Difference Between `for` Loop and `while` Loop**  
- **For loop:** Used when the number of iterations is known.  
- **While loop:** Used when the condition is dynamic.  

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
```

---

### **136. Difference Between `var`, `let`, and `const`**  
| Keyword  | Scope         | Reassignment | Hoisted |
|----------|-------------|--------------|---------|
| `var`   | Function    | Yes          | Yes (undefined) |
| `let`   | Block       | Yes          | No |
| `const` | Block       | No           | No |

**Example:**
```javascript
var x = 10; // Function-scoped
let y = 20; // Block-scoped
const z = 30; // Cannot be reassigned
```

---

### **137. Difference Between Callback and Promise**  
- **Callback:** Function passed as an argument.  
- **Promise:** An object representing success/failure of an async task.

**Example:**
```javascript
// Using Callback
function fetchData(callback) {
  setTimeout(() => callback("Data fetched"), 1000);
}

// Using Promise
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}

fetchData(console.log);
fetchDataPromise().then(console.log);
```

---

### **140. Difference Between `Map` and `Set` in JavaScript**  
| Feature  | Map                           | Set                        |
|----------|------------------------------|----------------------------|
| Stores   | Key-value pairs               | Unique values              |
| Duplicates | No duplicate keys           | No duplicate values        |
| Iteration | `forEach()`, `for...of`       | `forEach()`, `for...of`    |

**Example:**
```javascript
let map = new Map();
map.set("name", "Gowtham");

let set = new Set();
set.add("apple");
```

---

### **141. Difference Between Class and Constructor Function**  
- **Class:** Modern ES6 syntax, easier to use.  
- **Constructor Function:** Older way, uses prototypes.

**Example:**
```javascript
// Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Constructor Function
function PersonFunc(name) {
  this.name = name;
}
```

---

### **142. Difference Between `null` and `undefined` in JavaScript**  
- **`null`**: Explicitly assigned to represent "no value".  
- **`undefined`**: Default value for uninitialized variables.

**Example:**
```javascript
let a; // undefined
let b = null; // null
```

---
# MongoDb
---

### **144. What is MongoDB?**  
MongoDB is a **NoSQL database** that stores data in **JSON-like documents** instead of tables and rows. It is designed to handle large-scale, high-performance applications.

**Key Features:**
- Schema-less (flexible structure)
- Uses collections and documents
- Supports indexing and aggregation
- Scalable and high-performance

---

### **145. Difference Between a Collection and a Document in MongoDB**  
| Feature   | Collection             | Document                    |
|-----------|------------------------|-----------------------------|
| Definition | A group of documents   | A single record (JSON-like) |
| Equivalent to | SQL Table          | SQL Row                     |
| Format    | Stores multiple documents | JSON-like (BSON format)  |

**Example:**
```json
// Document (inside a collection)
{
  "_id": "123",
  "name": "Gowtham",
  "age": 25
}
```
A **collection** contains multiple such documents.

---

### **146. CRUD Operations in MongoDB**  
CRUD stands for **Create, Read, Update, Delete**.

```javascript
// CREATE
db.users.insertOne({ name: "Gowtham", age: 25 });

// READ
db.users.find({ name: "Gowtham" });

// UPDATE
db.users.updateOne({ name: "Gowtham" }, { $set: { age: 26 } });

// DELETE
db.users.deleteOne({ name: "Gowtham" });
```

---

### **147. What is Indexing in MongoDB?**  
Indexing improves query performance by **speeding up searches**.  
MongoDB creates an index on the `_id` field by default.

**Example:**
```javascript
db.users.createIndex({ name: 1 }); // Ascending order index on name
```

---

### **148. What is Aggregation in MongoDB?**  
Aggregation is used for **data processing and analysis**, like grouping, filtering, and transforming data.

**Example:**
```javascript
db.orders.aggregate([
  { $match: { status: "delivered" } }, // Filter orders
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } } // Group by customer
]);
```

---
# NodeJs
---

### **149. What is Node.js?**  
Node.js is a **JavaScript runtime environment** that runs on the server-side using **Google’s V8 engine**.

**Key Features:**
- **Non-blocking, event-driven architecture**
- Uses **single-threaded** event loop
- Built-in **npm package manager**
- Ideal for **API development, real-time apps**

---

### **150. Difference Between Node.js and Other Server-Side Frameworks**  
| Feature         | Node.js | Other Frameworks (e.g., Django, Spring) |
|----------------|--------|--------------------------------|
| Language      | JavaScript | Python, Java, PHP, etc. |
| Architecture  | Non-blocking, event-driven | Mostly multi-threaded |
| Performance   | Fast for I/O-heavy apps | Can be slower for real-time apps |
| Usage        | APIs, real-time apps | Web apps, enterprise solutions |

---

### **151. What is an Event Loop in Node.js?**  
The event loop in Node.js allows **asynchronous operations** (I/O, timers, network requests) to be handled efficiently.

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Async Task (after 1 sec)
```

---

### **152. What is Middleware in Node.js?**  
Middleware functions are functions that execute **before** the request reaches the route handler.

**Example (Express.js Middleware):**
```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // Pass to the next function
});

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000);
```

---

### **153. How to Handle Errors in Node.js?**  
You can handle errors using **try-catch**, **error-first callbacks**, or **Express error handlers**.

**Example (Try-Catch in Async Function):**
```javascript
async function fetchData() {
  try {
    let data = await fetch("https://api.example.com/data");
    console.log(await data.json());
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchData();
```

---

### **154. Difference Between Synchronous and Asynchronous HTTP Requests**  
| Type          | Execution | Example |
|--------------|-----------|---------|
| Synchronous  | Blocks the thread | `fetch(url).then(...)` |
| Asynchronous | Non-blocking, uses callbacks/promises | `async/await` |

**Example (Async HTTP Request in Node.js using Axios):**
```javascript
const axios = require('axios');

async function fetchData() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response.data);
}

fetchData();
```

---

### **155. Difference Between a Buffer and a Stream in Node.js**  
| Feature   | Buffer        | Stream         |
|-----------|--------------|---------------|
| Definition | Temporary memory to hold data | Continuous flow of data |
| Size      | Fixed | No limit |
| Example   | File operations (fs module) | Video streaming |

**Example:**
```javascript
// Buffer example
const buffer = Buffer.from("Hello");
console.log(buffer.toString()); // Hello

// Stream example
const fs = require("fs");
const readStream = fs.createReadStream("file.txt");
readStream.on("data", chunk => console.log(chunk));
```

---

### **156. What is the Purpose of the Node.js Crypto Module?**  
The `crypto` module provides **encryption and hashing** functionality.

**Example (Hashing a password using SHA-256):**
```javascript
const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("password").digest("hex");
console.log(hash);
```

---

### **157. What is the Purpose of the Node.js FS Module?**  
The `fs` module allows **file operations** like reading, writing, and deleting.

**Example (Reading a File):**
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---

### **158. What is the Purpose of the Node.js Path Module?**  
The `path` module helps handle **file paths** efficiently.

**Example:**
```javascript
const path = require('path');

console.log(path.basename('/usr/local/bin/file.txt')); // file.txt
console.log(path.extname('file.txt')); // .txt
console.log(path.join('/folder', 'subfolder', 'file.txt')); // /folder/subfolder/file.txt
```

---
# ReactJs
---

### **159. What is React?**  
React is a **JavaScript library** for building user interfaces, primarily for single-page applications (SPAs). It enables developers to create reusable UI components and manage the UI efficiently.

---

### **160. What is JSX in React?**  
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. React uses JSX to define component structures.

**Example:**
```jsx
const element = <h1>Hello, React!</h1>;
```

---

### **161. What is the Virtual DOM in React?**  
The Virtual DOM is an **in-memory representation** of the real DOM. React updates the Virtual DOM first and then applies only the necessary changes to the real DOM, improving performance.

---

### **162. What is the difference between props and state in React?**  
| Feature   | Props                           | State                          |
|-----------|---------------------------------|--------------------------------|
| Definition| Data passed to components       | Data managed within a component|
| Mutability| Immutable                       | Mutable (using `setState`/`useState`) |
| Access    | `this.props` or `props`        | `this.state` or `useState`    |

---

### **163. What is a controlled component in React?**  
A controlled component is a component where the form elements are controlled by React state.

**Example:**
```jsx
function ControlledInput() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

---

### **164. What is Redux, and how is it used in a MERN stack application?**  
Redux is a **state management library** used to manage application-wide state in React. In a MERN stack, it helps manage UI state and backend data, making state changes predictable.

---

### **165. How can you pass data between components in React?**  
- **Props:** Pass data from parent to child.  
- **Context API:** Share data across multiple components.  
- **Redux:** Manage global state.  
- **Callback functions:** Pass a function as a prop to allow child-to-parent communication.  

---

### **166. What is server-side rendering, and how can it be used in a MERN stack application?**  
Server-side rendering (SSR) renders React components on the server and sends the HTML to the client, improving performance and SEO. Next.js is commonly used for SSR in MERN applications.

---

### **167. What is the difference between a class and a function component in React?**  
| Feature   | Class Component              | Function Component             |
|-----------|------------------------------|--------------------------------|
| Syntax    | ES6 class-based              | Functional syntax with hooks   |
| State     | Uses `this.state`             | Uses `useState` hook           |
| Lifecycle | Uses lifecycle methods        | Uses `useEffect` hook          |

---

### **168. What is the difference between a controlled and uncontrolled component in React?**  
- **Controlled Component:** React controls the component state (`useState`).  
- **Uncontrolled Component:** Uses `ref` to access DOM values directly.  

**Example (Uncontrolled):**
```jsx
const inputRef = useRef();
<input ref={inputRef} />;
```

---

### **169. What are the advantages of using React?**  
- Component-based architecture  
- Virtual DOM for faster updates  
- Unidirectional data flow  
- Strong ecosystem and community support  

---

### **170. What is the difference between React and React Native?**  
React is used for **web development**, while React Native is used for **mobile app development**.

---

### **171. What is the role of state in React?**  
State manages a component's **dynamic data**, ensuring UI updates when data changes.

---

### **172. What is the significance of keys in React?**  
Keys help React identify which items changed in lists, improving performance.

**Example:**
```jsx
list.map(item => <li key={item.id}>{item.name}</li>);
```

---

### **173. What is the use of react-router-dom library?**  
It enables **client-side routing** in React applications.

**Example:**
```jsx
<Route path="/about" element={<About />} />
```

---

### **174. How do you create a React component?**  
Two ways:
1. **Function Component**
   ```jsx
   function Hello() {
     return <h1>Hello, World!</h1>;
   }
   ```
2. **Class Component**
   ```jsx
   class Hello extends React.Component {
     render() {
       return <h1>Hello, World!</h1>;
     }
   }
   ```

---

### **175. What is the lifecycle of a React component?**  
- **Mounting:** `constructor()`, `componentDidMount()`  
- **Updating:** `componentDidUpdate()`, `shouldComponentUpdate()`  
- **Unmounting:** `componentWillUnmount()`  

For function components, `useEffect()` handles lifecycle events.

---

### **176. What is the use of React DevTools?**  
It helps debug React applications by inspecting components, state, and props.

---

### **177. What is a higher-order component (HOC) in React?**  
A HOC is a function that takes a component and returns an enhanced component.

**Example:**
```jsx
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Logging...');
    return <WrappedComponent {...props} />;
  };
};
```

---

### **178. What are the different ways to style a React component?**  
- **CSS files** (`.css`)
- **Inline styles** (`style={{ color: 'red' }}`)
- **Styled-components** (CSS-in-JS)
- **Tailwind CSS / Bootstrap**

---

### **179. What are hooks in React?**  
Hooks allow function components to use state and lifecycle features.

**Example:**
```jsx
const [count, setCount] = useState(0);
```

---

### **180. What are the different types of hooks in React?**  
- **State Management Hooks:** `useState`, `useReducer`  
- **Side Effects Hooks:** `useEffect`  
- **Context Hook:** `useContext`  
- **Ref Hooks:** `useRef`  
- **Performance Hooks:** `useMemo`, `useCallback`

---

### **181. What is the use of useEffect() hook in React?**  
`useEffect()` handles side effects like API calls, subscriptions, and DOM updates.

**Example:**
```jsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

---

### **182. What is the use of useContext() hook in React?**  
It provides global state management without Redux.

**Example:**
```jsx
const theme = useContext(ThemeContext);
```

---

### **183. What is the use of memo() function in React?**  
`memo()` optimizes functional components by preventing unnecessary re-renders.

**Example:**
```jsx
const MemoizedComponent = React.memo(MyComponent);
```

---

### **184. What is server-side rendering (SSR) in React?**  
SSR renders React components on the server, improving performance and SEO.

---

### **185. What are portals in React?**  
Portals allow rendering components outside the root DOM node.

**Example:**
```jsx
ReactDOM.createPortal(<Child />, document.getElementById('modal-root'));
```

---

### **186. What are the performance optimization techniques in React?**  
- Use **React.memo()**  
- Use **useCallback()** and **useMemo()**  
- Implement **lazy loading**  
- Avoid **unnecessary re-renders**  

---

### **190. What are hooks in React?**  
Hooks are **functions** that let function components use React features like state and lifecycle methods without using class components.  

**Example:**  
```jsx
const [count, setCount] = useState(0);
```

---

### **191. What are the different types of hooks in React?**  
- **State Hooks:** `useState`, `useReducer`  
- **Effect Hooks:** `useEffect`  
- **Context Hooks:** `useContext`  
- **Ref Hooks:** `useRef`  
- **Performance Hooks:** `useMemo`, `useCallback`  

---

### **192. What is the use of `useEffect()` hook in React?**  
It is used to handle **side effects** like API calls, event listeners, or subscriptions.

**Example:**
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

### **193. What is the use of `useState()` hook in React?**  
It **manages state** in function components.  

**Example:**
```jsx
const [count, setCount] = useState(0);
```

---

### **194. What is the use of `useContext()` hook in React?**  
It allows components to **consume global data** without passing props manually.  

**Example:**
```jsx
const theme = useContext(ThemeContext);
```

---

### **195. What is the use of `useReducer()` hook in React?**  
It manages **complex state logic** like Redux but inside a component.

**Example:**
```jsx
const reducer = (state, action) => {
  if (action.type === "increment") return state + 1;
  return state;
};

const [count, dispatch] = useReducer(reducer, 0);
```

---

### **196. What are the differences between class and functional components in React?**  
| Feature   | Class Component              | Function Component             |
|-----------|------------------------------|--------------------------------|
| Syntax    | ES6 class-based              | Function-based (ES6)           |
| State     | Uses `this.state`             | Uses `useState` hook           |
| Lifecycle | Uses lifecycle methods        | Uses `useEffect` hook          |

---

### **197. What is the use of `memo()` function in React?**  
`React.memo()` prevents unnecessary **re-renders** of functional components.

**Example:**
```jsx
const MemoizedComponent = React.memo(MyComponent);
```

---

### **198. What is server-side rendering (SSR) in React?**  
SSR renders React components **on the server** and sends the HTML to the client, improving **SEO and performance**.

---

### **199. What are portals in React?**  
Portals allow **rendering components outside the root DOM node**, useful for modals.

**Example:**
```jsx
ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"));
```

---

### **200. What are the performance optimization techniques in React?**  
- Use **React.memo()**  
- Use **useCallback()** and **useMemo()**  
- Implement **lazy loading**  
- Avoid **unnecessary re-renders**  

---

### **201. What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React?**  
| Feature | Server-Side Rendering (SSR) | Client-Side Rendering (CSR) |
|---------|-----------------------------|-----------------------------|
| Where rendering happens | Server | Browser |
| Performance | Faster initial load | Slower initial load |
| SEO | Better | Weaker |
| Example | Next.js | Create React App (CRA) |

---

### **202. What is the use of React Context?**  
Context provides **global state management** without needing **prop drilling**.

**Example:**
```jsx
const ThemeContext = createContext();
```

---

### **203. What is the use of Redux middleware?**  
Middleware in Redux is used to **handle asynchronous logic**, logging, or API requests (e.g., `redux-thunk`).

---

### **204. What is the difference between Redux and MobX?**  
| Feature  | Redux                     | MobX                   |
|----------|---------------------------|------------------------|
| Approach | Immutable state            | Mutable state         |
| Learning Curve | Steep | Easier |
| Boilerplate | More code needed | Less code |

---

### **205. What are the different types of testing in React?**  
- **Unit Testing** (`Jest`, `React Testing Library`)  
- **Integration Testing**  
- **End-to-End Testing** (`Cypress`)  

---

### **206. What is the use of React Native Bridge?**  
The React Native Bridge allows **communication** between JavaScript and native code (iOS/Android).

---

### **207. What is the use of the React Native CLI?**  
It helps **create and manage** React Native projects with custom configurations.

---

### **208. What is the use of Expo in React Native?**  
Expo simplifies **React Native development** by providing pre-built tools for faster development.

---

### **209. What are the different types of navigation in React Native?**  
- **Stack Navigation**  
- **Tab Navigation**  
- **Drawer Navigation**  
- **Bottom Navigation**  

---

### **210. What are some features of React?**  
- **Component-based architecture**  
- **Virtual DOM**  
- **Unidirectional data flow**  
- **Declarative UI**  
- **Hooks API**  

---

### **211. What is a virtual DOM in React?**  
The virtual DOM is an in-memory **representation** of the actual DOM, allowing React to **update only necessary parts of the UI** efficiently.

---

### **212. What is the difference between state and props in React?**  
- **State:** Mutable, used for internal data in a component.  
- **Props:** Immutable, used to pass data between components.

---

### **213. What is a React component?**  
A React component is a **reusable UI element** that returns a piece of the interface and can either be **stateful** or **stateless**.

---

### **214. What is a higher-order component in React?**  
A higher-order component (HOC) is a **function** that takes a component and returns a new component with additional functionality.

---

### **215. What is the purpose of the `render()` method in a React component?**  
The `render()` method returns the **JSX** that represents the component's UI.

---

### **216. What is the difference between a controlled and uncontrolled component in React?**  
- **Controlled:** Managed by React state.  
- **Uncontrolled:** Managed by the DOM.

---

### **217. How can you pass data from a parent component to a child component in React?**  
By using **props** to pass data from the parent to the child.

---

### **218. What are some lifecycle methods of a React component?**  
- **componentDidMount()**  
- **componentDidUpdate()**  
- **componentWillUnmount()**

---

### **219. What is the significance of the `key` prop in a React component?**  
`key` helps React **identify and manage components** efficiently during re-rendering.

---

### **220. What is React Router?**  
React Router is a library used for **navigation** and handling routing in single-page React applications.

---

### **221. What is Redux?**  
Redux is a state management library used to manage **global state** in JavaScript applications.

---

### **222. What is the purpose of the `connect()` function in Redux?**  
`connect()` links a component to the Redux store, providing it access to **state** and **dispatch** actions.

---

### **223. What is a Redux store?**  
The Redux store holds the **entire application state** and provides methods to **dispatch actions** and subscribe to changes.

---

### **224. What is an action creator in Redux?**  
An action creator is a function that **returns an action** to be dispatched to the Redux store.

---

### **225. What is a reducer in Redux?**  
A reducer is a pure function that takes the **current state** and an **action** and returns the new state.

---

### **226. What is the difference between a presentational and container component in Redux?**  
- **Presentational component:** Focuses on rendering the UI.  
- **Container component:** Connects the UI to the Redux store and manages state.

---

### **227. How does Redux middleware work?**  
Redux middleware is a way to enhance the store’s abilities, often used for handling **asynchronous actions** or logging.

---

### **228. What is the purpose of Redux Thunk?**  
Redux Thunk is middleware that allows **action creators to return functions** (instead of just actions) for handling asynchronous logic.

---

### **229. What is React Native?**  
React Native is a framework for building **native mobile applications** using React.

---

### **230. What are some differences between React and React Native?**  
- **React:** Used for building **web applications**.  
- **React Native:** Used for building **mobile applications** (iOS and Android).

---

### **231. What is the purpose of React hooks?**  
React hooks allow you to **use state and lifecycle features** in functional components.

---

### **232. What are some commonly used React hooks?**  
- **useState()**  
- **useEffect()**  
- **useContext()**  
- **useReducer()**  

---

### **233. What is the useContext hook in React?**  
`useContext()` is a hook used to access the **value of a context** within a component.

---

### **234. What is the useReducer hook in React?**  
`useReducer()` is a hook used for managing **complex state logic**, similar to Redux.

---

### **235. What is server-side rendering in React?**  
Server-side rendering (SSR) is when the server generates the **HTML content** for a React component before sending it to the client.

---

### **236. What is the difference between CSR and SSR?**  
- **CSR (Client-Side Rendering):** The browser renders the content using JavaScript.  
- **SSR (Server-Side Rendering):** The server generates the HTML content before sending it to the browser.

---

### **237. How can you optimize the performance of a React app?**  
- Use **React.memo**  
- Use **lazy loading**  
- **Code splitting**  
- Optimize **re-renders**  
- Use **PureComponent** or **shouldComponentUpdate()**

---

### **238. What is the purpose of React Fiber?**  
React Fiber is a **reconciliation algorithm** that improves React’s rendering and makes the UI more **responsive**.

---

### **239. What is React Suspense?**  
React Suspense is a feature that allows components to **wait for data** or other resources before rendering.

---

### **240. What is a React portal?**  
A React portal allows rendering a child component into a **different part of the DOM** outside its parent hierarchy.

---

### **241. What are some alternatives to Redux?**  
- **MobX**  
- **Recoil**  
- **Context API**

---
