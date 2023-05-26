import { createModule } from "graphql-modules";
import { manifestLibraryResolver } from "./manifestLibraryResolver";
import { manifestLibrarySchema } from "./manifestLibrarySchema.schema";
import { manifestLibraryQueries } from "./queries/manifestLibrary.queries";
import { manifestLibraryAppConfig } from "./manifestLibraryAppConfig";

const manifestLibraryModule = createModule({
  id: "manifestLibraryModule",
  dirname: __dirname,
  typeDefs: [manifestLibrarySchema],
  resolvers: [manifestLibraryResolver],
});

export { manifestLibraryQueries, manifestLibraryModule, manifestLibraryAppConfig };
