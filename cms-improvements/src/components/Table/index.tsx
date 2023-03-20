import {
  faSortAmountDesc,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import {
  Row,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import styled from "styled-components";
import { TableContainer } from "../../../styles/globalStyles";
import { AppColors } from "../../lib/constant";
import {
  HeaderGroup,
  RoomListProp,
  TableColumnProps,
  TableContentProps,
  UserListProp,
  useTableProps,
} from "../../lib/types";
import NoData from "../NoData";
import Pagination, { ButtonComp } from "../Pagination";

interface TableProps {
  columns: Array<TableColumnProps> | any;
  data: any | Array<UserListProp> | Array<RoomListProp> | Array<Object>;
  filterValue: string;
  filterBy?: Array<String>;
  isGlobalFilter: boolean;
  filterType: "or";
  pageSize: number;
  border?: string;
  setPageNo?: Function;
  pageNo?: number;
  pause?: boolean;
  padding?: string;
  isPaginationRequired?: boolean;
  onClickPage?: Function;
  pagination?: boolean;
  totalPage?: number;
  isRefreshPagination?: boolean;
  activePage?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  filterValue,
  filterBy = undefined,
  isGlobalFilter = true,
  filterType,
  pageSize,
  border = "",
  setPageNo = () => {},
  pageNo = 0,
  pause = false,
  padding = "0rem",
  isPaginationRequired = true,
  onClickPage = () => {},
  pagination,
  totalPage = 0,
  activePage = 1,
}) => {
  let updatedColumns: Array<TableColumnProps> = [];

  updatedColumns = useMemo(() => {
    if (filterType === "or") {
      columns.map((column: TableColumnProps) => {
        if (!filterBy?.includes(column.accessor)) {
          column.disableGlobalFilter = true;
          return column;
        }
      });
    }
    return columns;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page = [],
    rows,
    prepareRow,
    setFilter = () => {},
    setAllFilters = () => {},
    setGlobalFilter = () => {},
    canPreviousPage = false,
    canNextPage = false,
    nextPage = () => {},
    pageOptions = [],
    previousPage = () => {},
    setPageSize = () => {},
    state: { pageIndex = 0 },
  }: useTableProps = useTable(
    {
      columns: updatedColumns,
      data: data ? data : [],
      // autoResetGlobalFilter: false, //TODO : useTable option not containing autoResetGlobalFilter option.So to get rid of type error please go to the folder @types/react-table/index.d.ts/propGetter line number 170 add autoResetGlobalFilter:boolean there in node-modules
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(pageSize);
    if (filterType != "or" && filterBy && filterBy?.length > 0) {
      let filteredList: { id: String; value: string }[] = [];
      filterBy?.map((filter) => {
        filteredList.push({ id: filter, value: filterValue });
      });
      setAllFilters(filteredList);
    }

    if (
      (filterValue && !filterBy) ||
      isGlobalFilter ||
      (filterBy && filterBy?.length > 0)
    ) {
      setGlobalFilter(filterValue || undefined);
    }

    if (filterValue && filterBy && !isGlobalFilter && !filterBy.length) {
      setFilter(filterBy[0] || filterBy, filterValue);
    }
  }, [filterValue]);

  const onPageChangeHandle = (pageNumber: number) => {
    if (!pause) {
      setPageNo(pageNumber);
    }
  };
  const onPageClickHandle = (page: number) => {
    onClickPage(page);
  };

  return (
    <TableContainer>
      {rows.length > 0 ? (
        <>
          <div className="fixTableHead">
            <TableComp {...getTableProps()}>
              <TableHead border={border}>
                {headerGroups.map((headerGroup: HeaderGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps}>
                    {headerGroup.headers.map((column) => (
                      <TableHeader border={border}>
                        {column.render("Header")}
                        <SortIcon
                          {...(column.getHeaderProps(
                            column.getSortByToggleProps as any
                          ) as any)}
                        >
                          {column.isSortRequired ? (
                            <FontAwesomeIcon
                              icon={
                                column.isSortedDesc === undefined
                                  ? faSortAmountUp
                                  : column.isSortedDesc
                                  ? faSortAmountDesc
                                  : faSortAmountUp
                              }
                              style={{
                                fontSize: "1rem",
                                color:
                                  column.isSortedDesc === undefined
                                    ? `${AppColors.LighterGrey}`
                                    : `${AppColors.Black}`,
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </SortIcon>
                      </TableHeader>
                    ))}
                  </tr>
                ))}
              </TableHead>
              <tbody {...getTableBodyProps()}>
                {page.map((row: Row, i: number) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()} padding={padding}>
                      {row.cells.map((cell) => {
                        return (
                          <TableCell
                            {...cell.getCellProps()}
                            border={border}
                            padding={padding}
                          >
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </tbody>
            </TableComp>
          </div>
          {isPaginationRequired && (
            <PaginationContainer>
              <Pagination
                onPageChange={onPageClickHandle}
                pages={activePage}
                total_page={totalPage}
                pageSize={pageSize}
              />
            </PaginationContainer>
          )}
        </>
      ) : (
        <NoData />
      )}
    </TableContainer>
  );
};

export default React.memo(Table);

const TableComp = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
`;

const TableHead = styled.thead<TableContentProps>`
  background-color: ${AppColors.LightBrown};
  border: ${(props) => props.border ?? ""};
`;

const TableHeader = styled.th<TableContentProps>`
  padding: 1rem;
  font-size: 0.8rem !important;
  font-weight: 700;
  color: ${AppColors.GreyThree};
  border: ${(props) => props.border ?? "1px solid red"};
  background: ${AppColors.BgGreyContainer};
`;
const TableCell = styled.td<TableContentProps>`
background-color:${AppColors.TableCellBgColor}
  padding: ${(props) => props.padding ?? "0rem"};
  text-align: center;
  border: ${(props) => props.border ?? `1px solid ${AppColors.LightGrey}`};
`;
const TableRow = styled.tr<TableContentProps>`
  padding: ${(props) => props.padding ?? "0rem"};

  &:hover {
    background-color: ${AppColors.LightBrown};
  }
  &:nth-of-type(even) {
    border: none;
  }
`;

const SortIcon = styled.span``;

const Paginations = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PaginationContainer = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InnerDiv = styled.div`
  display: inline-block;
`;
