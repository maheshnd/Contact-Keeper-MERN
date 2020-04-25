import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContex from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContex);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    console.log('Testing.................');

    return <h2>Please add contact</h2>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered != null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
