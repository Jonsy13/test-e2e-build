import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from './config';
import App from './containers/app/App';
import configureStore from './redux/configureStore';
import createApolloClient from './utils/createApolloClient';
import Loader from './components/Loader';

const { persistor, store } = configureStore();

const client = createApolloClient(
  `${config.grahqlEndpoint}/query`,
  `${config.grahqlEndpointSubscription}/query`
);

const ReduxRoot = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default ReduxRoot;
