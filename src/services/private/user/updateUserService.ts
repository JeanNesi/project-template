import { httpClient } from "@/infra";

export type IRequest = {
  userId: string;
  data: {
    image?: any;
    name: string;
    email: string;
    permission: string;
    isBlocked: boolean;
  };
};

export async function updateUserService({ data, userId }: IRequest) {
  await httpClient({
    method: "put",
    url: "/users/update",
    showSuccessToast: true,
    data: {
      ...data,
      userId,
    },
  });
}
