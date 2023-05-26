import { ContextValue } from "base-graphql";
import {
  resolveMedia,
  resolveMetadata,
  resolvePermission,
} from "../baseGraphql/resolvers/entityResolver";
import { AssetForm } from "./sources/forms";
import {
  ColumnSizes,
  Entity,
  Media,
  Metadata,
  Permission,
  Resolvers,
} from "../../generated-types/type-defs";

export const manifestLibraryResolver: Resolvers<ContextValue> = {
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
  },
  Manifest: {
    media: async (parent: any, _args, { dataSources }) => {
      const media: Media = {
        mediafiles: [
          {
            _id: parent.data.id || parent.data["@id"],
            original_file_location: parent.data.id || parent.data["@id"],
            thumbnail_file_location: parent.data["items"][0]["thumbnail"][0]["id"],
            mimetype: "json/manifest",
          },
        ],
      };
      return media;
    },
    metadata: async (parent: any, { keys, excludeOrInclude }) => {
      const metadata = await resolveMetadata(parent, keys, excludeOrInclude);
      metadata.push({
        key: "manifest",
        value: parent.data.id || parent.data["@id"],
        label: "manifest",
      });
      console.log(metadata);
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
  },
  Mutation: {
    createEntity: async (_source, { entity }, { dataSources }) => {
      return {} as Entity;
    },
  },
};
