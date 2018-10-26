import React from "react";
import ReactDOM from "react-dom";
import HomePC from "./HomePC";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RootR from "../../store/reducers/RootR";

const store = createStore(
  RootR,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <HomePC />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
