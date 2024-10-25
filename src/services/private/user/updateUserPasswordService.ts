import { httpClient } from "@/infra";

type IRequest = {
  userId: string;
  newPassword: string;
};

export async function updateUserPasswordService({
  newPassword,
  userId,
}: IRequest) {
  await httpClient({
    method: "put",
    url: "/users/update/password",
    showSuccessToast: true,
    data: {
      userId,
      newPassword,
    },
  });
}
