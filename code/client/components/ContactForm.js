import fermata from 'fermata';
import React, { Component } from 'react';
import t from 'tcomb-form';

const api = fermata.json('http://www.adammarkon.com');

const schema = t.struct({
  name: t.String,
  email: t.String,
  phone: t.String,
  subject: t.String,
  body: t.String
});

const options = {
  fields: {
    name: {
      attrs: {
        placeholder: 'John Smith'
      },
    },
    email: {
      attrs: {
        placeholder: 'j.smith@example.org'
      },
    },
    phone: {
      attrs: {
        placeholder: '(212) 555-1234'
      },
    },
    subject: {
      attrs: {
        placeholder: 'What are you writing about?'
      },
    },
    body: {
      attrs: {
        placeholder: 'Any additional details you have for me...',
      },
      type: 'textarea'
    }
  }

};

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {name, email, phone, subject, body} = this.form.getValue();
    api.api.contact.post({name, email, phone, subject, body}, (err, data) => {
      alert(data);
    });
  };

  onChange = (data) => {

  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.onSubmit}>
          <t.form.Form
            ref={f => this.form = f}
            type={schema}
            value={this.state.value}
            onChange={this.onChange}
            options={options}
          />
          <h6>All fields are required.</h6>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}
