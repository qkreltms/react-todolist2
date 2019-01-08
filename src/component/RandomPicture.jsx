import React from "react";
import * as actions from "../actions/randomDogs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

const RandomPicture = props => {
  return (
    <div>
      <button onClick={() => props.dispatch(actions.fetchDog())}>
        <FormattedMessage id="show_dog" />
      </button>
      {props.loading ? (
        <p><FormattedMessage id="loading" /></p>
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
  dispatch: PropTypes.func
};

RandomPicture.deafultProps = {
  url: "",
  error: false,
  errorMsg: "",
  lading: false,
  dispatch: null
};

const mapStateToProps = state => ({
  url: state.randomDogs.url,
  error: state.randomDogs.error,
  errorMsg: state.randomDogs.errorMsg,
  loading: state.randomDogs.loading
});

export default connect(mapStateToProps)(RandomPicture);
