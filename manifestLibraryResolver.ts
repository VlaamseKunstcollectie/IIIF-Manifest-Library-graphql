import { ContextValue } from "base-graphql";
import {
  resolveMedia,
  resolveMetadata,
  resolvePermission,
} from "../baseGraphql/resolvers/entityResolver";
import { AssetForm } from "./sources/forms";
import {
  BaseEntity,
  ColumnSizes,
  Entity,
  Entitytyping,
  Media,
  Metadata,
  Permission,
  Resolvers, WindowElement,
} from "../../generated-types/type-defs";

export const manifestLibraryResolver: Resolvers<ContextValue> = {
  Entity: {
    __resolveType(obj) {
      if (obj.type == Entitytyping.Asset) {
        return 'Asset';
      } else if (obj.type == Entitytyping.Mediafile) {
        return 'MediaFileEntity';
      } else if (obj.type == Entitytyping.Manifest) {
        return 'Manifest';
      }
      return 'BaseEntity';
    },
  },
  Asset: {
    media: async (parent: any, _args, { dataSources }) => {
      return resolveMedia(dataSources, parent);
    },
    metadata: async (parent: any, { keys, excludeOrInclude }) => {
      return await resolveMetadata(parent, keys, excludeOrInclude);
    },
    permission: async (parent: any, _args, { dataSources }) => {
      // Todo fix permissions
      // return resolvePermission(dataSources, parent.id);
      return [Permission.Canput, Permission.Canpatch];
    },
    intialValues: async (parent: any, _args, { dataSources }) => {
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
    metadata: async (parent: any, { keys, excludeOrInclude }) => {
      const metadata = await resolveMetadata(parent, keys, excludeOrInclude);
      return metadata;
    },
    permission: async (parent: any, _args, { dataSources }) => {
      // Todo fix permissions
      // return resolvePermission(dataSources, parent.id);
      return [Permission.Canput, Permission.Canpatch];
    },
    intialValues: async (parent: any, _args, { dataSources }) => {
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
        idSyntax: {prefix: "", field: ""},
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
