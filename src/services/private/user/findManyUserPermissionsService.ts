import { httpClient } from "@/infra";

export type IUserPermissions = {
  label: string;
  name: string;
};

type IReponse = {
  list: IUserPermissions[];
};

export async function findManyUserPermissions() {
  const { response } = await httpClient<IReponse>({
    method: "get",
    url: "/permission/list",
  });

  return response?.list ?? [];
}
