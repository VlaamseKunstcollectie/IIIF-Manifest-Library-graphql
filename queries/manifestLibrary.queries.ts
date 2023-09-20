import { gql } from "graphql-modules";

export const manifestLibraryQueries = gql`
  fragment metadata on Metadata {
    key
    value
    label
    immutable
  }

  fragment inputfield on InputField {
    type
    acceptedEntityTypes
    options {
      icon
      label
      value
    }
  }

  fragment metadataRelation on MetadataRelation {
    key
    value
    label
    type
    metadataOnRelation {
      key
      value
    }
  }

  fragment minimalBaseEntity on Entity {
    id
    uuid
    type
  }

  fragment minimalAsset on Asset {
    ...minimalBaseEntity
    media {
      primary_transcode
    }
    title: metadata(keys: ["title"], excludeOrInclude: include) {
      __typename
      ... on Metadata {
        ...metadata
      }
      ... on MetadataRelation {
        ...metadataRelation
      }
    }
  }

  fragment minimalLinkedAsset on Asset {
    ...minimalBaseEntity
    media {
      primary_transcode
    }
    teaserMetadata: metadata(
      keys: ["title", "object_number"]
      excludeOrInclude: include
    ) {
      __typename
      ... on Metadata {
        ...metadata
      }
      ... on MetadataRelation {
        ...metadataRelation
      }
    }
  }
  
  fragment minimalTenant on Tenant {
    ...minimalBaseEntity
    media {
      primary_transcode
    }
    intialValues {
      id: keyValue(key: "_id", source: root)
      label: keyValue(key: "label", source: metadata)
    }
    teaserMetadata {
      label: metaData {
        label(input: "metadata.labels.name")
        key(input: "label")
      }
    }
  }


  fragment fullEntity on Entity {
    id
    type
    permission
    title: metadata(keys: ["title"], excludeOrInclude: include) {
      __typename
      ... on Metadata {
        key
        value
        label
        immutable
      }
    }
    ... on Manifest {
      intialValues {
        title: keyValue(key: "title", source: metadata)
        date: keyValue(key: "date", source: metadata)
        creator: keyValue(key: "creator", source: metadata)
        photographer: keyValue(key: "photographer", source: metadata)
        description: keyValue(key: "description", source: metadata)
        rights: keyValue(key: "rights", source: metadata)
        naamsvermelding: keyValue(key: "naamsvermelding", source: metadata)
        object_number: keyValue(key: "object_number", source: metadata)
        location: keyValue(key: "location", source: metadata)
        manifest_url: keyValue(key: "manifest_url", source: metadata)
        physical_location: keyValue(key: "physical_location", source: metadata)
        language: keyValue(key: "language", source: metadata)
        digitization_project: keyValue(
          key: "digitization_project"
          source: metadata
        )
      }
      entityView {
        column {
          size(size: seventy)
          elements {
              manifestView: manifestViewerElement {
                label(input: "panel-labels.manifest-view")
                isCollapsed(input: false)
                manifestUrl(metadataKey: "manifest_url")
              }
          }
        }
        column2: column {
          size(size: thirty)
          elements {
            windowElement {
              label(input: "Metadata")
              omschrijving: panels {
                label(input: "panel-labels.description")
                panelType(input: metadata)
                isEditable(input: true)
                isCollapsed(input: false)
                titel: metaData {
                  label(input: "metadata.label.title")
                  key(input: "title")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                description: metaData {
                  label(input: "metadata.label.description")
                  key(input: "description")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                rights: metaData {
                  label(input: "metadata.label.rights")
                  key(input: "rights")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                naamsvermelding: metaData {
                  label(input: "metadata.label.attribution")
                  key(input: "naamsvermelding")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                maker: metaData {
                  label(input: "metadata.label.creator")
                  key(input: "creator")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                datering: metaData {
                  label(input: "metadata.label.date")
                  key(input: "date")
                  inputField(type: baseDateField) {
                    ...inputfield
                  }
                }
                photographer: metaData {
                  label(input: "metadata.label.photographer")
                  key(input: "photographer")
                }
                objectnummer: metaData {
                  label(input: "metadata.label.object-number")
                  key(input: "object_number")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                location: metaData {
                  label(input: "metadata.label.location")
                  key(input: "location")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                manifest_url: metaData {
                  label(input: "metadata.label.manifest")
                  key(input: "manifest_url")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                physical_location: metaData {
                  label(input: "metadata.label.physical-location")
                  key(input: "physical_location")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                language: metaData {
                  label(input: "metadata.label.language")
                  key(input: "language")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                digitization_project: metaData {
                  label(input: "metadata.label.digitization-project")
                  key(input: "digitization_project")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
              }
            }
          }
        }
      }
      media {
        mediafiles {
          _id
          filename
          original_file_location
          transcode_filename
          thumbnail_file_location
          mimetype
          isPublic
          metadata {
            key
            value
          }
          is_primary
          is_primary_thumbnail
        }
      }
    }
    ... on MediaFileEntity {
      media {
        mediafiles {
          _id
          filename
          original_file_location
          transcode_filename
          thumbnail_file_location
          mimetype
          isPublic
          metadata {
            key
            value
          }
          is_primary
          is_primary_thumbnail
        }
      }
    }
  }

  fragment fullEntityRecursive on Entity {
    ...fullEntity
    metadata(keys: ["title"], excludeOrInclude: exclude) {
      __typename
      ... on Metadata {
        ...metadata
      }
      ... on MetadataRelation {
        ...metadataRelation
        linkedEntity {
          ... on Asset {
            ...minimalBaseEntity
            media {
              primary_transcode
            }
            teaserMetadata: metadata(
              keys: ["title", "object_number"]
              excludeOrInclude: include
            ) {
              __typename
              ... on Metadata {
                ...metadata
              }
              ... on MetadataRelation {
                ...metadataRelation
              }
            }
          }
          ... on MediaFileEntity {
            ...minimalBaseEntity
            media {
              primary_transcode
            }
            teaserMetadata: metadata(
              keys: ["title", "object_number"]
              excludeOrInclude: include
            ) {
              __typename
              ... on Metadata {
                ...metadata
              }
              ... on MetadataRelation {
                ...metadataRelation
              }
            }
          }
          ... on BaseEntity {
            ...minimalBaseEntity
            teaserMetadata: metadata(
              keys: ["title", "object_number"]
              excludeOrInclude: include
            ) {
              __typename
              ... on Metadata {
                ...metadata
              }
              ... on MetadataRelation {
                ...metadataRelation
              }
            }
          }
        }
      }
    }
  }

  query getEntities(
    $limit: Int
    $skip: Int
    $searchValue: SearchFilter!
    $advancedSearchValue: [FilterInput]
    $advancedFilterInputs: [AdvancedFilterInput!]!
    $searchInputType: SearchInputType
  ) {
    Entities(
      limit: $limit
      skip: $skip
      searchValue: $searchValue
      advancedSearchValue: $advancedSearchValue
      advancedFilterInputs: $advancedFilterInputs
      searchInputType: $searchInputType
    ) {
      count
      limit
      results {
        id
        uuid
        type
        ... on Asset {
          ...minimalAsset
        }
        ... on Manifest {
          teaserMetadata {
            title: metaData {
              label(input: "metadata.label.title")
              key(input: "title")
            }
            object_number: metaData {
              label(input: "metadata.label.object-number")
              key(input: "object_number")
            }
            manifest_url: metaData {
              label(input: "metadata.label.manifest")
              key(input: "manifest_url")
            }
          }
          intialValues {
            title: keyValue(key: "title", source: metadata)
            object_number: keyValue(key: "object_number", source: metadata)
            manifest_url: keyValue(key: "manifest_url", source: metadata)
          }
          media {
            primaryMediafile
            primary_transcode
            mediafiles {
              _id
              filename
              original_file_location
              transcode_filename
              thumbnail_file_location
              mimetype
              isPublic
              metadata {
                key
                value
              }
              is_primary
              is_primary_thumbnail
            }
          }
        }
        ... on MediaFileEntity {
          media {
            primaryMediafile
            primary_transcode
            mediafiles {
              _id
              filename
              original_file_location
              transcode_filename
              thumbnail_file_location
              mimetype
              isPublic
              metadata {
                key
                value
              }
              is_primary
              is_primary_thumbnail
            }
          }
        }
        ... on BaseEntity {
          teaserMetadata {
            title: metaData {
              label(input: "metadata.label.title")
              key(input: "title")
            }
            object_number: metaData {
              label(input: "metadata.label.object-number")
              key(input: "object_number")
            }
            manifest: metaData {
              label(input: "metadata.label.manifest")
              key(input: "manifest")
            }
          }
          intialValues {
            title: keyValue(key: "title", source: metadata)
            object_number: keyValue(key: "object_number", source: metadata)
            manifest: keyValue(key: "manifest", source: metadata)
          }
        }
        ... on SavedSearchedEntity {
          ...savedSearch
        }
      }
    }
  }

  # query getAdvancedEntities($filters: [AdvancedSearchInput]!) {
  #   Entities(filters: $filters) {
  #     count
  #     limit
  #   }
  # }


  query getTenants {
    Tenants {
      count
      limit
      results {
        id
        uuid
        type
        ... on Tenant {
          ...minimalTenant
        }
      }
    }
  }


  query getEntityById($id: String!, $type: String!) {
    Entity(id: $id, type: $type) {
      ...fullEntityRecursive
    }
  }

  fragment job on Job {
    job_type
    job_type
    job_info
    status
    user
    asset_id
    mediafile_id
    parent_job_id
    end_time
    start_time
    amount_of_jobs
    completed_jobs
    _id
    _key
    _rev
    message
  }

  fragment jobWithSubJobs on Job {
    ...job
    sub_jobs {
      count
      results {
        ...job
      }
    }
  }

  query getDirectories($dir: String) {
    Directories(dir: $dir) {
      id
      dir
      has_subdirs
      parent
    }
  }

  query getJobs(
    $paginationInfo: PaginationInfo
    $filters: Filters
    $failed: Boolean!
  ) {
    Jobs(paginationInfo: $paginationInfo, filters: $filters, failed: $failed) {
      results {
        ...job
      }
      count
      limit
      next
    }
  }

  query getJob($id: String!, $failed: Boolean!) {
    Job(id: $id, failed: $failed) {
      ...jobWithSubJobs
    }
  }

  query getFilterMatcherMapping {
    FilterMatcherMapping {
      id
      text
      date
      number
      selection
      boolean
    }
  }

  query getAdvancedFilters($entityType: String!) {
    EntityTypeFilters(type: $entityType) {
      ... on BaseEntity {
        advancedFilters {
          title: advancedFilter(key: "title", label: "Title", type: text) {
            label
            type
            key
          }
          type: advancedFilter(
            key: "type"
            label: "Type"
            type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text
              key: "type"
              value: "*"
              item_types: ["manifest"]
              provide_value_options_for_key: true
            }
          ) {
            type
            key
            label
            advancedFilterInputForRetrievingOptions {
              type
              key
              value
              item_types
            }
          }
          institution: advancedFilter(
            key: "institution"
            label: "Institution"
            type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text
              key: "institution"
              value: "*"
              item_types: ["manifest"]
              provide_value_options_for_key: true
            }
          ) {
            type
            key
            label
            advancedFilterInputForRetrievingOptions {
              type
              key
              value
              item_types
            }
          }
          keyword: advancedFilter(
            key: "keyword"
            label: "Keyword"
            type: text
          ) {
            label
            type
            key
          }
          rights: advancedFilter(
            key: "rights"
            label: "Rights"
            type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text
              key: "rights"
              value: "*"
              item_types: ["manifest"]
              provide_value_options_for_key: true
            }
          ) {
            type
            key
            label
            advancedFilterInputForRetrievingOptions {
              type
              key
              value
              item_types
            }
          }
          description: advancedFilter(
            key: "description"
            label: "Description"
            type: text
          ) {
              label
              type
              key
          }
        }
      }
      ... on Manifest {
        advancedFilters {
          title: advancedFilter(key: "title", label: "Title", type: text) {
            label
            type
            key
          }
          rights: advancedFilter(
            key: "rights"
            label: "Rights"
            type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text
              key: "rights"
              value: "*"
              item_types: ["manifest"]
              provide_value_options_for_key: true
            }
          ) {
            type
            key
            label
            advancedFilterInputForRetrievingOptions {
              type
              key
              value
              item_types
            }
          }
          description: advancedFilter(
            key: "description"
            label: "Description"
            type: text
          ) {
            label
            type
            key
          }
          parent: advancedFilter(
            key: "identifiers"
            label: "metadata.labels.parent"
            type: selection
          ) {
            label
            type
            key
            defaultValue(value: "*")
            hidden(value: true)
          }
          type: advancedFilter(type: type) {
            type
            defaultValue(value: "Manifest")
            hidden(value: true)
          }

        }
      }
    }
  }

  query getUserPermissions {
    UserPermissions {
      payload
    }
  }

  mutation mutateEntityValues($id: String!, $formInput: EntityFormInput!) {
    mutateEntityValues(id: $id, formInput: $formInput) {
      ...fullEntityRecursive
    }
  }

  mutation postStartImport($folder: String!) {
    postStartImport(folder: $folder) {
      message_id
    }
  }

  mutation linkMediafileToEntity(
    $entityId: String!
    $mediaFileInput: MediaFileInput!
  ) {
    linkMediafileToEntity(
      entityId: $entityId
      mediaFileInput: $mediaFileInput
    ) {
      _id
      filename
      original_file_location
      thumbnail_file_location
      mimetype
      metadata {
        key
        value
      }
    }
  }

  mutation patchMediaFileMetadata(
    $mediafileId: String!
    $mediaFileInput: [MediaFileMetadataInput]!
  ) {
    patchMediaFileMetadata(
      MediafileId: $mediafileId
      MediaFileMetadata: $mediaFileInput
    ) {
      _id
      filename
    }
  }

  mutation getAssetsRelationedWithMediafFile($mediaFileId: String!) {
    getAssetsRelationedWithMediafFile(mediaFileId: $mediaFileId) {
      ...minimalLinkedAsset
    }
  }

  mutation deleteData(
    $id: String!
    $path: Collection!
    $deleteMediafiles: Boolean!
  ) {
    deleteData(id: $id, path: $path, deleteMediafiles: $deleteMediafiles)
  }

  mutation createEntity($data: EntityInput!) {
    createEntity(entity: $data) {
      ...fullEntity
    }
  }

  mutation BulkAddRelations(
    $entityIds: [String!]!
    $relationEntityId: String!
    $relationType: String!
  ) {
    bulkAddRelations(
      entityIds: $entityIds
      relationEntityId: $relationEntityId
      relationType: $relationType
    )
  }


  fragment savedSearch on SavedSearchedEntity {
    _key
    definition {
      key
      type
      minMaxInput {
        min
        max
        isRelation
      }
      textInput {
        value
      }
      multiSelectInput {
        value
        AndOrValue
      }
    }
    user
    teaserMetadata {
      title: metaData {
        label(input: "metadata.label.title")
        key(input: "title")
      }
      object_number: metaData {
        label(input: "metadata.label.object-number")
        key(input: "object_number")
      }
      manifest: metaData {
        label(input: "metadata.label.manifest")
        key(input: "manifest")
      }
    }
    intialValues {
      title: keyValue(key: "title", source: metadata)
      object_number: keyValue(key: "object_number", source: metadata)
      manifest: keyValue(key: "manifest", source: metadata)
    }
    metadata(keys: [], excludeOrInclude: include) {
      __typename
      ... on Metadata {
        key
        value
        label
        immutable
      }
    }
  }

  mutation savedSearches {
    savedSearches {
      results {
        ...savedSearch
      }
    }
  }

  mutation createSavedSearch($savedSearchInput: SavedSearchInput!) {
    createSavedSearch(savedSearchInput: $savedSearchInput) {
      ...savedSearch
    }
  }

  mutation deleteSavedSearch($uuid: String!) {
    deleteSavedSearch(uuid: $uuid)
  }

  mutation patchSavedSearchTitle($uuid: String!, $title: String!) {
    patchSavedSearchTitle(uuid: $uuid, title: $title) {
      ...savedSearch
    }
  }

  mutation patchSavedSearchDefinition(
    $uuid: String!
    $definition: [FilterInput!]!
  ) {
    patchSavedSearchDefinition(uuid: $uuid, definition: $definition) {
      ...savedSearch
    }
  }

  mutation getSavedSearchById($uuid: String!) {
    getSavedSearchById(uuid: $uuid) {
      ...savedSearch
    }
  }

  query GetCreateEntityForm($type: Entitytyping!) {
    CreateEntityForm(type: $type) {
      idSyntax {
        prefix
        field
      }
      formFields {
        ... on Manifest {
          createFormFields {
            title: metaData {
              label(input: "metadata.labels.title")
              key(input: "title")
              inputField(type: baseTextField) {
                ...inputfield
              }
            }
          }
        }
      }
    }
  }

  #to do : Add LinkType for modal or route
  query GetMenu($name: String!) {
    Menu(name: $name) {
      menu {
        name
        entities: menuItem(
          label: "navigation.entities"
          icon: BookOpen
          isLoggedIn: false
          typeLink: { route: { destination: "Home" } }
        ) {
          label
          icon
          isLoggedIn
          typeLink {
            route {
              destination
            }
          }
          subMenu(name: "sub-menu-entities") {
            name
            manifests: menuItem(
              label: "navigation.manifests"
              typeLink: { route: { destination: "home" } }
            ) {
              label
              typeLink {
                route {
                  destination
                }
              }
            }
          }
        }
        mirador: menuItem(
          label: "navigation.mirador"
          icon: Focus
          isLoggedIn: false
          typeLink: { route: { destination: "mirador" } }
        ) {
          label
          icon
          isLoggedIn
          typeLink {
            route {
              destination
            }
          }
        }
        nieuw: menuItem(
          label: "navigation.new"
          icon: Create
          isLoggedIn: true
          typeLink: { modal: { typeModal: Create } }
        ) {
          label
          icon
          isLoggedIn
          typeLink {
            modal {
              typeModal
            }
          }
        }
      }
    }
  }

  query GetDropzoneEntityToCreate {
    DropzoneEntityToCreate {
      options(input: [{ icon: NoIcon, label: "assets", value: "asset" }]) {
        icon
        label
        value
      }
    }
  }

  query GetBulkOperations {
    BulkOperations {
      options(
        input: [
          {
            icon: DocumentInfo
            label: "bulk-operations.export-to-csv"
            value: "exportCsv"
          }
          {
            icon: Focus
            label: "bulk-operations.add-to-mirador-collection"
            value: "addToMiradorViewerCollection"
          }
        ]
      ) {
        icon
        label
        value
      }
    }
  }

  query GetPaginationLimitOptions {
    PaginationLimitOptions {
      options(
        input: [
          { icon: NoIcon, label: "20", value: 20 }
          { icon: NoIcon, label: "50", value: 50 }
          { icon: NoIcon, label: "100", value: 100 }
        ]
      ) {
        icon
        label
        value
      }
    }
  }

  query GetBulkOperationCsvExportKeys {
    BulkOperationCsvExportKeys {
      options(
        input: [
          { icon: NoIcon, label: "ID", value: "identifiers" }
          { icon: NoIcon, label: "Type", value: "type" }
          { icon: NoIcon, label: "Title", value: "title" }
          { icon: NoIcon, label: "Description", value: "description" }
          { icon: NoIcon, label: "Date", value: "date" }
          { icon: NoIcon, label: "Period", value: "period" }
          { icon: NoIcon, label: "Institution", value: "institution" }
          { icon: NoIcon, label: "Material", value: "material" }
          { icon: NoIcon, label: "Dimensions", value: "dimensions" }
          { icon: NoIcon, label: "Rights", value: "rights" }
          { icon: NoIcon, label: "Subject", value: "subject" }
          { icon: NoIcon, label: "Keywords", value: "keyword" }
          { icon: NoIcon, label: "Location", value: "location" }
          { icon: NoIcon, label: "Manifest", value: "manifest" }
        ]
      ) {
        icon
        label
        value
      }
    }
  }

  query GetSortOptions($entityType: String!) {
    EntityTypeSortOptions(entityType: $entityType) {
      ... on BaseEntity {
        sortOptions {
          options(
            input: [
              { icon: NoIcon, label: "title", value: "title" }
              { icon: NoIcon, label: "Creation Date", value: "date_created" }
              { icon: NoIcon, label: "Date", value: "date" }
            ]
          ) {
            icon
            label
            value
          }
        }
      }
    }
  }

  query getFilterOptions($input: AdvancedFilterInput!, $limit: Int!) {
    FilterOptions(input: $input, limit: $limit)
  }

  query GetBulkOperationsRelationForm {
    BulkOperationsRelationForm {
      label(input: "bulk-operations.bulk-edit.bulk-edit-title")
      relations: panels {
        label(input: "bulk-operations.bulk-edit.relation-types")
        panelType(input: metadata)
        isEditable(input: true)
        isCollapsed(input: false)
        status: metaData {
          label(input: "metadata.labels.ref-status")
          key(input: "ref_status")
        }
      }
    }
  }

`;
