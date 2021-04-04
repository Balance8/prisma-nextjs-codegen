import { gql } from 'apollo-server-micro';

// export const UserQuery = gql`
//   query User {
//     id
//     firstName
//     lastName
//     email
//     phone
//   }

// `;
export const ManyUsersQuery = gql`
  query manyUsers {
    manyUsers {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;
