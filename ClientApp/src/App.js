import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import List from './components/List';
import SearchImdbId from './components/SearchImdbId';
import axios from 'axios';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/SearchImdbId' component={SearchImdbId} />
      </Layout>
    );
  }
}
