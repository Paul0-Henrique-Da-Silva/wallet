import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncawesomeApi, valueCurriesExpences, newArrayExpenses } from '../actions';
import apiFecth from '../api/apiFecth';

class Wallet extends React.Component {
state = {
  expenseOject: { value: 0,
    currency: 'USD',
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
  },
}

resetState = () => {
  this.setState({
    expenseOject: { value: 0,
      currency: 'USD',
      description: '',
      tag: 'Lazer',
      method: 'Dinheiro',
    },
  });
};

saveStateReactOnRedux = () => {
  const { expenseOject } = this.state;
  const { expensesDetails } = this.props;
  expensesDetails(expenseOject);
  this.resetState();
};

saveStateAndCallOtherFunc = async () => {
  const { expenseOject } = this.state;
  const { expenses } = this.props;
  this.setState({
    expenseOject: {
      ...expenseOject,
      id: expenses.length,
      exchangeRates: await apiFecth(),
    },
  }, this.saveStateReactOnRedux);
}

// handleChange
inputChangeAll = ({ target }) => {
  const { expenseOject } = this.state;
  this.setState({
    expenseOject: {
      ...expenseOject,
      [target.name]: (target.value),
    },
  });
}

  componentDidMount = async () => {
    const { currenciesAPI } = this.props;
    currenciesAPI();
  };

  sumAll = () => {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, valueExpense) => acc
      + Number(valueExpense.value)
      * Number(valueExpense.exchangeRates[valueExpense.currency].ask), 0)
      .toFixed(2);
    return sum;
  }

  format = (value) => parseFloat(value).toFixed(2);

  formatValue = (value, exchange) => {
    const valor = parseFloat(value) * parseFloat(exchange);
    return this.format(valor);
  }

  deleteEvent = (evento) => {
    const { expenses, newArray } = this.props;
    newArray(expenses, evento);
    this.sumAll();
  }

  render() {
    const { email, currencies, expenses } = this.props;
    const { expenseOject: { currency, description, value, method, tag } } = this.state;
    return (
      <>
        <header>
          <h2>Wallet</h2>
          <h4 data-testid="email-field">{ email }</h4>
          <h4 data-testid="total-field">
            { this.sumAll() }
          </h4>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
        {/* <------------------------------------------------------> */}
        <section>
          <input
            value={ description }
            name="description"
            data-testid="description-input" // talvez colocar o tipo
            onChange={ this.inputChangeAll }
          />
          <label htmlFor="tag">
            categoria:
            <select
              value={ tag }
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.inputChangeAll }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              value={ method }
              name="method"
              id="method"
              data-testid="method-input"
              onChange={ this.inputChangeAll }
            >
              <option>Dinheiro</option>
              <option>Cartão de débito</option>
              <option>Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="currency">
            Moeda :
            <select
              value={ currency }
              id="currency"
              name="currency"
              onChange={ this.inputChangeAll }
            >
              {currencies.map((currencie) => (
                <option key={ currencie } value={ currencie }>{ currencie }</option>
              ))}
            </select>
          </label>
          <input
            value={ value }
            name="value"
            data-testid="value-input"
            onChange={ this.inputChangeAll }
          />
          <button
            type="button"
            onClick={ this.saveStateAndCallOtherFunc }
          >
            Adicionar despesa
          </button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {(
            expenses.length > 0
              ? (
                <tbody>
                  {(
                    expenses.map((expense) => (
                      <tr key={ expense.id }>
                        <td>{ expense.description }</td>
                        <td>{ expense.tag }</td>
                        <td>{ expense.method }</td>
                        <td>{parseFloat(expense.value).toFixed(2)}</td>
                        <td>
                          {
                            (expense.exchangeRates[expense.currency].name).split('/', 1)
                            // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
                          }
                        </td>
                        <td>
                          { this.format(expense.exchangeRates[expense.currency].ask) }
                        </td>
                        <td>
                          {
                            this.formatValue(expense.value,
                              expense.exchangeRates[expense.currency].ask)
                          }
                        </td>

                        <td />
                        <td>Real</td>
                        <td>
                          <button
                            type="button"
                            data-testid="edit-btn"
                          >
                            Editar
                          </button>
                          <button
                            id={ expense.id }
                            type="button"
                            data-testid="delete-btn"
                            onClick={ (evento) => this.deleteEvent(evento) }
                          >
                            Excluir
                          </button>
                        </td>
                      </tr>
                    )))}
                </tbody>
              )
              : <tbody />
          )}
        </table>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesAPI: () => dispatch(asyncawesomeApi()), // type moeda do select requisto 4
  expensesDetails: (data) => dispatch(valueCurriesExpences(data)),
  newArray: (data, evento) => dispatch(newArrayExpenses(data, evento)) });

const mapStateToProps = (store) => ({
  email: store.user.email,
  currencies: store.wallet.currencies, // usdt/ btc...
  expenses: store.wallet.expenses });

Wallet.propTypes = {
  email: PropTypes.string,
  currenciesAPI: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.shape()) }.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
