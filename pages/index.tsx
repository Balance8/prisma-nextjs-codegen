import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from 'src/apollo';
import { useNameQuery } from 'src/generated/graphql';
import { NameQuery } from 'src/queries.graphql';

export default function Home() {
  const { data, loading } = useNameQuery();

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: NameQuery,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
