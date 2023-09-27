import { createModule } from "graphql-modules";
import { manifestLibraryResolver } from "./manifestLibraryResolver";
import { manifestLibrarySchema } from "./manifestLibrarySchema.schema";
import { manifestLibraryQueries } from "./queries/manifestLibrary.queries";
import { manifestLibraryAppConfig } from "./manifestLibraryAppConfig";
import { loadTranslations, baseTranslations } from "base-graphql";
import path from "path";
import { mergeObjects } from "json-merger";


const manifestLibraryModule = createModule({
  id: "manifestLibraryModule",
  dirname: __dirname,
  typeDefs: [manifestLibrarySchema],
  resolvers: [manifestLibraryResolver],
});

const manifestLibraryTranslations = loadTranslations(
    path.join(__dirname, "./translations/locales.json")
);

const appTranslations = mergeObjects([manifestLibraryTranslations, baseTranslations])


export { manifestLibraryQueries, manifestLibraryModule, manifestLibraryAppConfig, appTranslations };
