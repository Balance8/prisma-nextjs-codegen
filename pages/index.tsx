import { GetStaticProps } from 'next';
import { initializeApollo } from 'src/apollo';
import { ManyUsersDocument, useManyUsersQuery } from 'src/generated/graphql';

export default function Home() {
  const { data, loading } = useManyUsersQuery();

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ManyUsersDocument,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  };
};
