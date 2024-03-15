import { Page } from "./types";

export const workerPages: Page[] = [
    {name: "Profile", path: "/profile"},
  {name: "workers", path: "/workers"}
]

export const adminPages: Page[] = [
    ...workerPages,
    {name: "Admins", path: "/admins"},
  ];