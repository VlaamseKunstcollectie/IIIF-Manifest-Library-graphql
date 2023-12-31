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
      title: "navigation.manifests",
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
          title: "Single Entity",
          requiresAuth: false,
          showEntityTitle: true,
          type: Collection.Entities,
        },
      },
      {
        path: "manifests",
        name: RouteNames.Manifests,
        component: "Home",
        meta: {
          title: "navigation.manifests",
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
    meta: { title: "navigation.compare", requiresAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: RouteNames.NotFound,
    component: "NotFound",
    meta: { title: "Not Found", requiresAuth: false },
  },

  { path: "/home", redirect: "/" },
];
