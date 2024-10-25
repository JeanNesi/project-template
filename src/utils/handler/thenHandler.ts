import { toast } from "react-toastify";

export type IThenHandler = {
  data: { message: string };
};

export const thenHandler = (res: IThenHandler) => {
  toast.dismiss();
  if (res.data) {
    toast.success(res.data.message);
  } else {
    toast.success("Sucesso");
  }
};
