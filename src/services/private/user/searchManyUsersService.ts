import { IOptions } from "@/components/Inputs/MultiSelect/types";
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
  search: string;
};

type IReponse = {
  list: IUser[];
  count: number;
};

export async function searchManyUsersService({ search }: IRequest) {
  const { response } = await httpClient<IReponse>({
    method: "get",
    url: `/users/list?page=${1}&search=${search}&offset=${2}`,
  });

  const data: IOptions[] | undefined = response?.list.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return data ?? [];
}
