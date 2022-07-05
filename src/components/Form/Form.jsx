import React, { Component } from 'react';
import shortid from 'shortid';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { Form, Label, Input, AddBtn } from './Form.styled';

// const mySchema = yup.object().shape({
//   name: yup.string().min(2).required('Name is required'),
//   number: yup.string().length(9).required('Number is required'),
// });

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
      // <Formik
      //   initialValues={this.state}
      //   validationSchema={mySchema}
      //   onSubmit={this.hadleSubmit}
      // >
      // {props => ()};
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInput}>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Rosie Simpson"
            required
            id={this.nameInput}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Label htmlFor={this.numberInput}>Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\d{3}[\-]\d{2}[\-]\d{2}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="000-00-00"
            required
            id={this.numberInput}
            value={this.state.number}
            onChange={this.handleChange}
          />
          <AddBtn type="submit">Add contact</AddBtn>
        </Form>
      //</Formik>
    );
  }
}
