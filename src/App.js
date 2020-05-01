import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner, toaster } from "evergreen-ui";

const LoginComponent = lazy(() => import("./pages/auth/login"));
const RegisterComponent = lazy(() => import("./pages/auth/register"));
const Layout = lazy(() => import("./components/layout/layout"));

const loading = (props) => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path={"/login"}
              name={"login"}
              render={(props) => <LoginComponent {...props} />}
            />
            <Route
              exact
              path={"/register"}
              name={"register"}
              render={(props) => <RegisterComponent {...props} />}
            />
            <Route
              path={"/"}
              render={(props) => <Layout {...props} name={"Dashboard"} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
