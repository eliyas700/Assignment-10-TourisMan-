import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 className="text-secondary fw-bold text-center my-3">Blog Section </h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="fw-bold">
              {" "}
              Differences between Authentication and Authorization{" "}
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Simply said, authentication is the act of confirming a user's
            identity, whereas authorization is the process of confirming what
            they have access to. <br />
            <b>Authentication :</b> <br />
            1. Determines whether users are who they claim to be <br />
            2. Challenges the user to validate credentials (for example, through
            passwords, answers to security questions, or facial recognition){" "}
            <br />
            3. Usually done before authorization <br /> <br />
            <b>Authorization :</b> <br />
            1. Determines what users can and cannot access <br />
            2. Verifies whether access is allowed through policies and rules{" "}
            <br />
            3. Usually done after successful authentication
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="fw-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Google Firebase is a platform that lets developers to create apps
            for iOS, Android, and the web.Many characteristics distinguish
            Google Firebase as the go-to backend development tool for web and
            mobile projects. It decreases the amount of effort and time spent on
            development. It's also an excellent prototyping tool. Firebase is a
            simple, lightweight, user-friendly, and well-known platform.Indeed,
            using Firebase as a backend for dynamic apps is a less technical and
            time-consuming alternative to building full-fledged backend
            code.With Firebase, it's pretty simple to connect and use built-in
            third-party authentication providers, including Google, Facebook,
            Twitter, among others. <br /> <br />
            Other options we have to implement authentication : <br />
            Parse , Back4App , AWS Amplify,Kuzzle, Couchbase, NativeScript, RxDB
            , Flutter, LoopBack etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="fw-bold">
              What other services does firebase provide other than
              authentication ?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            There are many services which Firebase provides, Most useful of them
            are: Cloud Firestore. Cloud Functions. Authentication. Hosting.
            Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
