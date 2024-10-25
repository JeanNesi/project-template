import axios from "axios";
import { toast } from "react-toastify";

export interface ICEP {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
}

export const requestAddressByCEP = async (cep: string) => {
  let data: ICEP | undefined;

  await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
      if (res.data.erro) toast.error("CEP inválido.");
      else data = res.data;
    })
    .catch(() => {
      toast.error("CEP digitado é inválido.");
      data = undefined;
    });

  return data;
};
