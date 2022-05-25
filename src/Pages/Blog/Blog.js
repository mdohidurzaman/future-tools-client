import React from "react";

const Blog = () => {
  return (
    <div className="mb-36">
      <h1 className="text-3xl text-center py-16 font-bold">Our Blogs</h1>
      <div className="all-question grid md:grid-cols-2 px-20 gap-10">
        <div className="singile-question">
          <h3 className="text-lg font-bold">
            How will you improve the performance of a React Application?
          </h3>
          <p>Some performance optimization technique for react app as below</p>
          <p>1. Using Immutable Data Structures</p>
          <p>2. Function/Stateless Components and React.PureComponent</p>
          <p>3. Multiple Chunk Files</p>
          <p>4. Using Production Mode Flag in Webpack</p>
          <p>5. Dependency optimization</p>
          <p>6. Avoid Inline Function Definition in the Render Function.</p>
          <p>7.Avoid using Index as Key for map</p>
          <p>8. Avoiding Props in Initial States</p>
          <p>9. CSS Animations Instead of JS Animations</p>
          <p>10. Consider Server-side Rendering</p>
        </div>
        <div className="singile-question">
          <h3 className="text-lg font-bold">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            React gives developers complete freedom over how state is managed
            within a component. 3 Ways To Handle State Better in React
          </p>
          <p>1. Use useReducer for Complex State</p>
          <p>
            Sometimes the useState hook won’t cut it, especially when dealing
            with complex state behavior that may involve large objects. The
            useReducer hook is a powerful provided React hook for dealing with
            complex state management that doesn’t require third-party
            dependencies. Also, it reduces the amount of data recreated with
            each render.
          </p>
          <p>2. Custom Hooks</p>
          <p>
            When using React hooks, you can sometimes end up with incredibly
            complex state logic within one component that utilizes multiple
            types of hooks to achieve one purpose.
          </p>
          <p>3.Global State Management</p>
          <p>
            In most cases, you don’t need a state management library. Only in
            larger applications that are dealing with complex states should you
            bring in an external library to manage it. Even then, reconsider if
            you can’t just use the provided Context API to share data between
            components.
          </p>
        </div>
        <div className="singile-question">
          <h3 className="text-lg font-bold">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            Prototype-based programming is a style of object-oriented
            programming in which behaviour reuse (known as inheritance) is
            performed via a process of reusing existing objects that serve as
            prototypes. This model can also be known as prototypal,
            prototype-oriented, classless, or instance-based programming.
          </p>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
        <div className="singile-question">
          <h3 className="text-lg font-bold">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts.
          </h3>
          <p>
            One should never update the state directly because of the following
            reasons:
          </p>
          <p>
            1. If you update it directly, calling the setState() afterward may
            just replace the update you made.
          </p>
          <p>
            2. When you directly update the state, it does not change this.state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value.
          </p>
          <p>
            3. setState() does not immediately mutate this.state but creates a
            pending state transition. Accessing this.state after calling this
            method can potentially return the existing value.
          </p>
          <p>
            4. There is no guarantee of synchronous operation of calls to
            setState and calls may be batched for performance gains.
          </p>
          <p>
            5. setState() will always trigger a re-render unless conditional
            rendering logic is implemented in shouldComponentUpdate(). If
            mutable objects are being used and the logic cannot be implemented
            in shouldComponentUpdate(), calling setState() only when the new
            state differs from the previous state will avoid unnecessary
            re-renders.
          </p>
        </div>
        <div className="singile-question">
          <h3 className="text-lg font-bold">
            What is a unit test? Why should write unit tests?
          </h3>
          <h4 className="text-lg font-bold">What is a unit test? </h4>
          <p>
            Unit testing is a software testing method where “units”—the
            individual components of software—are tested. Developers write unit
            tests for their code to make sure that the code works correctly.
            This helps to detect and protect against bugs in the future.
          </p>
          <h4 className="text-lg font-bold">Why should write unit tests?</h4>
          <p>1. Any bugs are found easily and quicker</p>
          <p>2. Unit testing saves time and money</p>
          <p>3. Unit testing provides documentation</p>
          <p>4. Unit testing helps gauge performance</p>
          <p>5. Unit testing improves code coverage</p>
          <p>6. Unit testing reduces code complexity</p>
          <p>7. Unit testing result is quality application</p>
          <p>
            Unit testing ensures that all code meets quality standards before
            it’s deployed. This ensures a reliable engineering environment where
            quality is paramount. Over the course of the product development
            life cycle, unit testing saves time and money, and helps developers
            write better code, more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
