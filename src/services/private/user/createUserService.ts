import { httpClient } from "@/infra";

type IRequest = {
  data: {
    image?: any;
    name: string;
    email: string;
    permission: string;
    password: string;
    confirmPassword: string;
  };
};

export async function createUserService({ data }: IRequest) {
  await httpClient({
    method: "post",
    url: "/users/create",
    showSuccessToast: true,
    data,
  });
}
