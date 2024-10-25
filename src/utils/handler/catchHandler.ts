import { toast } from "react-toastify";

export type ICatchHandler = {
  response?: { data: { message: string }; status: number };
};

export const catchHandler = (err: ICatchHandler) => {
  if (err.response?.data) {
    if (err.response.data.message) toast.error(err.response.data.message);
    else toast.error(`Erro: ${err.response.status}`);
  } else {
    toast.error("Erro de comunicação");
  }
};
