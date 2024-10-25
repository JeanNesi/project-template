type MaskType = "CPF" | "CNPJ" | "TEL" | "CEP" | "BRL" | "NUM" | "DEC";

type IMaskType = {
  type: MaskType;
  value: string;
};

export const mask = ({ type, value }: IMaskType) => {
  let formattedValue = "";

  switch (type) {
    case "CPF":
      formattedValue = value
        .substring(0, 14)
        .replace(/\D/g, "")
        .replace(/^(\d{9})(\d)/g, "$1-$2")
        .replace(/^(\d{6})(\d)/g, "$1.$2")
        .replace(/^(\d{3})(\d)/g, "$1.$2");
      break;

    case "CNPJ":
      formattedValue = value
        .substring(0, 18)
        .replace(/\D/g, "")
        .replace(/^(\d{12})(\d)/g, "$1-$2")
        .replace(/^(\d{8})(\d)/g, "$1/$2")
        .replace(/^(\d{5})(\d)/g, "$1.$2")
        .replace(/^(\d{2})(\d)/g, "$1.$2");
      break;

    case "CEP":
      formattedValue = value
        .substring(0, 9)
        .replace(/\D/g, "")
        .replace(/^(\d{5})(\d)/g, "$1-$2");
      break;

    case "TEL":
      formattedValue = value
        .substring(0, 15)
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2");
      break;

    case "BRL":
      formattedValue = (Number(value.replace(/[^0-9]*/g, "")) / 100)
        .toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
        .substring(0, 30);

      break;

    case "NUM":
      formattedValue = value.substring(0, 30).replace(/[^0-9]*/g, "");
      break;

    case "DEC":
      formattedValue = (Number(value.replace(/[^0-9]*/g, "")) / 100)
        .toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })
        .substring(0, 30);
      break;

    default:
      break;
  }
  return formattedValue;
};
