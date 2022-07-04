import React, { Component } from 'react';
import shortid from 'shortid';
import { Form, Label, Input, AddBtn } from './Form.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder='Rosie Simpson'
          required
          id={this.nameInput}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Label htmlFor={this.numberInput}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder='XXX-XX-XX'
          required
          id={this.numberInput}
          value={this.state.number}
          onChange={this.handleChange}
        />
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    );
  }
}
