import { httpClient } from "@/infra";

type IRequest = {
  userId: string;
};

export async function deleteUserService({ userId }: IRequest) {
  await httpClient({
    method: "delete",
    url: `/users/delete/${userId}`,
    showSuccessToast: true,
  });
}
