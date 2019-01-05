import React from "react";
import * as actions from "../actions/randomDogs";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const fetchDog = props => {
  return async function(dispatch, getState) {
    props.requestDog();
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      return props.requestDogSuccess(data);
    } catch (err) {
      return props.requestDogFailed(err);
    }
  };
};

const RandomPicture = props => {
    console.log(props.requestDog)
    console.log(props.dispatch)

  return (
    <div>
      <button onClick={() => fetchDog(props)}>Show Dog</button>
      {props.loading ? (
        <p>Loading...</p>
      ) : props.error ? (
        <p>{props.errorMsg}</p>
      ) : (
        <p>
          <img alt="img for dogs" src={props.url} />
        </p>
      )}
    </div>
  );
};

RandomPicture.propTypes = {
  url: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  loading: PropTypes.bool,
  requestDog: PropTypes.func,
  requestDogFailed: PropTypes.func,
  requestDogSuccess: PropTypes.func
};

RandomPicture.deafultProps = {
  url: "",
  error: false,
  errorMsg: "",
  lading: false,
  requestDog: () => {
    console.warn("requestDog is not defined");
  },
  requestDogFailed: () => {
    console.warn("requestDogFailed is not defined");
  },
  requestDogSuccess: () => {
    console.warn("requestDogSuccess is not defined");
  }
};

const mapStateToProps = state => ({
  url: state.randomDogs.url,
  error: state.randomDogs.error,
  errorMsg: state.randomDogs.errorMsg,
  loading: state.randomDogs.loading
});

const mapDispatchToProps = dispatch => ({
  requestDog: () => {
    dispatch(actions.requestDog());
  },
  requestDogSuccess: data => {
    dispatch(actions.requestDogSuccess(data));
  },
  requestDogFailed: err => {
    dispatch(actions.requestDogFailed(err));
  },
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPicture);
