import ApolloClient, { InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
    uri: `http://118.25.24.46:5300/graphql`,
    cache: new InMemoryCache(),
})

export default client
