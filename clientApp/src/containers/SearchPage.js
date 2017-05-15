import React, { Component } from 'react';
import SearchForm from '../components/SearchForm.js';
import SearchAPI from "../services/api/SearchAPI";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      search: {
        name : '',
        result: '',
        }
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }



  onChange(event) {
    const field = event.target.name;
    const search = this.state.search;
    search[field] = event.target.value;

    this.setState({
      search
    });
  }

  //@param {object} event - the JavaScript event object
  async submit(event) {
    event.preventDefault();

    let response = await SearchAPI.translate(this.state.search);


    if (response.success) {

      this.setState({
        errors: {},
        result: response.result
      });

      alert("OK");
      console.log('priv ',response.result);

    } else {

      const errors = response.errors ? response.errors : {};
      errors.summary = response.message;

      this.setState({
        errors
      });
    }
}

  render() {
    return (
      <SearchForm
        onSubmit={this.submit}
        onChange={this.onChange}
        errors={this.state.errors}
        search={this.state.search}
      />
    );
  }
}

export default SearchPage;
