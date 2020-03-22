import React, {Component} from 'react';
import Router from './router';
import '@blueprintjs/core/lib/css/blueprint.css';
import './assets/css/bootstrap-grid.css';
import './style.css';

export default class app extends Component {
  render() {
    return (
      <>
        <Router/>
      </>
    )
  }
}