/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const generateSomething = /* GraphQL */ `
  query GenerateSomething($input: AWSJSON!) {
    generateSomething(input: $input)
  }
`;
export const getSomethingAppData = /* GraphQL */ `
  query GetSomethingAppData($id: ID!) {
    getSomethingAppData(id: $id) {
      id
      queryName
      thingsGenerated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSomethingAppData = /* GraphQL */ `
  query ListSomethingAppData(
    $filter: ModelSomethingAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSomethingAppData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        thingsGenerated
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const somethingQueryName = /* GraphQL */ `
  query SomethingQueryName(
    $queryName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSomethingAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    somethingQueryName(
      queryName: $queryName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        thingsGenerated
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
