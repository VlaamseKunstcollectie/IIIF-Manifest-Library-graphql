import { gql } from "graphql-modules";

export const manifestLibrarySchema = gql`
  enum RouteNames {
    Home
    SingleEntity
    History
    Mirador
  }

  enum Entitytyping {
    asset
    boek
    tijdschrift
    mediafile
    manifest
  }

  enum CreateableEntityTypes {
    Manifest
  }

  # Temporary fix
  interface Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
      options: [teaserMetadataOptions]
    ): [MetadataAndRelation]
    teaserMetadata: teaserMetadata
    permission: [Permission]
    intialValues: IntialValues!
    relationValues: RelationValues
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
      options: [teaserMetadataOptions]
    ): [MetadataAndRelation]
    media: Media
    teaserMetadata: teaserMetadata
    title: [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    relationValues: RelationValues
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
    createFormFields: FormFields
  }

  type Manifest implements Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
      options: [teaserMetadataOptions]
    ): [MetadataAndRelation]
    media: Media
    teaserMetadata: teaserMetadata
    permission: [Permission]
    intialValues: IntialValues!
    relationValues: RelationValues
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
    createFormFields: FormFields
  }

  type ManifestEntity implements Entity {
    id: String!
    uuid: String!
    type: String!
    metadata(
      keys: [String]!
      excludeOrInclude: ExcludeOrInclude!
      options: [teaserMetadataOptions]
    ): [MetadataAndRelation]!
    media: Media
    form: Form
    teaserMetadata: teaserMetadata
    permission: [Permission]
    intialValues: IntialValues!
    relationValues: RelationValues
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
    createFormFields: FormFields
  }

  type Mutation {
    createEntity(entity: EntityInput!): Entity
  }
`;
