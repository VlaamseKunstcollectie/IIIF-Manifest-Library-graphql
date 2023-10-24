import { ContextValue } from "base-graphql";
import { resolveMedia } from "../baseGraphql/resolvers/entityResolver";
import {
  BaseEntity,
  Entity,
  Entitytyping,
  Media,
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
      let thumbnail_file_location =
        parent.data.sequences?.[0].canvases[0].images?.[0].resource?.service?.[
          "@id"
        ];
      if (thumbnail_file_location)
        thumbnail_file_location += "/full/400,/0/default.jpg";
      else {
        thumbnail_file_location =
          parent.data.items?.[0].thumbnail[0].id ||
          parent.data.sequences?.[0].canvases[0].thumbnail?.["@id"];
      }
      const media: Media = {
        mediafiles: [
          {
            _id: parent.data.id || parent.data["@id"],
            original_file_location: parent.data.id || parent.data["@id"],
            thumbnail_file_location,
            mimetype: "json/manifest",
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
