export const convertAcronymToState = (UF: string) => {
  let stateName = "";

  switch (UF) {
    case "AC":
      stateName = "Acre";
      break;
    case "AL":
      stateName = "Alagoas";
      break;
    case "AP":
      stateName = "Amapá";
      break;
    case "AM":
      stateName = "Amazonas";
      break;
    case "BA":
      stateName = "Bahia";
      break;
    case "CE":
      stateName = "Ceará";
      break;
    case "ES":
      stateName = "Espírito Santo";
      break;
    case "GO":
      stateName = "Goiás";
      break;
    case "MA":
      stateName = "Maranhão";
      break;
    case "MT":
      stateName = "Mato Grosso";
      break;
    case "MS":
      stateName = "Mato Grosso do Sul";
      break;
    case "MG":
      stateName = "Minas Gerais";
      break;
    case "PA":
      stateName = "Pará";
      break;
    case "PB":
      stateName = "Paraíba";
      break;
    case "PR":
      stateName = "Paraná";
      break;
    case "PE":
      stateName = "Pernambuco";
      break;
    case "PI":
      stateName = "Piauí";
      break;
    case "RJ":
      stateName = "Rio de Janeiro";
      break;
    case "RN":
      stateName = "Rio Grande do Norte";
      break;
    case "RS":
      stateName = "Rio Grande do Sul";
      break;
    case "RO":
      stateName = "Rondônia";
      break;
    case "RR":
      stateName = "Roraima";
      break;
    case "SC":
      stateName = "Santa Catarina";
      break;
    case "SP":
      stateName = "São Paulo";
      break;
    case "SE":
      stateName = "Sergipe";
      break;
    case "TO":
      stateName = "Tocantins";
      break;
    case "DF":
      stateName = "Distrito Federal";
      break;

    default:
      break;
  }

  return stateName;
};
