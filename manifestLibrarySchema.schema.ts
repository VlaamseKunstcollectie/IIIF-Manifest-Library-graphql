import { gql } from "graphql-modules";

export const manifestLibrarySchema = gql`
  enum RouteNames {
    Home
    SingleEntity
    History
  }

  enum Entitytyping {
    asset
    boek
    tijdschrift
    mediafile
    manifest
  }

  # Temporary fix
  interface Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
    ): [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    entityView: ColumnList!
  }
  #

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
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
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
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
  }

  type ManifestEntity implements Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
    ): [MetadataAndRelation]!
    media: Media
    form: Form
    teaserMetadata: [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
  }

  type Mutation {
    createEntity(entity: EntityInput!): Entity
  }
`;
