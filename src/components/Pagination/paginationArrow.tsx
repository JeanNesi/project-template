import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Next, Previous } from "./styles";
import { usePagination } from "@/hooks";

interface PaginationItemProps {
  pageNumber: number;
  isControlledComponent: boolean;
  onPageChange?: (page: number) => void;
  previous?: boolean;
  disabled?: boolean;
}

const PaginationArrow = ({
  pageNumber,
  onPageChange,
  isControlledComponent,
  previous,
  disabled,
}: PaginationItemProps) => {
  const { setPage } = usePagination();

  if (previous) {
    return (
      <Previous
        $disabled={disabled}
        onClick={() => {
          if (onPageChange) onPageChange(pageNumber);
          if (!isControlledComponent) setPage(pageNumber);
        }}
      >
        <CaretLeft />
      </Previous>
    );
  }

  return (
    <Next
      $disabled={disabled}
      onClick={() => {
        if (onPageChange) onPageChange(pageNumber);
        if (!isControlledComponent) setPage(pageNumber);
      }}
    >
      <CaretRight />
    </Next>
  );
};

export default PaginationArrow;
