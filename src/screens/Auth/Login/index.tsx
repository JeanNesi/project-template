// #region imports
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { useAuth } from "@/context/Auth/UseAuthContext";

import {
  FormInput,
  Button,
  ImageComponent,
  Heading,
  FormPasswordInput,
  AnimatedDiv,
  AnchorButton,
} from "@/components";
import { loginWithEmailService } from "@/services/public/auth";
import { img } from "@/assets/img";

// #endregion

export const Login = () => {
  // #region states
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  // #endregion

  // #region form
  const schema = z
    .object({
      email: z
        .string()
        .email("Por favor, insira o seu endereço de e-mail.")
        .min(1, { message: "Por favor, insira o seu endereço de e-mail." }),
      password: z.string(),
    })
    .refine(
      (data) => {
        if (data.email && !showPassword) return true;
        return data.password.length > 0;
      },
      {
        message: "Por favor, insira a sua senha.",
        path: ["password"],
      }
    );

  type TFormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // #endregion

  // #region requests

  const { mutateAsync: requestLoginWithEmail, isPending } = useMutation({
    mutationFn: (data: TFormData) => loginWithEmailService(data),
    onSuccess: (reponse) => {
      navigate("/home");
      signIn(reponse);
    },
  });

  // #endregion

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Background>
        <S.Container>
          <ImageComponent
            src={img.react}
            alt="Logo do sistema"
            width="100px"
            height="100px"
          />

          <S.TextWrapper>
            <Heading as="h6" className="h7">
              Bem-vindo!
            </Heading>
            <Heading as="h6" className="h7">
              Faça seu login
            </Heading>
          </S.TextWrapper>

          <S.Form
            onSubmit={handleSubmit(async (data) => {
              if (showPassword) await requestLoginWithEmail(data);
              else setShowPassword(true);
            })}
          >
            <FormInput
              label="E-mail"
              type="text"
              {...register("email")}
              disabled={isPending}
              placeholder="Insira seu e-mail"
              error={errors.email?.message}
            />

            <AnimatedDiv
              hidden={!showPassword}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <S.PasswordWrapper>
                <FormPasswordInput
                  label="Senha"
                  {...register("password")}
                  placeholder="Informe a senha"
                  disabled={isPending}
                  error={errors.password?.message}
                />

                <AnchorButton justify="flex-end" to="/">
                  Esqueceu a senha?
                </AnchorButton>
              </S.PasswordWrapper>
            </AnimatedDiv>

            <Button
              type="submit"
              loading={isPending}
              justify="center"
              fullWidth
            >
              {showPassword ? "Acessar minha conta" : "Continuar com e-mail"}
            </Button>
          </S.Form>
        </S.Container>
      </S.Background>
    </motion.div>
  );
};
