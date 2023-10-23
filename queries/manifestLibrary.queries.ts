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
    intialValues {
      title: keyValue(key: "title", source: metadata)
    }
    teaserMetadata {
      title: metaData {
        label(input: "metadata.labels.title")
        key(input: "title")
      }
    }
  }

  fragment minimalLinkedAsset on Asset {
    ...minimalBaseEntity
    media {
      primary_transcode
    }
    intialValues {
      title: keyValue(key: "title", source: metadata)
    }
    teaserMetadata {
      title: metaData {
        label(input: "metadata.labels.title")
        key(input: "title")
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
    ... on Manifest {
      intialValues {
        title: keyValue(key: "title", source: metadata)
        alternative_identifier: keyValue(
          key: "alternative_identifier"
          source: metadata
        )
        associated_names: keyValue(key: "associated_names", source: metadata)
        call_number: keyValue(key: "call_number", source: metadata)
        description_decoration: keyValue(
          key: "description_decoration"
          source: metadata
        )
        digitization_date: keyValue(key: "digitization_date", source: metadata)
        digitization_project: keyValue(
          key: "digitization_project"
          source: metadata
        )
        extent: keyValue(key: "extent", source: metadata)
        language: keyValue(key: "language", source: metadata)
        manifest_url: keyValue(key: "manifest_url", source: metadata)
        manifest_version: keyValue(key: "manifest_version", source: metadata)
        origin_place: keyValue(key: "origin_place", source: metadata)
        physical_location: keyValue(key: "physical_location", source: metadata)
        record: keyValue(key: "record", source: metadata)
        rights: keyValue(key: "rights", source: metadata)
        bibliographic_references: keyValue(
          key: "bibliographic_references"
          source: metadata
        )
        date_of_creation: keyValue(key: "date_of_creation", source: metadata)
        genre_form: keyValue(key: "genre/form", source: metadata)
        material: keyValue(key: "material", source: metadata)
        note: keyValue(key: "note", source: metadata)
        provenance: keyValue(key: "provenance", source: metadata)
        script: keyValue(key: "script", source: metadata)
        topic_general_subdivision: keyValue(
          key: "topic_general_subdivision"
          source: metadata
        )
        uniform_title: keyValue(key: "uniform_title", source: metadata)
        catalogue_record: keyValue(key: "catalogue_record", source: metadata)
        decoration_and_binding: keyValue(
          key: "decoration_and_binding"
          source: metadata
        )
        dimensions: keyValue(key: "dimensions", source: metadata)
        summary: keyValue(key: "summary", source: metadata)
        attribution: keyValue(key: "attribution", source: metadata)
        naamsvermelding: keyValue(key: "naamsvermelding", source: metadata)
        date: keyValue(key: "date", source: metadata)
        period: keyValue(key: "period", source: metadata)
        type: keyValue(key: "type", source: metadata)
        photographer: keyValue(key: "photographer", source: metadata)
        subject: keyValue(key: "subject", source: metadata)
        description: keyValue(key: "description", source: metadata)
        object_id: keyValue(key: "object_id", source: metadata)
        author: keyValue(key: "author", source: metadata)
      }
      entityView {
        column {
          size(size: seventy)
          elements {
            manifestView: manifestViewerElement {
              label(input: "panel-labels.manifest-view")
              isCollapsed(input: false)
              manifestUrl(metadataKey: "manifest_url")
              manifestVersion(metadataKey: "manifest_version")
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
                title: metaData {
                  label(input: "metadata.label.title")
                  key(input: "title")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                alternative_identifier: metaData {
                  label(input: "metadata.label.alternative-identifier")
                  key(input: "alternative_identifier")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                associated_names: metaData {
                  label(input: "metadata.label.associated-names")
                  key(input: "associated_names")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                call_number: metaData {
                  label(input: "metadata.label.call-number")
                  key(input: "call_number")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                description_decoration: metaData {
                  label(input: "metadata.label.description-decoration")
                  key(input: "description_decoration")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                digitization_date: metaData {
                  label(input: "metadata.label.digitization-date")
                  key(input: "digitization_date")
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
                extent: metaData {
                  label(input: "metadata.label.extent")
                  key(input: "extent")
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
                manifest_url: metaData {
                  label(input: "metadata.label.manifest-url")
                  key(input: "manifest_url")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                manifest_version: metaData {
                  label(input: "metadata.label.manifest-version")
                  key(input: "manifest_version")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                origin_place: metaData {
                  label(input: "metadata.label.origin-place")
                  key(input: "origin_place")
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
                record: metaData {
                  label(input: "metadata.label.record")
                  key(input: "record")
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
                bibliographic_references: metaData {
                  label(input: "metadata.label.bibliographic-references")
                  key(input: "bibliographic_references")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                date_of_creation: metaData {
                  label(input: "metadata.label.date-of-creation")
                  key(input: "date_of_creation")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                genre_form: metaData {
                  label(input: "metadata.label.genre-form")
                  key(input: "genre/form")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                material: metaData {
                  label(input: "metadata.label.material")
                  key(input: "material")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                note: metaData {
                  label(input: "metadata.label.note")
                  key(input: "note")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                provenance: metaData {
                  label(input: "metadata.label.provenance")
                  key(input: "provenance")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                script: metaData {
                  label(input: "metadata.label.script")
                  key(input: "script")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                topic_general_subdivision: metaData {
                  label(input: "metadata.label.topic-general-subdivision")
                  key(input: "topic_general_subdivision")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                uniform_title: metaData {
                  label(input: "metadata.label.uniform-title")
                  key(input: "uniform_title")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                catalogue_record: metaData {
                  label(input: "metadata.label.catalogue-record")
                  key(input: "catalogue_record")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                decoration_and_binding: metaData {
                  label(input: "metadata.label.decoration-and-binding")
                  key(input: "decoration_and_binding")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                dimensions: metaData {
                  label(input: "metadata.label.dimensions")
                  key(input: "dimensions")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                summary: metaData {
                  label(input: "metadata.label.summary")
                  key(input: "summary")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                attribution: metaData {
                  label(input: "metadata.label.attribution")
                  key(input: "attribution")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                naamsvermelding: metaData {
                  label(input: "metadata.label.naamsvermelding")
                  key(input: "naamsvermelding")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                date: metaData {
                  label(input: "metadata.label.date")
                  key(input: "date")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                period: metaData {
                  label(input: "metadata.label.period")
                  key(input: "period")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                type: metaData {
                  label(input: "metadata.label.type")
                  key(input: "type")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                photographer: metaData {
                  label(input: "metadata.label.photographer")
                  key(input: "photographer")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                subject: metaData {
                  label(input: "metadata.label.subject")
                  key(input: "subject")
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
                object_id: metaData {
                  label(input: "metadata.label.object-id")
                  key(input: "object_id")
                  inputField(type: baseTextField) {
                    ...inputfield
                  }
                }
                author: metaData {
                  label(input: "metadata.label.author")
                  key(input: "author")
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
              label(input: "metadata.label.manifest-url")
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
              label(input: "metadata.label.manifest-url")
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

  query getEntityById(
    $id: String!
    $type: String!
    $preferredLanguage: String
  ) {
    Entity(id: $id, type: $type, preferredLanguage: $preferredLanguage) {
      ...fullEntity
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
          title: advancedFilter(
            type: text
            parentKey: "metadata"
            key: "title"
            label: "metadata.label.title"
            isDisplayedByDefault: true
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
          }
          type: advancedFilter(
            type: selection
            parentKey: ""
            key: "type"
            label: "metadata.label.type"
            isDisplayedByDefault: true
            advancedFilterInputForRetrievingOptions: {
              type: text
              parent_key: ""
              key: "type"
              value: "*"
              item_types: ["manifest"]
            }
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
            advancedFilterInputForRetrievingOptions {
              type
              parent_key
              key
              value
              item_types
            }
          }
        }
      }
      ... on Manifest {
        advancedFilters {
          title: advancedFilter(
            type: text
            parentKey: "metadata"
            key: "title"
            label: "metadata.label.title"
            isDisplayedByDefault: true
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
          }
          rights: advancedFilter(
            type: selection
            parentKey: "metadata"
            key: "rights"
            label: "metadata.label.rights"
            isDisplayedByDefault: true
            advancedFilterInputForRetrievingOptions: {
              type: text
              parent_key: "metadata"
              key: "rights"
              value: "*"
              item_types: ["manifest"]
            }
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
            advancedFilterInputForRetrievingOptions {
              type
              parent_key
              key
              value
              item_types
            }
          }
          description: advancedFilter(
            type: text
            parentKey: "metadata"
            key: "metadata.label.description"
            label: "Description"
            isDisplayedByDefault: true
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
          }
          type: advancedFilter(type: type) {
            type
            defaultValue(value: "manifest")
            hidden(value: true)
          }
          institution: advancedFilter(
            type: selection
            parentKey: "relations"
            key: "isIn"
            label: "metadata.label.institution"
            isDisplayedByDefault: true
            advancedFilterInputForRetrievingOptions: {
              type: text
              parent_key: "relations"
              key: "isIn"
              value: "*"
              item_types: ["manifest"]
            }
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
            advancedFilterInputForRetrievingOptions {
              type
              parent_key
              key
              value
              item_types
            }
          }
          keyword: advancedFilter(
            type: text
            parentKey: "metadata"
            key: "keyword"
            label: "metadata.label.keyword"
            isDisplayedByDefault: true
          ) {
            type
            parentKey
            key
            label
            isDisplayedByDefault
          }
          relation: advancedFilter(
            type: selection
            parentKey: "relations"
            key: "key"
          ) {
            type
            parentKey
            key
            defaultValue(value: [])
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
      ...fullEntity
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
        label(input: "metadata.label.manifest-url")
        key(input: "manifest")
      }
    }
    intialValues {
      title: keyValue(key: "title", source: metadata)
      object_number: keyValue(key: "object_number", source: metadata)
      manifest: keyValue(key: "manifest", source: metadata)
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

  query GetBulkOperations($entityType: String!) {
    BulkOperations(entityType: $entityType) {
      ... on BaseEntity {
        bulkOperationOptions {
          options(
            input: [
              {
                icon: DocumentInfo
                label: "bulk-operations.export-to-csv"
                value: "exportCsv"
              }
              {
                icon: Focus
                label: "bulk-operations.add-to-manifest-collection"
                value: "addToManifestViewerCollection"
              }
            ]
          ) {
            icon
            label
            value
          }
        }
      }
      ... on Manifest {
        bulkOperationOptions {
          options(
            input: [
              {
                icon: DocumentInfo
                label: "bulk-operations.export-to-csv"
                value: "exportCsv"
              }
              {
                icon: Focus
                label: "bulk-operations.add-to-manifest-collection"
                value: "addToManifestViewerCollection"
              }
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
      ... on Manifest {
        sortOptions {
          options(
            input: [
              { icon: NoIcon, label: "metadata.label.title", value: "title" }
              {
                icon: NoIcon
                label: "metadata.label.manifest-url"
                value: "manifest_url"
              }
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
    FilterOptions(input: $input, limit: $limit) {
      label
      value
    }
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
