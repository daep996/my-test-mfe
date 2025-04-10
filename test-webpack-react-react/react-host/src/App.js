import React, { Suspense } from "react";

const RemoteHeaderNavbar = React.lazy(() => import("remote/HeaderNavbar"));
const RemoteTableUsers = React.lazy(() => import("remote/TableUsers"));

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        Header...
        <Suspense fallback="Loading HeaderNavbar...">
          <RemoteHeaderNavbar />
        </Suspense>
      </header>
      <main>
        <p>Content...</p>
        <Suspense fallback="Loading TableUsers...">
          <RemoteTableUsers />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
