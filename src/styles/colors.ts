const brandColor = {
  blue: {
    100: "#E3EFFF",
    200: "#B7D2F6",
    300: "#98BFF2",
    400: "#72A5E6",
    500: "#4587DD",
    600: "#0659C3",
    700: "#0247A1",
    800: "#003F8F",
    900: "#00367A",
    1000: "#00285A",
  },

  purple: {
    100: "#E7E3FE",
    200: "#CFC8FD",
    300: "#C3BAFD",
    400: "#B8ACFD",
    500: "#A495FD",
    600: "#8875FB",
    700: "#6F5FD1",
    800: "#5E50B8",
    900: "#4E4296",
    1000: "#362D73",
  },

  green: {
    100: "#DEFBFB",
    200: "#ADF2F1",
    300: "#87E8E6",
    400: "#74DEDD",
    500: "#45D3D1",
    600: "#17C8C6",
    700: "#14B3B2",
    800: "#109C9B",
    900: "#0C8584",
    1000: "#0C6C6C",
  },

  orange: {
    100: "#FFEEE2",
    200: "#F5CFB6",
    300: "#F3BF9C",
    400: "#EFAD82",
    500: "#EE9E69",
    600: "#E78747",
    700: "#D37739",
    800: "#B9652E",
    900: "#9F521F",
    1000: "#894517",
  },
};

const neutralColor = {
  100: "#0A0A0A",
  200: "#141414",
  300: "#404040",
  400: "#676769",
  500: "#919194",
  600: "#B5B5B7",
  700: "#CCCCCD",
  800: "#DFDFE0",
  900: "#EBEBEC",
  1000: "#F7F7F9",
  1100: "#FFFFFF",
};

const auxiliaryColor = {
  yellow: {
    100: "#FFF9DE",
    200: "#FFF3B5",
    300: "#FFED8C",
    400: "#FFE871",
    500: "#FFE24D",
    600: "#FFD600",
    700: "#DEBB00",
    800: "#B99C03",
    900: "#A18803",
    1000: "#7D6A00",
  },

  green: {
    100: "#E8FDE4",
    200: "#BFEDB8",
    300: "#A0E096",
    400: "#7FD572",
    500: "#69C45C",
    600: "#4FB63F",
    700: "#3C982C",
    800: "#308721",
    900: "#297A1B",
    1000: "#1B5B10",
  },

  red: {
    100: "#FFEBEB",
    200: "#FFD2D2",
    300: "#FFB4B4",
    400: "#FF9393",
    500: "#FF6060",
    600: "#F42F2F",
    700: "#D62525",
    800: "#BB2121",
    900: "#9B1818",
    1000: "#831212",
  },
};

const color = {
  primary: "#004A84",
  background: neutralColor[1100],
  text: neutralColor[100],
  foreground: "#FFFFFF",
} as const;

export { brandColor, neutralColor, auxiliaryColor, color };
