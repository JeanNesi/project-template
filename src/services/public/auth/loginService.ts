import { httpClient } from "@/infra";

type IRequest = {
  email: string;
  password: string;
};

type IResponse = {
  token: string;
  name: string;
};

export async function loginWithEmailService({ email, password }: IRequest) {
  const { response } = await httpClient<IResponse>({
    method: "post",
    url: "/public/login",
    data: {
      email,
      password,
    },
  });

  return response!;
}
