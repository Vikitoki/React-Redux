import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../js/actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <>
      <h2 className="intro__count">{counter}</h2>
      <button onClick={inc} type="button" className="intro__btn">
        Click -
      </button>
      <button onClick={dec} type="button" className="intro__btn">
        Click +
      </button>
      <button onClick={rnd} type="button" className="intro__btn">
        Get random
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    inc,
    dec,
    rnd: () => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// <Counter
// incDispatch={incDispatch}
// decDispatch={decDispatch}
// rndDispatch={() => {
// 	const value = Math.floor(Math.random() * 10);
// 	rndDispatch(value);
// }}
// counter={store.getState()}
// />
