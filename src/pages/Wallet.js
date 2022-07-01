import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>Wallet</h2>
        <h4 data-testid="email-field">{ email }</h4>
        <h4 data-testid="total-field">
          total:
          { 0 }
        </h4>
        <h5 data-testid="header-currency-field">BRL</h5>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
