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
    validation
    options
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
    teaserMetadata: metadata(keys: ["title", "object_number"], excludeOrInclude: include) {
      __typename
      ... on Metadata {
        ...metadata
      }
      ... on MetadataRelation {
        ...metadataRelation
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
    ... on Asset {
      intialValues {
        title: keyValue(key: "title", source: metadata)
        date: keyValue(key: "date", source: metadata)
        publisher: keyValue(key: "publisher", source: metadata)
        object_number: keyValue(key: "object_number", source: metadata)
      }
      entityView {
        column {
          size(size: seventy)
          elements {
            entityListElement {
              label(input: "Assets")
            }
            mediaFileElement {
              label(input: "Media")
            }
          }
        }
        column2: column {
          size(size: thirty)
          elements {
            windowElement {
              label(input: "Metadata")
              omschrijving: panels {
                label(input: "Omschrijving")
                panelType(input: metadata)
                isEditable(input: true)
                isCollapsed(input: false)
                titel: metaData {
                  label(input: "Titel")
                  key(input: "title")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                maker: metaData {
                  label(input: "Maker")
                  key(input: "maker")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                datering: metaData {
                  label(input: "Datering")
                  key(input: "date")
                  inputField(type: baseDateField) {
                    ...inputfield
                  }
                }
                collectie: metaData {
                  label(input: "Soort collectie")
                  key(input: "collecie")
                }
                publicatie: metaData {
                  label(input: "Publicatie")
                  key(input: "publisher")
                }
                Objectnummer: metaData {
                  label(input: "Objectnummer")
                  key(input: "object_number")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
              }
              relations: panels {
                label(input: "Relaties")
                panelType(input: relation)
                isEditable(input: false)
                isCollapsed(input: false)
                relation {
                  label
                  value
                }
              }
              Mediainfo: panels {
                label(input: "Mediainfo")
                panelType(input: mediainfo)
                isEditable(input: true)
                isCollapsed(input: true)
                filename: metaData {
                  label(input: "Oorspronkelijke bestandsnaam")
                  key(input: "filename")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                mimetype: metaData {
                  label(input: "Bestandstype")
                  key(input: "mimetype")
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
        manifest: keyValue(key: "manifest", source: metadata)
        physical_location: keyValue(key: "physical_location", source: metadata)
        language: keyValue(key: "language", source: metadata)
        digitization_project: keyValue(key: "digitization_project", source: metadata)
      }
      entityView {
        column {
          size(size: seventy)
          elements {
            entityListElement {
              isCollapsed(input: true)
              label(input: "Assets")
            }
            mediaFileElement {
              label(input: "Media")
              type(input: media)
            }
          }
        }
        column2: column {
          size(size: thirty)
          elements {
            windowElement {
              label(input: "Metadata")
              omschrijving: panels {
                label(input: "Omschrijving")
                panelType(input: metadata)
                isEditable(input: true)
                isCollapsed(input: false)
                titel: metaData {
                  label(input: "Titel")
                  key(input: "title")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                description: metaData {
                  label(input: "Beschrijving")
                  key(input: "description")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                rights: metaData {
                  label(input: "Rechten")
                  key(input: "rights")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                naamsvermelding: metaData {
                  label(input: "Naamsvermelding")
                  key(input: "naamsvermelding")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                maker: metaData {
                  label(input: "Maker")
                  key(input: "creator")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                datering: metaData {
                  label(input: "Datering")
                  key(input: "date")
                  inputField(type: baseDateField) {
                    ...inputfield
                  }
                }
                photographer: metaData {
                  label(input: "Fotograaf")
                  key(input: "photographer")
                }
                objectnummer: metaData {
                  label(input: "Objectnummer")
                  key(input: "object_number")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                location: metaData {
                  label(input: "Locatie")
                  key(input: "location")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                manifest: metaData {
                  label(input: "Manifest")
                  key(input: "manifest")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                physical_location: metaData {
                  label(input: "Fysieke Locatie")
                  key(input: "physical_location")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                language: metaData {
                  label(input: "Taal")
                  key(input: "language")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                digitization_project: metaData {
                  label(input: "Digitalisatie Project")
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
          teaserMetadata: metadata(
            keys: ["title", "object_number", "manifest"]
            excludeOrInclude: include
          ) {
            __typename
            ... on Metadata {
              key
              value
              label
              immutable
            }
            ... on MetadataRelation {
              key
              value
              label
              type
              metadataOnRelation {
                key
                value
              }
            }
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
          teaserMetadata: metadata(
            keys: ["filename"]
            excludeOrInclude: include
          ) {
            __typename
            ... on Metadata {
              key
              value
              label
              immutable
            }
            ... on MetadataRelation {
              key
              value
              label
              type
              metadataOnRelation {
                key
                value
              }
            }
          }
        }
        ... on BaseEntity {
          teaserMetadata: metadata(keys: ["title", "object_number", "manifest"], excludeOrInclude: include) {
            __typename
            ... on Metadata {
              key
              value
              label
              immutable
            }
            ... on MetadataRelation {
              key
              value
              label
              type
              metadataOnRelation {
                key
                value
              }
            }
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
        advancedFilters{
          title: advancedFilter(key: "title", label: "Title", type: text) {
            label
            type
            key
          }
          type: advancedFilter(
            key: "type", label: "Type", type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text, key: "type", value: "*", item_types: ["manifest"], provide_value_options_for_key: true
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
              provide_value_options_for_key
            }
          }
          institution: advancedFilter(
            key: "institution", label: "Institution", type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text, key: "institution", value: "*", item_types: ["manifest"], provide_value_options_for_key: true
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
              provide_value_options_for_key
            }
          }
          keyword: advancedFilter(key: "keyword", label: "Keyword", type: text) {
            label
            type
            key
          }
          rights: advancedFilter(
            key: "rights", label: "Rights", type: selection
            advancedFilterInputForRetrievingOptions: {
              type: text, key: "rights", value: "*", item_types: ["manifest"], provide_value_options_for_key: true
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
              provide_value_options_for_key
            }
          }
          description: advancedFilter(key: "description", label: "Description", type: text) {
            label
            type
            key
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

  mutation deleteData($id: String!, $path: Collection!, $deleteMediafiles: Boolean!) {
    deleteData(id: $id, path: $path, deleteMediafiles: $deleteMediafiles)
  }

  mutation createEntity($data: EntityInput!) {
    createEntity(entity: $data) {
      ...fullEntity
    }
  }

  fragment inputfield on InputField {
    type
    acceptedEntityTypes
    validation
    options
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
    teaserMetadata: metadata(keys: ["title", "object_number", "manifest"], excludeOrInclude: include) {
      __typename
      ... on Metadata {
        key
        value
        label
        immutable
      }
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

  # query GetCreateEntityForm($type: String!) {
  #   GetCreateEntityForm(type: $type) {
  #       idPrefix
  #   }
  # }

  #to do : Add LinkType for modal or route
  query GetMenu($name: String!) {
    Menu(name: $name) {
      menu {
        name
        entities: menuItem(
          label: "Entities"
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
            assets: menuItem(
              label: "Assets"
              typeLink: { route: { destination: "home" } }
            ) {
              label
              typeLink {
                route {
                  destination
                }
              }
            }
            boeken: menuItem(
              label: "Boeken"
              typeLink: { route: { destination: "home" } }
            ) {
              label
              typeLink {
                route {
                  destination
                }
              }
            }
            tijdschriften: menuItem(
              label: "Tijdschriften"
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
          label: "Mirador"
          icon: BookOpen
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
        mediafile: menuItem(
          label: "Mediafile"
          icon: Image
          isLoggedIn: true
          typeLink: { route: { destination: "mediafiles" } }
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
        upload: menuItem(
          label: "Upload"
          icon: Upload
          isLoggedIn: true
          typeLink: { modal: { typeModal: Upload } }
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
        nieuw: menuItem(
          label: "Nieuw"
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
        jobs: menuItem(
          label: "Jobs"
          icon: History
          isLoggedIn: true
          typeLink: { route: { destination: "history" } }
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
            icon: DownloadAlt
            label: "download mediafiles"
            value: "downloadMediafiles"
          }
          {
            icon: DocumentInfo
            label: "exporteer naar csv"
            value: "exportCsv"
          }
          { icon: Edit, label: "bewerk", value: "edit" }
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
`;
