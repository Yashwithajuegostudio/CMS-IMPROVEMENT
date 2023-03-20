export interface TableContentProps {
  border?: string;
  padding?: string;
}

export interface TableColumnProps {
  Header?: string;
  accessor: string | propertyIsEnumerable;
  isSortRequired?: boolean;
  disableGlobalFilter?: boolean;
}

export interface buttonFieldProps {
  style?: object;
  property: buttonProperty[];
  marginTop?: string;
  justifyContent?: string;
  gap?: string;
  padding?: string;
}

//Table props

export type Cell = {
  render: (type: string) => JSX.Element;
  getCellProps: () => void;
  column: Column;
  row: Row;
  state: string;
  value: string | JSX.Element;
};

export type Row = {
  index: number;
  cells: Cell[];
  getRowProps: () => void;
  original: object;
};

export type tableSortProps = {
  title?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: ((e: MouseEvent) => void) | undefined;
};

export type EnhancedColumn = {
  render: (type: string) => JSX.Element;
  getHeaderProps: (column: tableSortProps) => void;
  isSortRequired?: boolean;
  isSortedDesc?: undefined | boolean;
  getSortByToggleProps: (props?: tableDefaultProps[]) => tableSortProps;
};

export type HeaderGroup = {
  headers: EnhancedColumn[];
  getRowProps: (userProps?: object) => object;
  getHeaderGroupProps: () => void;
};

export interface RoomManagementTabProps {
  is_room_create?: boolean;
  is_users?: boolean;
  is_edit?: boolean;
}
export interface tableDefaultProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  role?: string | undefined;
}

export interface useTableProps {
  getTableProps: (propGetter?: tableDefaultProps) => TableProps;
  rows?: Array<D>;
  getTableBodyProps: (propGetter?: tableDefaultProps) => TableBodyProps;
  headerGroups: Array<HeaderGroup<D>>;
  page?: Array<Row<D>>;
  prepareRow: (row: Row<D>) => void;
  setFilter?: (
    columnId: String,
    updater: ((filterValue: string) => string) | string
  ) => void;
  setAllFilters?: (
    updater:
      | Array<{ id: String | number; value: String }>
      | ((
          filters: Array<{ id: String | number; value: string }>
        ) => Array<{ id: String | number; value: string }>)
  ) => void;
  setGlobalFilter?: (filterValue: string | undefined) => void;
  canPreviousPage?: boolean;
  canNextPage?: boolean;
  nextPage?: () => void;
  pageOptions?: number[];
  previousPage?: () => void;
  setPageSize?: (pageSize: number) => void;
  state: { hiddenColumns?: Array<String> | undefined; pageIndex?: number };
}

export interface UserListProp {
  user_id: number;
  user_name: string;
  tenant_id: string;
  user_type_name: string;
  room_name: string;
  created_at: string;
  stemuli_user_id: string;
}
export interface RoomUserListProp {
  stemuli_user_id: number;
  user_name: string;
  user_type_name: string;
}
export interface RoomListProp {
  room_name: string;
  room_id: number;
  tenant_id: string;
  room_type_name: string;
  user_count: number;
  status: number;
}
export interface contentContainerProps {
  width?: string;
  height?: string;
}

export interface ConfirmationPopUpProps {
  onConfirmClick?: Function;
  onCancelClick?: Function;
  message?: JSX.Element;
  show?: boolean;
  type?: number;
  disabled?: boolean;
}

export interface EditRoomProps {
  room_id?: number;
  room_name?: string;
  tenant_id?: string;
  room_type?: number;
  user_count?: number;
  created_at: string;
  pinged_at: string;
  max_user_count: number;
}
export interface CreateRoomProps {
  room_name?: string;
  tenant_id?: string;
  room_type?: number;
  room_id?: number;
}
export interface GlobalRoomProps {
  max_user_count?: number;
  room_expiry?: number;
  ping_expiry?: number;
}
export interface EditRoomData {
  room_type: { value: number };
  room_name: { value: string };
  tenant_id: { value: string };
  room_id: { value: number };
  user_count: { value: number };
  created_at: { value: string };
  pinged_at: { value: string };
  max_user_count: { value: number };
}
export interface RoomData {
  room_type: { value: string };
  room_name: { value: string };
  tenant_id: { value: string };
}
export interface GlobalRoomData {
  max_user_count: { value: number };
  room_expiry: { value: number };
  ping_expiry: { value: number };
}
export interface dataFieldStyleProps {
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  marginTop?: string;
  justifyContent?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  labelWidth?: string;
}

export interface formHeaderProps {
  color?: string;
  fontSize?: string;
  display?: string;
}

export interface buttonContainerProps {
  marginTop?: string;
  gap?: string;
  justifyContent?: string;
}
export interface dataFieldProps extends dataFieldContainerProps {
  style?: object;
  property: dataFieldProperty[];
}

export interface dataFieldContainerProps {
  marginTop?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  flexDirection?: string;
  justifyContent?: string;
  gap?: string;
  flexWrap?: string;
  paddingRight?: string;
  labelWidth?: string;
  IsLabel?: boolean;
}
export interface dateFieldContainerProps {
  flexWrap?: string;
  flexDirection?: string;
  marginTop?: string;
  justifyContent?: string;
  marginLeft?: string;
}

export interface dateFieldStyleProps {
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  marginTop?: string;
  marginLeft?: string;
}
export interface dataListProps {
  value?: string | number;
  label?: string;
  type?: string | number;
}
export interface dropdownProperty extends dropdownContainerProps {
  onChange?: Function | undefined;
  // label: string | "";
  label: any;
  type?: string;
  name: string | "";
  // value?: string | string[];
  value?: any;
  defaultValue?: any;
  // dataList: string[] | any;
  dataList: dataListProps[] | any;
  style?: object;
  marginLeft?: string;
  textAlign?: "left" | "right" | undefined;
  boxWidth?: string;
  multiple?: boolean;
  labelWidth?: string;
  onChangeHandler?: (
    value: React.ChangeEvent<HTMLInputElement> | string
  ) => void;
}
export interface dropDownFieldProps
  extends dropdownContainerProps,
    dropdownContainerListProps {
  style?: object;
  property: dropdownProperty[];
}

export interface dropDownDataFieldStyleProps {
  gap?: string;
  justifyContent?: string;
  flexDirection?: string;
  marginTop?: string;
  flexWrap?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export interface dropDownDataFieldProps extends dataFieldContainerProps {
  style?: object;
  inputProperty: dataFieldProperty[];
  dropDownField: dropdownProperty[];
}

export interface dropdownContainerProps {
  flexDirection?: string | any;
  alignItems?: string;
  gap?: string;
  width?: string;
  flexWrap?: string;
  marginLeft?: string;
  justifyContent?: string;
  marginTop?: string;
}

export interface dropdownContainerListProps {
  gap?: string;
  justifyContent?: string | any;
  flexDirection?: string;
  marginTop?: string;
  flexWrap?: string;
}

export interface radioButtonProperty {
  label: string;
  type?: "radio";
  isChecked?: boolean;
  name: string;
  value?: string;
  style?: object;
  color?: string;
  fontSize?: string;
}

export interface RadioButtonLabelProps {
  color?: string;
  fontSize?: string;
}
export interface radioButtonProps extends radioButtonContainerProps {
  style?: object;
  property: radioButtonProperty[];
  gap?: string;
  flexDirection: string;
  justifyContent: string;
}

export interface radioButtonContainerProps {
  gap?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export interface TextAreaFieldProps
  extends TextAreaProps,
    textAreaContainerProps {
  style?: object;
  property: TextAreaProps[];
}
export interface TextAreaProps extends textAreaContainerProps, ContainerProps {
  label?: string;
  maxLength?: number;
  isMaxLengthRequired?: boolean;
  onChange?: Function;
  value?: string | any;
  flexDirection?: "row" | "column";
  name?: string;
  style?: object;
}
export interface menuLinkProps {
  isActive?: boolean;
}
export interface defaultObjectProps {
  [key: string]: string;
}

export interface ToastFieldProps {
  show: boolean;
  message: string;
  type: "success" | "warning" | "info" | "error";
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}
export interface PlayerListProps {}

export interface ModelDataProps {
  show: boolean;
  message: JSX.Element;
  type?: boolean;
  isSuccess?: boolean;
}

export interface PopUpDataProps {
  type?: number | boolean;
  show: boolean;
  message: JSX.Element;
}

export interface mainPageContainerProps {
  padding?: string;
  width?: string;
  height?: string;
}

export interface TableContainerProps {
  isScrollRequired?: boolean;
}

export interface InputProps {
  type?: string;
  onChange?: Function;
  onFocusOut?: Function;
  placeholder?: string | undefined | any;
  value?: string | number | undefined;
  checked?: boolean | undefined;
  align?: "left" | "right" | "center";
  autoFocus?: string | "autoFocus";
  disabled?: boolean | undefined;
  cursor?: "pointer";
  style?: object;
}
