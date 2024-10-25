// #region IMPORTS
import React from "react";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Modal, Button, FormInput } from "@/components";
import { FormSelect } from "@/components/Form/Select";
import {
  IUser,
  findManyUserPermissions,
  updateUserService,
} from "@/services/private/user";
import { theme } from "@/styles/theme";

interface IModalEditUser {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalChangePasswordIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfos: IUser;
  onSave: () => void;
}

export const ModalEditUser = ({
  setModal,
  onSave,
  userInfos,
  setModalChangePasswordIsOpen,
}: IModalEditUser) => {
  // #region hookForm\Zood
  const schema = y.object({
    name: y.string().required("Campo obrigatório."),
    email: y.string().required("Campo obrigatório.").email("E-mail inválido."),
    isBlocked: y.string().required("Campo obrigatório."),
    permission: y.string().required("Campo obrigatório."),
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
      name: userInfos.name,
      email: userInfos.email,
      permission: userInfos.UserPermission[0].permission.name,
      isBlocked: userInfos.isBlocked ? "blocked" : "active",
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
    mutationFn: (data: TFormData) =>
      updateUserService({
        userId: userInfos.id,
        data: {
          ...data,
          isBlocked: data.isBlocked === "blocked",
        },
      }),
    onSuccess: () => {
      setModal(false);
      onSave();
    },
  });
  // #endregion

  return (
    <Modal title="Editar usuário" setModal={setModal}>
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
          label="Permissão"
          {...register("permission")}
          value={watch("permission")}
          disabled={isLoading}
          watchValue={watch("permission")}
          error={errors.permission?.message}
        >
          <option value="" disabled hidden>
            Selecione
          </option>

          {userPermissionsList?.map((permission) => (
            <option key={permission.name} value={permission.name}>
              {permission.label}
            </option>
          ))}
        </FormSelect>

        <FormSelect
          label="Status"
          {...register("isBlocked")}
          watchValue={watch("isBlocked")}
          error={errors.isBlocked?.message}
        >
          <option value="" disabled hidden>
            Selecione
          </option>

          <option value="active">Ativo</option>

          <option value="blocked">Bloqueado</option>
        </FormSelect>

        <Button
          type="button"
          borderless
          color={theme.color.primary}
          onClick={() => {
            setModalChangePasswordIsOpen(true);
            setModal(false);
          }}
        >
          Alterar senha
        </Button>

        <Button justify="center" loading={isPending} type="submit">
          Salvar
        </Button>
      </form>
    </Modal>
  );
};
