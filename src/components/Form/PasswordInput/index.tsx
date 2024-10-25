// LIBS
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { Hide, Show } from "react-coolicons";

// TYPES
import { IInput } from "./types";

// COMPONENTS
import {
  AbsoluteWrapper,
  ErrorMessage,
  InputContainer,
  InputWrapper,
} from "./styles";
import { theme } from "@/styles/theme";
import { AnimatedDiv } from "@/components/Animated";
import { IconButton } from "@/components/Buttons";

const FormInputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    labelColor = theme.neutralColor[100],
    errorColor = theme.auxiliaryColor.red[600],
    name,
    error,
    passwordPlaceholder,
    removeStyles = false,
    disabled = false,
    hiddenErrorMessage = false,
    ...rest
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          {...rest}
        />

        <AbsoluteWrapper>
          <IconButton
            icon={showPassword ? Hide : Show}
            iconConfig={{
              color: disabled
                ? theme.neutralColor[600]
                : theme.neutralColor[100],
            }}
            disabled={disabled}
            onClick={() => setShowPassword(!showPassword)}
          />
        </AbsoluteWrapper>
      </InputWrapper>

      {!hiddenErrorMessage && (
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
      )}
    </InputContainer>
  );
};
export const FormPasswordInput = forwardRef(FormInputBase);
