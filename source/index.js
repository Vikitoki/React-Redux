import { createStore } from "redux";

import "./components/styles/style.scss";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return state + action.value;
    default:
      return state;
  }
};

const inc = () => ({ type: "INC" }),
  dec = () => ({ type: "DEC" }),
  rnd = (value) => ({ type: "RND", value });

const store = createStore(reducer);

document.getElementById("inc").addEventListener("click", function () {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener("click", function () {
  store.dispatch(dec());
});

document.getElementById("rnd").addEventListener("click", function () {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

const update = () => {
  document.querySelector(".intro__count").textContent = store.getState();
};

store.subscribe(update);
