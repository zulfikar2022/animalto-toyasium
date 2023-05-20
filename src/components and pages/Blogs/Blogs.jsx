import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog">
        <h3 className="blog-header">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p className="blog-body">
          Access tokens and refresh tokens are some credentials of a user which
          are used in authentication and authorization purpose. <br />
          An access token is long time token which is created while user logged
          in any app for first time and stay valid for a long time. This helps
          to generate refresh token which is a short time token. Both access
          token and refresh tokens can be stored in browsers local storage or in
          http cookie. But it is recommended to store then in http only cookie
          for security purpose.
        </p>
      </div>
      <div className="blog">
        <h3 className="blog-header">2.Compare SQL and NoSQL databases?</h3>
        <p className="blog-body ">
          SQL and NoSQL are two different types of database management system.
          <ul style={{ fontWeight: "normal" }}>
            <li style={{ fontWeight: "normal", listStyleType: "disc" }}>
              SQL database use a structured data model based on table whereas
              NoSQL database use various data models including key-value,
              document, columnar, and graph.
            </li>
            <li style={{ fontWeight: "normal", listStyleType: "disc" }}>
              SQL databases are typically vertically scalable whereas NoSQL
              databases are scalable horizontally.
            </li>
            <li style={{ fontWeight: "normal", listStyleType: "disc" }}>
              SQL databases use SQL language for manipulating data. On the other
              hand, NoSQL databases may have their query languages specific to
              their data models.
            </li>
          </ul>
        </p>
      </div>
      <div className="blog">
        <h3 className="blog-header">
          3.What is express js? What is Nest JS (google it)?
        </h3>
        <p className="blog-body">
          express js is a popular and widely used framework based on Node.js for
          backend. It allows developers to handle http requests, define
          middleware functions for process incoming requests and send response.{" "}
          <br /> <br />
          NestJS is a progressive and opinionated full-stack framework for
          building scalable and maintainable server-side applications. It is
          built with TypeScript and heavily inspired by Angular, adopting many
          of its concepts and design patterns.
        </p>
      </div>
      <div className="blog">
        <h3 className="blog-header">
         4.What is MongoDB aggregate and how does it work ?
        </h3>
        <p className="blog-body">
          The aggregate operation is a powerful and flexible tool for performing
          data aggregation tasks, such as grouping, filtering, and transforming
          data within a collection in MongoDB. It allows you to process multiple
          documents and return computed results based on the specified
          aggregation pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
