import { ContextValue } from "base-graphql";
import { resolveMedia } from "../baseGraphql/resolvers/entityResolver";
import {
  BaseEntity,
  Entity,
  Entitytyping,
  Media,
  Metadata,
  Permission,
  Resolvers,
  WindowElement,
} from "../../generated-types/type-defs";

export const manifestLibraryResolver: Resolvers<ContextValue> = {
  Entity: {
    __resolveType(obj) {
      if (obj.type == Entitytyping.Asset) {
        return "Asset";
      } else if (obj.type == Entitytyping.Mediafile) {
        return "MediaFileEntity";
      } else if (obj.type == Entitytyping.Manifest) {
        return "Manifest";
      } else if (obj.type == Entitytyping.DocumentationEntity) {
        return "DocumentationEntity";
      }
      return "BaseEntity";
    },
  },
  Asset: {
    media: async (parent: any, _args, { dataSources }) => {
      return resolveMedia(dataSources, parent);
    },
    permission: async (parent: any, _args, { dataSources }) => {
      // Todo fix permissions
      // return resolvePermission(dataSources, parent.id);
      return [Permission.Canput, Permission.Canpatch];
    },
    intialValues: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    allowedViewModes: async (parent: any, _args, { dataSources }) => {
      return parent;
    },

    entityView: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    teaserMetadata: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
  },
  Manifest: {
    media: async (parent: any, _args, { dataSources }) => {
      const original_file_location = parent.metadata.find(
        (metadataItem: Metadata) => metadataItem.key === "manifest_url"
      )?.value;
      const thumbnail_file_location = parent.metadata.find(
        (metadataItem: Metadata) => metadataItem.key === "thumbnail_url"
      )?.value;

      const media: Media = {
        mediafiles: [
          {
            _id: original_file_location,
            original_file_location,
            thumbnail_file_location,
          },
        ],
      };

      return media;
    },
    permission: async (parent: any, _args, { dataSources }) => {
      // Todo fix permissions
      // return resolvePermission(dataSources, parent.id);
      return [Permission.Canput, Permission.Canpatch];
    },
    intialValues: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    allowedViewModes: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    entityView: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    teaserMetadata: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
  },
  DocumentationEntity: {
    media: async (parent: any, _args, { dataSources }) => {
      return resolveMedia(dataSources, parent);
    },
    permission: async (parent: any, _args, { dataSources }) => {
      // Todo fix permissions
      // return resolvePermission(dataSources, parent.id);
      return [Permission.Canput, Permission.Canpatch];
    },
    intialValues: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    allowedViewModes: async (parent: any, _args, { dataSources }) => {
      return parent;
    },

    entityView: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
    teaserMetadata: async (parent: any, _args, { dataSources }) => {
      return parent;
    },
  },
  Query: {
    CreateEntityForm: async (_source, { type }, { dataSources }) => {
      return {
        idSyntax: { prefix: "", field: "" },
        formFields: {
          type,
          createFormFields: {},
        } as BaseEntity,
      };
    },
    BulkOperationsRelationForm: async (
      _source: any,
      _args,
      { dataSources }
    ) => {
      return {} as WindowElement;
    },
  },
  Mutation: {
    createEntity: async (_source, { entity }, { dataSources }) => {
      return {} as Entity;
    },
  },
};
