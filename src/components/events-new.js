import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

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
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
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
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >Cancel</Link>
        </div>
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
