import { httpClient } from "@/infra";

export type IUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isBlocked: boolean;
  lastAccess: string;
  UserPermission: {
    permission: {
      name: string;
      label: string;
    };
  }[];
};

type IRequest = {
  page: number;
  search: string;
  take: number;
};

type IReponse = {
  list: IUser[];
  total: number;
};

export async function findManyUsersService({ page, take, search }: IRequest) {
  const { response } = await httpClient<IReponse>({
    method: "get",
    url: `/users/list?page=${page}&search=${search}&offset=${take}`,
  });

  return response;
}
