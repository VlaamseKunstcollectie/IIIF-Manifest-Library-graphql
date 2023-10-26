import {
  Collection,
  Entitytyping,
  RouteNames,
} from "../../generated-types/type-defs";

export const manifestLibraryRoutes = [
  {
    path: "/",
    name: RouteNames.Home,
    component: "HomeWrapper",
    meta: {
      title: "Home",
      type: Collection.Entities,
      requiresAuth: false,
      entityType: Entitytyping.Manifest,
    },
    children: [
      {
        path: "entity/:id",
        name: RouteNames.SingleEntity,
        component: "SingleEntity",
        meta: {
          title: "Single Asset",
          requiresAuth: false,
          showEntityTitle: true,
          type: Collection.Entities,
          entityType: Entitytyping.Manifest,
        },
      },
    ],
  },
  {
    path: "/manifestViewer",
    name: RouteNames.ManifestViewer,
    component: "Manifest",
    meta: { title: "navigation.manifest-viewer", requiresAuth: false },
  },
  { path: "/home", redirect: "/" },
];
