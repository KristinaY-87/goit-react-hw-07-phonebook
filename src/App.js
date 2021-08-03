import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from './component/ContactList';
import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import Section from './component/Section';
import operations from './redux/operations';
import { getLoading } from './redux/contacts-selectors';
import './App.css';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
          {this.props.isLoadingContacts && <h1>download...</h1>}
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
