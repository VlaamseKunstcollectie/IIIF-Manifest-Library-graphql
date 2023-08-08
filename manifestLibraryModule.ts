import { createModule } from "graphql-modules";
import { manifestLibraryResolver } from "./manifestLibraryResolver";
import { manifestLibrarySchema } from "./manifestLibrarySchema.schema";
import { manifestLibraryQueries } from "./queries/manifestLibrary.queries";
import { manifestLibraryAppConfig } from "./manifestLibraryAppConfig";
import { loadTranslations } from "./translations/loadTranslations";

const manifestLibraryModule = createModule({
  id: "manifestLibraryModule",
  dirname: __dirname,
  typeDefs: [manifestLibrarySchema],
  resolvers: [manifestLibraryResolver],
});

const appTranslations = loadTranslations("./locales.json");

export { manifestLibraryQueries, manifestLibraryModule, manifestLibraryAppConfig, appTranslations };
