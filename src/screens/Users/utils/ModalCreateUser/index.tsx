// #region IMPORTS
import React from "react";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Modal, Button, FormInput, FormSelect } from "@/components";

import {
  createUserService,
  findManyUserPermissions,
} from "@/services/private/user";

interface IModalCreateUser {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
}

export const ModalCreateUser = ({ setModal, onSave }: IModalCreateUser) => {
  // #region hookForm\Zood
  const schema = y.object({
    name: y.string().required("Campo obrigatório."),
    email: y.string().required("Campo obrigatório.").email("E-mail inválido."),
    isBlocked: y.string().required("Campo obrigatório."),
    permission: y.string().required("Campo obrigatório."),
    password: y
      .string()
      .min(6, "Escolha uma senha com pelo menos seis caracteres.")
      .required("Confirme a senha."),
    confirmPassword: y
      .string()
      .required("Confirme a senha.")
      .oneOf([y.ref("password")], "As senhas não coincidem."),
  });

  type TFormData = y.InferType<typeof schema>;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      permission: "",
      password: "",
      confirmPassword: "",
    },
  });
  // #endregion

  // #region requests
  const { data: userPermissionsList, isLoading } = useQuery({
    queryKey: ["usersPermissions"],
    queryFn: () => findManyUserPermissions(),
    staleTime: 1000 * 60 * 5,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: TFormData) => createUserService({ data }),
    onSuccess: () => {
      setModal(false);
      onSave();
    },
  });
  // #endregion

  return (
    <Modal title="Cadastrar usuário" setModal={setModal}>
      <form
        onSubmit={handleSubmit(async (data) => {
          await mutateAsync(data);
        })}
      >
        <FormInput
          label="Nome completo"
          {...register("name")}
          placeholder="Ex: Augusto Mandelli"
          error={errors.name?.message}
        />

        <FormInput
          label="E-mail"
          {...register("email")}
          placeholder="Ex: empresa@gmail.com"
          error={errors.email?.message}
        />

        <FormSelect
          label="Tipo de acesso"
          {...register("permission")}
          disabled={isLoading}
          watchValue={watch("permission")}
          error={errors.permission?.message}
        >
          <option value="" hidden disabled>
            Selecione
          </option>
          {userPermissionsList?.map((permission) => (
            <option key={permission.name} value={permission.name}>
              {permission.label}
            </option>
          ))}
        </FormSelect>

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
          Cadastrar
        </Button>
      </form>
    </Modal>
  );
};
