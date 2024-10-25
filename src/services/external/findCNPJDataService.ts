import axios from "axios";
import { toast } from "react-toastify";
import { capitalizeWords, unMask } from "@/utils";

export interface ICNPJ {
  cnpj: string;
  identificador_matriz_filial: number;
  descricao_matriz_filial: string;
  razao_social: string;
  nome_fantasia: string;
  situacao_cadastral: number;
  descricao_situacao_cadastral: string;
  motivo_situacao_cadastral: number;
  data_inicio_atividade: string;
  nome_cidade_exterior: string;
  descricao_tipo_logradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: number;
  uf: string;
  municipio: string;
  ddd_telefone_1: string;
  descricao_porte: string;
}

export const requestCNPJData = async (cnpj: string) => {
  let cnpjData: ICNPJ | undefined;

  await axios
    .get(`https://brasilapi.com.br/api/cnpj/v1/${unMask(cnpj)}`)
    .then(({ data }: { data: ICNPJ }) => {
      cnpjData = {
        ...data,
        nome_fantasia: data.nome_fantasia
          ? capitalizeWords(data.nome_fantasia)
          : "",
        razao_social: data.razao_social
          ? capitalizeWords(data.razao_social)
          : "",
        municipio: data.municipio ? capitalizeWords(data.municipio) : "",
        bairro: data.bairro ? capitalizeWords(data.bairro) : "",
        logradouro: data.logradouro ? capitalizeWords(data.logradouro) : "",
      };
    })
    .catch(() => {
      toast.info("CNPJ não encontrado.");
      cnpjData = undefined;
    });
  return cnpjData;
};
