import { gql } from '@apollo/client';

export const NameQuery = gql`
  query Name {
    name
  }
`;
