import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import asyncawesomeapi from '../actions';
// import asyncawesomeaapi from '../api/awesomeapi';
// import { valueCurriesButNotUSDT } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: 'USD',
    };
  }

  // handleChange
inputChangeAll = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  });
}

  componentDidMount = async () => {
    const { currenciesAPI } = this.props;
    currenciesAPI();
    // const { dispatch } = this.props;
    // dispatch(valueCurriesButNotUSDT(asyncawesomeaapi()));
  };

  render() {
    const { email, currencies } = this.props;
    const { currency } = this.state;
    return (
      <>
        <header>
          <h2>Wallet</h2>
          <h4 data-testid="email-field">{ email }</h4>
          <h4 data-testid="total-field">
            total:
            { 0 }
          </h4>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
        {/* <------------------------------------------------------> */}
        <section>
          <input name="description" data-testid="description-input" />
          <label htmlFor="tag-input">
            categoria:
            <select
              id="tag-iput"
              name="tag-input"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              name="method"
              id="method"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              id="currency-input"
              name="currency-input"
              value={ currency }
              onChange={ this.inputChangeAll }
            >
              {currencies.map((currencie) => (
                <option key={ currencie } value={ currencie }>{ currencie }</option>
              ))}
            </select>
          </label>
          <input name="value-input" data-testid="value-input" />
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesAPI: () => dispatch(asyncawesomeapi()),
});

const mapStateToProps = (store) => ({
  email: store.user.email,
  currencies: store.wallet.currencies,
});

Wallet.propTypes = {
  currenciesApI: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
