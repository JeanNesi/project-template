import { CSSProperties } from "react";

const size = {
  "1": "0.125rem", // 2px
  "2": "0.25rem", // 4px
  "3": "0.375rem", // 6px
  "4": "0.5rem", // 8px
  "5": "0.625rem", // 10px
  "6": "0.75rem", // 12px
  "7": "0.875rem", // 14px
  "8": "1rem", // 16px
  "9": "1.125rem", // 18px
  "10": "1.25rem", // 20px
  "11": "1.375rem", // 22px
  "12": "1.5rem", // 24px
  "16": "2rem", // 32px
  "20": "2.5rem", // 40px
  "24": "3rem", // 48px
  "28": "3.5rem", // 56px
  "32": "4rem", // 64px
  "36": "4.5rem", // 72px
  "40": "5rem", // 80px
  "60": "7.5rem", // 120px
  "70": "8.75rem", // 140px
  "80": "10rem", // 160px
} as const;

export type IButtonSizes =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

export type IButtonSize = Record<IButtonSizes, CSSProperties>;

const buttonSize: IButtonSize = {
  extraSmall: {
    height: size["20"],
    borderRadius: size["6"],
    padding: `${size["5"]} ${size["10"]}`,
  },
  small: {
    height: size["24"],
    borderRadius: size["7"],
    padding: `${size["5"]} ${size["10"]}`,
  },
  medium: {
    height: size["28"],
    borderRadius: size["8"],
    padding: `${size["5"]} ${size["12"]}`,
  },
  large: {
    height: size["32"],
    borderRadius: size["9"],
    padding: `${size["5"]} ${size["16"]}`,
  },
  extraLarge: {
    height: size["36"],
    borderRadius: size["10"],
    padding: `${size["5"]} ${size["16"]}`,
  },
};

export { size, buttonSize };
