import { useSearchParams } from "react-router-dom";

interface IUsePagination {
  takeKey?: string;
}

export const usePagination = ({ takeKey }: IUsePagination = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // #region Take
  const take =
    Number(searchParams.get("take")) ||
    Number(localStorage.getItem(takeKey ?? "")) ||
    20;

  const setTake = (currentTake: number) => {
    setSearchParams((prevState) => {
      prevState.set("take", String(currentTake));

      return prevState;
    });
  };
  // #endregion

  // #region Page
  const page = Number(searchParams.get("page")) || 1;

  const setPage = (currentPage: number) => {
    setSearchParams((prevState) => {
      prevState.set("page", String(currentPage));

      return prevState;
    });
  };
  // #endregion

  return { take, setTake, page, setPage };
};
