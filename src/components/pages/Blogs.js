import React from 'react';

const Blogs = () => {
    return <div>
<h4>How will you improve the performance of a React Application?</h4>
<ul>
<li>Keeping component state local where necessary.</li>
<li>Memoizing components to prevent unnecessary re-renders.</li>
<li>Code-splitting using dynamic import()</li>
<li>Windowing or list virtualization.</li>
<li>Lazy loading images.</li>
</ul>

<h4>What are the different ways to manage a state in a React application?</h4>
<ul>
<li>Hooks</li>
<li>Redux</li>
<li>Context API</li>
</ul>

<h4>How does prototypical inheritance work?</h4>
<p>In JavaScript, objects have a special hidden property named [[Prototype]] that is either null or references another object. That object is called "a prototype". When we read a property from an object, and it’s missing, JavaScript automatically takes it from the prototype property. This is called "prototypal inheritance".</p>

<h4>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
<p>It is not safe to modify products directly, instead use setProducts to modify products asynchronously.</p>

<h4>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
<p>I'll traverse the array and search the search term in each item name.</p>

<h4>What is a unit test? Why should write unit tests?</h4>
<p>A unit test is a test that is responsible for testing a small unit of an application. Unit tests are useful for preventing bugs in code.</p>
    </div>;
};

export default Blogs;
