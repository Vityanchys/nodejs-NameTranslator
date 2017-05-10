import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, TextField, RaisedButton } from 'material-ui';


class SearchForm extends Component {
  render() {
    const onSubmit = this.props.onSubmit;
    const onChange = this.props.onChange;
    const errors = this.props.errors;
    const search = this.props.search;

    return (

    <Card className="container">

    {errors.summary && <p>{errors.summary}</p>}

      <TextField
      floatingLabelText="Имя"
      name="name"
      value={search.name}
      errorText={errors.name}
      onChange={onChange}
     />

      <div className="btn-right">
        <RaisedButton type="submit" label="Перевести"  onClick={onSubmit} primary />
      </div>
    </Card>
  )};
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired
};


export default SearchForm;
