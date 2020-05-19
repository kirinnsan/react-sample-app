import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// actionCreater(関数)をインポート
import { postEvent } from '../actions/index'

class EventNew extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    console.log('onSubmit', values);
    await this.props.postEvent(values);
    // react-router-domライブラリからimportしているRouteコンポーネントで
    // 描画されたコンポーネントでは、propsにhistoryが組み込まれる
    this.props.history.push('/');
  }

  render() {
    // handleSubmitはredux-formで定義されているもの
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const { style } = { margin: 12 };

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <RaisedButton label="Submit" type="Submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title, please";
  }
  if (!values.body) {
    errors.body = "Enter a body, please";
  }

  return errors;
}

const mapDispatchToProps = dispatch => ({
  // actionCreater(関数)の引数も設定する
  postEvent: (values) => dispatch(postEvent(values))
});

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventNew)
)
