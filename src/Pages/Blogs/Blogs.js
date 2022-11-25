import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-3">
      <div className="w-64  shadow-lg p-4">
        <h1 className="text-2xl font-bold">
          How does prototypical inheritance work?
        </h1>
        <p>
          Every object with its methods and properties contains an internal and
          hidden property known as Prototype. The Prototypal Inheritance is a
          feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__..
        </p>
      </div>
      <div className="w-64  shadow-lg p-4">
        <h1 className="text-2xl font-bold">
          What is a unit test? Why should we write unit tests?
        </h1>
        <p>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. Unit testing is an important step in the development
          process, because if done correctly, it can help detect early flaws in
          code which may be more difficult to find in later testing stages.
        </p>
      </div>
      <div className="w-64  shadow-lg p-4">
        <h1 className="text-2xl font-bold">React vs. Angular vs. Vue?</h1>
        <p>
          Angular, developed by Google, was first released in 2010, making it
          the oldest of the lot. It is a TypeScript-based JavaScript framework.
          A substantial shift occurred in 2016 on the release of Angular 2 (and
          the dropping of the “JS” from the original name – AngularJS).<br></br>
          Vue, also known as Vue.js, is the youngest member of the group. It was
          developed by ex-Google employee Evan You in 2014. Over the last
          several years, Vue has seen a substantial shift in popularity, even
          though it doesn’t have the backing of a large company.<br></br>
          React, developed by Facebook, was initially released in 2013. Facebook
          uses React extensively in their products (Facebook, Instagram, and
          WhatsApp). Similar to Vue, the React developers also announce their
          newest version on the blog section of the React website.
        </p>
      </div>
      <div className="w-64  shadow-lg p-4">
        <h1 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          The Four Kinds of React State to Manage Local state. Global state.
          Server state. URL state.Local state is data we manage in one or
          another component. Local state is most often managed in React using
          the useState hook.Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least.Data that
          comes from an external server that must be integrated with our UI
          state. Server state is a simple concept, but can be hard to manage
          alongside all of our local and global UI state.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
