import r from 'r-dom';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialize as initializeI18n } from '../utils/i18n';
import { subset } from '../utils/routes';

import TransitImmutable from '../utils/transitImmutable';

// TODO saga is probably what we need
import middleware from 'redux-thunk';

import reducers from '../reducers/reducersIndex';
import SearchPageContainer from '../components/sections/SearchPage/SearchPageContainer';

export default (props) => {
  const locale = props.i18n.locale;
  const defaultLocale = props.i18n.defaultLocale;

  initializeI18n(locale, defaultLocale, process.env.NODE_ENV);

  const routes = subset([
    'listing',
    'person',
  ], { locale });

  const combinedReducer = combineReducers(reducers);

  const bootstrappedData = TransitImmutable.fromJSON(props.data);
  const searchPage = Object.assign({}, props, { data: bootstrappedData });
  const combinedProps = Object.assign({}, { searchPage }, { routes });

  const store = applyMiddleware(middleware)(createStore)(combinedReducer, combinedProps);

  return r(Provider, { store }, [
    r(SearchPageContainer),
  ]);
};
