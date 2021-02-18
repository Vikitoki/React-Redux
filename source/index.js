import { createStore, bindActionCreators } from "redux";

import "./components/styles/style.scss";

import { inc, dec, rnd } from "./js/actions";
import reducer from "./js/reducer";

const store = createStore(reducer),
  { dispatch } = store;

// const bindActionsCreator = (dispatch, creator) => {
//   return (...args) => {
//     dispatch(creator(...args));
//   };
// };

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
  {
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd,
  },
  dispatch
);

document.getElementById("inc").addEventListener("click", incDispatch);

document.getElementById("dec").addEventListener("click", decDispatch);

document.getElementById("rnd").addEventListener("click", function () {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

const update = () => {
  document.querySelector(".intro__count").textContent = store.getState();
};

store.subscribe(update);
