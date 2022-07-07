import React, { Component } from 'react';
import shortid from 'shortid';
import { Form } from './Form.styled';
import { Button, Input, Label } from 'components/commons';
export class ContactForm extends Component {

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.onSubmit({
      name: form.elements.name.value,
      number: form.elements.number.value,
    });
    form.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Rosie Simpson"
            required
            id={this.nameInput}
          />
        </Label>
        <Label htmlFor={this.numberInput}>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInput}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
