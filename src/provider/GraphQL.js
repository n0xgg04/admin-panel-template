import * as React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function GraphQL({children}) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
    );
};
