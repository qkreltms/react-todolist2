import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList.jsx'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import NavBar from './component/header/NavBar.jsx'
import About from './component/About.jsx'
import { connect } from 'react-redux'
import * as actions from './actions/locale'

import locale from './i18n/plugin'
import en from 'react-intl/locale-data/en'
import ko from 'react-intl/locale-data/ko'
import { IntlProvider, addLocaleData } from 'react-intl'

addLocaleData([...en, ...ko])
class App extends Component {
  componentDidUpdate() {
    localStorage.setItem('lang', this.props.lang)
  }

  render() {
    const defaultLang = localStorage.getItem('lang') || 'en'
    const lang = this.props.lang || defaultLang
    
    return (
      <IntlProvider locale={lang} messages={locale[lang]}>
        <BrowserRouter>
          <div className='App'>
            <NavBar setLocale={this.props.setLocale} />

            <Switch>
              <Route exact path='/' component={TodoList} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.locale.lang
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLocale: (lang) => {
    dispatch(actions.setLocale(lang))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
