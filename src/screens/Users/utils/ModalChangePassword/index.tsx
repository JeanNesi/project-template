// #region IMPORTS
import React from "react";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Modal, Button, FormInput } from "@/components";
import { updateUserPasswordService } from "@/services/private/user";

interface IModalChangePassword {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

export const ModalChangePassword = ({
  setModal,
  userId,
}: IModalChangePassword) => {
  // #region hookForm\Zood
  const schema = y.object({
    password: y
      .string()
      .min(6, "Escolha uma senha com pelo menos seis caracteres.")
      .required("Confirme a senha."),
    confirmPassword: y
      .string()
      .oneOf([y.ref("password"), "aaa"])
      .min(8, "Error")
      .required("Confirme a senha."),
  });

  type TFormData = y.InferType<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  // #endregion

  // #region requests
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: TFormData) =>
      updateUserPasswordService({
        userId,
        newPassword: data.password,
      }),
    onSuccess: () => {
      setModal(false);
    },
  });
  // #endregion

  return (
    <Modal title="Alterar senha" setModal={setModal}>
      <form
        onSubmit={handleSubmit(async (data) => {
          await mutateAsync(data);
        })}
      >
        <FormInput
          label="Senha"
          type="password"
          {...register("password")}
          placeholder="Crie uma senha de pelo menos 6 caracteres"
          error={errors.password?.message}
        />

        <FormInput
          label="Confirmar senha"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme a senha criada"
          error={errors.confirmPassword?.message}
        />

        <Button justify="center" loading={isPending} type="submit">
          Salvar
        </Button>
      </form>
    </Modal>
  );
};
