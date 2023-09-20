import { Collection, RouteNames } from "../../generated-types/type-defs";

export const manifestLibraryRoutes = [
  {
    path: "/",
    name: RouteNames.Home,
    component: "HomeWrapper",
    meta: {
      title: "Home",
      type: Collection.Entities,
      requiresAuth: false,
      entityType: "BaseEntity",
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
        },
      },
    ],
  },
  {
    path: "/mirador",
    name: RouteNames.Mirador,
    component: "Mirador",
    meta: { title: "navigation.mirador", requiresAuth: false },
  },
  { path: "/home", redirect: "/" },
];
