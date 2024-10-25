import { usePagination } from "@/hooks";
import { Container } from "./styles";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange?: (page: number) => void;
  isControlledComponent: boolean;
}

const PaginationItem = ({
  pageNumber,
  isCurrent = false,
  onPageChange,
  isControlledComponent,
}: PaginationItemProps) => {
  const { setPage } = usePagination();

  if (isCurrent) {
    return (
      <Container>
        <button type="button" className="isCurrent" disabled>
          <p className="p6">{pageNumber}</p>
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <button
        type="button"
        className="notCurrent"
        onClick={() => {
          if (onPageChange) onPageChange(pageNumber);
          if (!isControlledComponent) setPage(pageNumber);
        }}
      >
        <p className="p6">{pageNumber}</p>
      </button>
    </Container>
  );
};

export default PaginationItem;
