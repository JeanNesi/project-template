// LIBS
import { forwardRef, ForwardRefRenderFunction } from "react";
import { CloseSm } from "react-coolicons";

// TYPES
import { AnimatePresence, motion } from "framer-motion";
import { IInput } from "./types";

// COMPONENTS
import {
  AbsoluteWrapper,
  ErrorIcon,
  ErrorMessage,
  InputContainer,
  InputWrapper,
} from "./styles";
import { theme } from "@/styles/theme";
import { AnimatedDiv } from "@/components/Animated";

const FormInputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    labelColor = theme.neutralColor[100],
    errorColor = theme.auxiliaryColor.red[600],
    name,
    error,
    passwordPlaceholder,
    removeStyles = false,
    step = "any",
    disabled = false,
    max,
    type,
    ...rest
  },
  ref
) => {
  let maxDate;

  switch (type) {
    case "date":
      maxDate = "9999-12-31";
      break;

    case "datetime-local":
      maxDate = "9999-12-31T22:22:22";
      break;

    default:
      break;
  }

  return (
    <InputContainer $labelColor={labelColor} $disabled={disabled}>
      {label && <p className="p5">{label}</p>}
      <InputWrapper
        $error={!!error}
        $passwordPlaceholder={passwordPlaceholder}
        $removeStyles={removeStyles}
      >
        <input
          id={name}
          name={name}
          ref={ref}
          step={step}
          type={type}
          disabled={disabled}
          max={max ?? maxDate}
          {...rest}
        />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
              }}
            >
              <AbsoluteWrapper>
                <ErrorIcon>
                  <CloseSm width={12} height={12} />
                </ErrorIcon>
              </AbsoluteWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </InputWrapper>

      <AnimatedDiv
        hidden={!error}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        <ErrorMessage $errorColor={errorColor}>
          <p className="p6">{error}</p>
        </ErrorMessage>
      </AnimatedDiv>
    </InputContainer>
  );
};
export const FormInput = forwardRef(FormInputBase);
