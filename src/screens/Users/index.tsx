import { useState } from "react";
import { PencilSimple, Plus } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import {
  DotSpinLoading,
  IconButton,
  LoadingWrapper,
  Pagination,
  DefaultTable,
  DefaultTableContent,
  ImageComponent,
  Heading,
  SearchInput,
  MultiSelect,
} from "@/components";

import { IUser, findManyUsersService } from "@/services/private/user";

import { dateTimeFormatter } from "@/utils/dateTime";

import * as Style from "./styles";
import { ModalCreateUser, ModalChangePassword, ModalEditUser } from "./utils";

import { NotFoundRegisters } from "@/components/NotFoundRegisters";
import { searchManyUsersService } from "@/services/private/user/searchManyUsersService";
import { usePagination } from "@/hooks";
import { theme } from "@/styles/theme";

export const Users = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const [modalCreateUserIsOpen, setModalCreateUserIsOpen] = useState(false);
  const [modalEditUserIsOpen, setModalEditUserIsOpen] = useState(false);
  const [modalChangePasswordIsOpen, setModalChangePasswordIsOpen] =
    useState(false);

  // #region pagination
  const takeKey = "@usersTake";
  const { page, setPage, take } = usePagination({ takeKey });
  const [search, setSearch] = useState("");
  // #endregion

  // #region requests
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["usersList", { page, search, take }],
    queryFn: () => findManyUsersService({ page, search, take }),
    staleTime: 1000 * 30,
    enabled: false,
  });

  // #endregion

  const userListIsEmpty = !data?.list.length;

  return (
    <>
      {modalCreateUserIsOpen && (
        <ModalCreateUser
          setModal={setModalCreateUserIsOpen}
          onSave={() => refetch()}
        />
      )}

      {modalEditUserIsOpen && selectedUser && (
        <ModalEditUser
          setModal={setModalEditUserIsOpen}
          userInfos={selectedUser}
          setModalChangePasswordIsOpen={setModalChangePasswordIsOpen}
          onSave={() => refetch()}
        />
      )}

      {modalChangePasswordIsOpen && selectedUser && (
        <ModalChangePassword
          setModal={setModalChangePasswordIsOpen}
          userId={selectedUser.id}
        />
      )}

      <Style.Container>
        <Style.Header>
          <Style.HeaderLeftSide>
            <Heading>Usuários</Heading>
            <SearchInput
              onClickIcon={() => {
                setPage(1);
                refetch();
              }}
              onChange={(evt) => {
                setSearch(evt.target.value);
                if (!evt.target.value.length) setPage(1);
              }}
              onKeyUp={(evt) => {
                if (evt.key === "Enter") {
                  setPage(1);
                  refetch();
                }
              }}
            />
          </Style.HeaderLeftSide>

          <IconButton
            label="Novo usuário"
            icon={Plus}
            iconConfig={{
              bgColor: theme.color.primary,
              color: theme.color.text,
            }}
            onClick={() => setModalCreateUserIsOpen(true)}
          />
        </Style.Header>

        <MultiSelect options={searchManyUsersService} onChange={() => {}} />

        {isLoading && (
          <LoadingWrapper>
            <DotSpinLoading />
          </LoadingWrapper>
        )}

        {!isLoading && !userListIsEmpty && (
          <>
            <DefaultTable
              colsHeader={[
                {
                  label: "",
                  cssProps: {
                    width: "32px",
                    maxWidth: "32px",
                  },
                },
                {
                  label: "Nome",
                  cssProps: {
                    paddingRight: theme.size["4"],
                  },
                },
                { label: "Email" },
                { label: "Último acesso" },
                { label: "Permissão" },
                { label: "Status" },
              ]}
            >
              {data.list.map((user) => (
                <DefaultTableContent
                  key={user.id}
                  colsBody={[
                    {
                      cell: (
                        <ImageComponent
                          src={user.avatar}
                          alt="Imagem do usuário"
                          width="32px"
                          height="32px"
                          radius="50px"
                        />
                      ),
                      cssProps: {
                        width: "32px",
                        maxWidth: "32px",
                        minWidth: "48px !important",
                        paddingRight: "0px",
                      },
                    },
                    {
                      cell: user.name,
                      cssProps: {
                        paddingLeft: "8px",
                      },
                    },
                    {
                      cell: user.email,
                    },
                    {
                      cell: user.lastAccess
                        ? dateTimeFormatter(user.lastAccess)
                        : "-",
                    },
                    {
                      cell: user.UserPermission[0].permission.label,
                    },

                    {
                      cell: "Ativo",
                    },
                    {
                      cell: (
                        <Style.ButtonsContainer>
                          <IconButton
                            icon={PencilSimple}
                            onClick={() => {
                              setSelectedUser(user);
                              setModalEditUserIsOpen(true);
                            }}
                          />
                        </Style.ButtonsContainer>
                      ),
                      cssProps: {
                        width: "48px",
                      },
                    },
                  ]}
                />
              ))}
            </DefaultTable>

            <Style.PaginationFooter>
              <Pagination totalCountOfRegister={data.total} takeKey={takeKey} />
            </Style.PaginationFooter>
          </>
        )}

        {!isLoading && userListIsEmpty && (
          <NotFoundRegisters label="Nenhum usuário cadastrado. Cadastre um usuário para visualizar." />
        )}
      </Style.Container>
    </>
  );
};
