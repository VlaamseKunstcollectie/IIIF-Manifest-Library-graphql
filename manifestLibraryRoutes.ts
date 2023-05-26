import { Collection } from "../../generated-types/type-defs";

export const manifestLibraryRoutes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home", type: Collection.Entities, requiresAuth: false },
    children: [
      {
        path: "entity/:id",
        name: "SingleEntity",
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
    path: "/mediafiles",
    name: "Mediafiles",
    meta: {
      title: "Mediafiles",
      type: Collection.Mediafiles,
      requiresAuth: true,
    },
    children: [
      {
        path: ":id",
        name: "SingleMediafile",
        meta: {
          title: "Single Mediafile",
          requiresAuth: true,
          showEntityTitle: true,
          type: Collection.Mediafiles,
        },
      },
    ],
  },
  {
    path: "/history",
    name: "History",
    meta: { title: "History", requiresAuth: true },
  },
  { path: "/home", redirect: "/" },
];
