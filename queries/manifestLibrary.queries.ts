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
    optionsConfigKey
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

  fragment editForm on Form {
    fields {
      __typename
      ... on MetadataField {
        label
        key
        type
        options {
          value
          label
        }
      }
      ... on RelationField {
        key
        label
        relationType
        disabled
        metadata {
          key
          type
          label
        }
        acceptedEntityTypes
        viewMode
      }
    }
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
    teaserMetadata: metadata(keys: ["title"], excludeOrInclude: include) {
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
        relatie: relation(key: "relatie") {
          teaserMetadata(
            keys: ["title", "object_number"]
            excludeOrInclude: include
          ) {
            __typename
            ... on Metadata {
              key
              value
              label
            }
          }
          id
          relationType
          toBeDeleted
        }
        title: keyValue(key: "title")
        date: keyValue(key: "date")
        publisher: keyValue(key: "publisher")
        object_number: keyValue(key: "object_number")
      }
      entityView {
        column {
          size(size: seventy)
          elements {
            entityListElement {
              label(input: "Assets")
              type(input: "component")
              key(input: "Relatie")
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
        title: keyValue(key: "title")
        date: keyValue(key: "date")
        creator: keyValue(key: "creator")
        photographer: keyValue(key: "photographer")
        description: keyValue(key: "description")
        object_number: keyValue(key: "object_number")
        location: keyValue(key: "location")
      }
      entityView {
        column {
          size(size: seventy)
          elements {
            entityListElement {
              isCollapsed(input: true)
              label(input: "Assets")
              type(input: "component")
              key(input: "Relatie")
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
                Objectnummer: metaData {
                  label(input: "Objectnummer")
                  key(input: "object_number")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                location: metaData {
                  label(input: "location")
                  key(input: "location")
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
          ... on SimpleEntity {
            ...minimalBaseEntity
            teaserMetadata: metadata(
              keys: ["title"]
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
          ... on IntermediateEntity {
            ...minimalBaseEntity
            ...fullEntity
            metadata(keys: [], excludeOrInclude: exclude) {
              __typename
              ... on Metadata {
                ...metadata
              }
              ... on MetadataRelation {
                ...metadataRelation
                linkedEntity {
                  ...fullEntity
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
                  ... on SimpleEntity {
                    ...minimalBaseEntity
                    teaserMetadata: metadata(
                      keys: ["title"]
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
                  metadata(keys: [], excludeOrInclude: exclude) {
                    __typename
                    ... on Metadata {
                      ...metadata
                    }
                    ... on MetadataRelation {
                      ...metadataRelation
                      linkedEntity {
                        ...fullEntity
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
                        ... on SimpleEntity {
                          ...minimalBaseEntity
                          teaserMetadata: metadata(
                            keys: ["title"]
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
                        metadata(keys: [], excludeOrInclude: exclude) {
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
            }
          }
        }
      }
    }
  }

  query getEntities(
    $limit: Int
    $skip: Int
    $searchValue: SearchFilter
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
        ... on SimpleEntity {
          teaserMetadata: metadata(keys: ["title"], excludeOrInclude: include) {
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
        ... on IntermediateEntity {
          teaserMetadata: metadata(keys: ["title"], excludeOrInclude: include) {
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
      ... on Manifest {
        advancedFilters{
            id: advancedFilter(key: "id", label: "id", type: text){
              label
              type
              key
            }
            name: advancedFilter(key: "title", label: "title", type: text){
              label
              type
              key
            }
            type: advancedFilter(key: "type", label: "type", type: selection){
              label
              type
              key
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

  mutation editMetadata($id: String!, $metadata: [MetadataInput!]!) {
    replaceMetadata(id: $id, metadata: $metadata) {
      key
      value
      lang
    }
  }

  mutation replaceRelationsAndMetaData(
    $id: String!
    $form: MetadataFormInput!
  ) {
    replaceRelationsAndMetaData(id: $id, form: $form) {
      ...fullEntityRecursive
    }
  }

  mutation updateRelationsAndMetadata($id: String!, $data: EntityFormInput!) {
    updateRelationsAndMetadata(id: $id, data: $data) {
      ...fullEntityRecursive
    }
  }

  mutation deleteRelations($id: String!, $metadata: [MetadataInput!]!) {
    deleteRelations(id: $id, metadata: $metadata)
  }

  mutation deleteData($id: String!, $path: Collection!) {
    deleteData(id: $id, path: $path)
  }

  mutation createEntity($data: EntityInput!) {
    createEntity(entity: $data) {
      ...fullEntity
    }
  }

  mutation setMediaPrimaire($entity_id: String!, $mediafile_id: String!) {
    setMediaPrimaire(entity_id: $entity_id, mediafile_id: $mediafile_id)
  }

  mutation setThumbnailPrimaire($entity_id: String!, $mediafile_id: String!) {
    setThumbnailPrimaire(entity_id: $entity_id, mediafile_id: $mediafile_id)
  }

  mutation updateMediafilesOrder($value: OrderArrayInput!) {
    updateMediafilesOrder(value: $value)
  }

  fragment inputfield on InputField {
    type
    acceptedEntityTypes
    validation
    options
    optionsConfigKey
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
    teaserMetadata: metadata(keys: [], excludeOrInclude: include) {
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

  query GetForms($type: String!) {
    Form(type: $type) {
      fields {
        __typename
        ... on MetadataField {
          label
          key
          type
          active
          options {
            value
            label
          }
        }
        ... on RelationField {
          key
          label
          relationType
          disabled
          metadata {
            key
            type
            label
          }
          acceptedEntityTypes
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
        ]
      ) {
        icon
        label
        value
      }
    }
  }

  query GetSortOptions {
    SortOptions {
      options(
        input: [
          { icon: NoIcon, label: "Title", value: "title" }
          {
            icon: NoIcon
            label: "Creation Date"
            value: "date_created"
          }
          { icon: NoIcon, label: "Date", value: "date" }
        ]
      ) {
        label
        value
      }
    }
  }
`;
