import ajax from '@fdaciuk/ajax';
import React, { Component } from 'react';
import t from 'tcomb-form';
import validate from 'validate.js';

const api = ajax({baseUrl: 'https://www.adammarkon.com/api'});
const constraints = {
  email: {
    email: true
  }
};
const EmailField = t.refinement(t.String, (e) => !validate({email: e}, constraints));

const schema = t.struct({
  name: t.String,
  email: EmailField,
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
    if (this.form.getValue()) {
      const {name, email, phone, subject, body} = this.form.getValue();
      api.post(
        '/contact',
        {name, email, phone, subject, body}
      ).then((resp) => {
        this.setState({value: null});
      });
    } else {
      document.querySelector('#required-label').className = 'error';
    }
  };

  onChange = (data, path) => {
    this.form.getComponent(path).validate();
    document.querySelector('#required-label').className = '';
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
          <button className="btn btn-primary">Save</button>
          <strong><span id="required-label">All fields are required.</span></strong>
        </form>
      </div>
    )
  }
}
