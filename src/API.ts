/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSomethingAppDataInput = {
  id?: string | null,
  queryName: string,
  thingsGenerated: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSomethingAppDataConditionInput = {
  queryName?: ModelStringInput | null,
  thingsGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSomethingAppDataConditionInput | null > | null,
  or?: Array< ModelSomethingAppDataConditionInput | null > | null,
  not?: ModelSomethingAppDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SomethingAppData = {
  __typename: "SomethingAppData",
  id: string,
  queryName: string,
  thingsGenerated: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSomethingAppDataInput = {
  id: string,
  queryName?: string | null,
  thingsGenerated?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSomethingAppDataInput = {
  id: string,
};

export type ModelSomethingAppDataFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  thingsGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSomethingAppDataFilterInput | null > | null,
  or?: Array< ModelSomethingAppDataFilterInput | null > | null,
  not?: ModelSomethingAppDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSomethingAppDataConnection = {
  __typename: "ModelSomethingAppDataConnection",
  items:  Array<SomethingAppData | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSomethingAppDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  queryName?: ModelSubscriptionStringInput | null,
  thingsGenerated?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSomethingAppDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionSomethingAppDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateSomethingAppDataMutationVariables = {
  input: CreateSomethingAppDataInput,
  condition?: ModelSomethingAppDataConditionInput | null,
};

export type CreateSomethingAppDataMutation = {
  createSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSomethingAppDataMutationVariables = {
  input: UpdateSomethingAppDataInput,
  condition?: ModelSomethingAppDataConditionInput | null,
};

export type UpdateSomethingAppDataMutation = {
  updateSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSomethingAppDataMutationVariables = {
  input: DeleteSomethingAppDataInput,
  condition?: ModelSomethingAppDataConditionInput | null,
};

export type DeleteSomethingAppDataMutation = {
  deleteSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateSomethingQueryVariables = {
  input: string,
};

export type GenerateSomethingQuery = {
  generateSomething?: string | null,
};

export type GetSomethingAppDataQueryVariables = {
  id: string,
};

export type GetSomethingAppDataQuery = {
  getSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSomethingAppDataQueryVariables = {
  filter?: ModelSomethingAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSomethingAppDataQuery = {
  listSomethingAppData?:  {
    __typename: "ModelSomethingAppDataConnection",
    items:  Array< {
      __typename: "SomethingAppData",
      id: string,
      queryName: string,
      thingsGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SomethingQueryNameQueryVariables = {
  queryName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSomethingAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SomethingQueryNameQuery = {
  somethingQueryName?:  {
    __typename: "ModelSomethingAppDataConnection",
    items:  Array< {
      __typename: "SomethingAppData",
      id: string,
      queryName: string,
      thingsGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSomethingAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionSomethingAppDataFilterInput | null,
};

export type OnCreateSomethingAppDataSubscription = {
  onCreateSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSomethingAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionSomethingAppDataFilterInput | null,
};

export type OnUpdateSomethingAppDataSubscription = {
  onUpdateSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSomethingAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionSomethingAppDataFilterInput | null,
};

export type OnDeleteSomethingAppDataSubscription = {
  onDeleteSomethingAppData?:  {
    __typename: "SomethingAppData",
    id: string,
    queryName: string,
    thingsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
