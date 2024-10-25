import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import PaginationItem from "./paginationItem";
import { Container, Ellipsis } from "./styles";
import PaginationArrow from "./paginationArrow";
import { IPagination } from "./types";
import { usePagination } from "@/hooks";
import { TakeValueSelect } from "./takeValueSelect";

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export const Pagination = ({
  totalCountOfRegister,
  registerPerPage = 20,
  currentPage,
  onPageChange,
  takeKey,
}: IPagination) => {
  const {
    page: urlPageValue,
    setTake,
    take,
  } = usePagination({
    takeKey,
  });

  const [, setSearchParams] = useSearchParams();

  const isControlledComponent = !!currentPage;
  const internalPageValue = currentPage || urlPageValue;
  const internalTakeValue = useMemo(
    () => Number(localStorage.getItem(takeKey ?? "")) || registerPerPage,
    [takeKey, registerPerPage, take]
  );

  const lastPage = Math.ceil(totalCountOfRegister / internalTakeValue);

  const previousPages =
    internalPageValue > 1
      ? generatePagesArray(
          internalPageValue - 1 - siblingsCount,
          internalPageValue - 1
        )
      : [];

  const nextPages =
    internalPageValue < lastPage
      ? generatePagesArray(
          internalPageValue,
          Math.min(internalPageValue + siblingsCount, lastPage)
        )
      : [];

  useEffect(() => {
    if (!isControlledComponent)
      setSearchParams((prevState) => ({
        ...prevState,
        page: String(internalPageValue),
        take: String(internalTakeValue),
      }));
  }, []);

  return (
    <Container>
      <TakeValueSelect
        value={internalTakeValue}
        onChange={(currentTake) => {
          if (takeKey) localStorage.setItem(takeKey, String(currentTake));
          setTake(currentTake);
        }}
      />

      <PaginationArrow
        disabled={internalPageValue === 1}
        onPageChange={onPageChange}
        pageNumber={internalPageValue - 1}
        isControlledComponent={isControlledComponent}
        previous
      />

      {internalPageValue > 1 + siblingsCount && (
        <>
          <PaginationItem
            pageNumber={1}
            onPageChange={onPageChange}
            isControlledComponent={isControlledComponent}
          />
          {internalPageValue > 2 + siblingsCount && (
            <Ellipsis>
              <p className="p6">...</p>
            </Ellipsis>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
            isControlledComponent={isControlledComponent}
          />
        ))}

      <PaginationItem
        pageNumber={internalPageValue}
        onPageChange={onPageChange}
        isCurrent
        isControlledComponent={isControlledComponent}
      />

      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
            isControlledComponent={isControlledComponent}
          />
        ))}

      {internalPageValue + siblingsCount < lastPage && (
        <>
          {internalPageValue + 1 + siblingsCount < lastPage && (
            <Ellipsis>
              <p className="p6">...</p>
            </Ellipsis>
          )}
          <PaginationItem
            pageNumber={lastPage}
            onPageChange={onPageChange}
            isControlledComponent={isControlledComponent}
          />
        </>
      )}

      <PaginationArrow
        onPageChange={onPageChange}
        pageNumber={internalPageValue + 1}
        previous={false}
        disabled={internalPageValue === lastPage}
        isControlledComponent={isControlledComponent}
      />
    </Container>
  );
};
