import { gql } from "graphql-modules";

export const manifestLibrarySchema = gql`
  enum RouteNames {
    Home
    SingleEntity
    History
    ManifestViewer
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
    teaserMetadata: teaserMetadata
    permission: [Permission]
    intialValues: IntialValues!
    allowedViewModes: AllowedViewModes
    relationValues: RelationValues
    entityView: ColumnList!
    bulkOperationOptions: BulkOperationOptions
  }
  #

  type Asset implements Entity {
    id: String!
    uuid: String!
    type: String!
    media: Media
    teaserMetadata: teaserMetadata
    title: [MetadataAndRelation]
    permission: [Permission]
    intialValues: IntialValues!
    allowedViewModes: AllowedViewModes
    relationValues: RelationValues
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
    createFormFields: FormFields
    bulkOperationOptions: BulkOperationOptions
  }

  type Manifest implements Entity {
    id: String!
    uuid: String!
    type: String!
    media: Media
    teaserMetadata: teaserMetadata
    permission: [Permission]
    intialValues: IntialValues!
    allowedViewModes: AllowedViewModes
    relationValues: RelationValues
    entityView: ColumnList!
    advancedFilters: AdvancedFilters
    sortOptions: SortOptions
    createFormFields: FormFields
    bulkOperationOptions: BulkOperationOptions
  }

  type Query {
    CreateEntityForm(type: Entitytyping!): CreateEntityForm!
    BulkOperationsRelationForm: WindowElement!
  }

  type Mutation {
    createEntity(entity: EntityInput!): Entity
  }
`;
