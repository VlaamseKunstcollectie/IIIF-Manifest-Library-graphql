import { gql } from "graphql-modules";

export const manifestLibrarySchema = gql`
  enum Entitytyping {
    asset
    boek
    tijdschrift
    mediafile
    manifest
  }

  type Asset implements Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
    ): [MetadataAndRelation]
    media: Media
    teaserMetadata: [MetadataAndRelation]
    title: [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    entityView: ColumnList!
  }

  type Manifest implements Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
    ): [MetadataAndRelation]
    media: Media
    teaserMetadata: [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    entityView: ColumnList!
  }

  type Mutation {
    createEntity(entity: EntityInput!): Entity
  }
`;
