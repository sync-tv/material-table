import * as React from 'react';

import { TableProps } from "@material-ui/core/Table"
import { TableCellProps } from "@material-ui/core/TableCell";

import { IconProps } from '@material-ui/core/Icon';

import { string } from 'prop-types';

export interface MaterialTableProps<T = any> {
  actions?: (Action<T> | ((rowData: T) => Action<T>))[];
  columns: Column<T>[];
  components?: Components;
  data: T[] | ((query: Query) => Promise<QueryResult<T>>);
  detailPanel?: ((rowData: T) => React.ReactNode) | (DetailPanel | ((rowData: T) => DetailPanel))[];
  editable?: {
    isEditable?: (rowData: T) => boolean;
    isDeletable?: (rowData: T) => boolean;
    onRowAdd?: (newData: T) => Promise<void>;
    onRowUpdate?: (newData: T, oldData?: T) => Promise<void>;
    onRowDelete?: (oldData: T) => Promise<void>;
  }
  icons?: Icons;
  isLoading?: boolean;
  title?: string | React.ReactElement<any>;
  options?: Options<T>;
  parentChildData?: (row: T, rows: T[]) => any;
  localization?: Localization;
  onChangeRowsPerPage?: (pageSize: number) => void;
  onChangePage?: (page: number) => void;
  onOrderChange?: (orderBy: number, orderDirection: ("asc" | "desc")) => void;
  onRowClick?: (event?: React.MouseEvent, rowData?: T, toggleDetailPanel?: (panelIndex?: number) => void) => void;
  onRowSelected?: (rowData: T) => void;
  onSelectionChange?: (data: T[], rowData?: T) => void;
  onTreeExpandChange?: (data: T, isExpanded: boolean) => void;
  style?: React.CSSProperties;
  tableProps?: TableProps;
  tableRef?: any;
}

export interface Filter {
  column: Column;
  operator: "=";
  value: any;
}

export interface Query {
  filters: Filter[];
  page: number;
  pageSize: number;
  search: string;
  orderBy: Column;
  orderDirection: "asc" | "desc";
}

export interface QueryResult<T = any> {
  data: T[];
  page: number;
  totalCount: number;
}

export interface DetailPanel {
  disabled?: boolean;
  icon?: string | React.ReactElement<any>;
  openIcon?: string | React.ReactElement<any>;
  tooltip?: string;
  render: (rowData: any) => string | React.ReactNode;
}

export interface Action<T = any> {
  disabled?: boolean;
  icon: string | (() => React.ReactElement<any>);
  isFreeAction?: boolean;
  tooltip?: string;
  onClick: (event: React.MouseEvent, data: T) => void;
  iconProps?: IconProps;
  hidden?: boolean;
}

export interface EditComponentProps<T = any> {
  rowData: T;
  value: any,
  onChange: (newValue: T) => void,
  columnDef: EditCellColumnDef,
}

export interface EditCellColumnDef {
  field: string,
  title: string,
  tableData: {
    filterValue: any,
    groupOrder: any,
    groupSort: string,
    id: number,
  }
}

export interface Column<T = any> {
  cellStyle?: React.CSSProperties | ((data: T, rowData: T) => React.CSSProperties);
  currencySetting?: { locale?: string, currencyCode?: string, minimumFractionDigits?: number, maximumFractionDigits?: number };
  customFilterAndSearch?: (filter: any, rowData: T, columnDef: Column) => boolean;
  customSort?: (data1: T, data2: T, type: (('row' | 'group'))) => number;
  defaultFilter?: any;
  defaultGroupOrder?: number;
  defaultGroupSort?: ('asc' | 'desc');
  defaultSort?: ('asc' | 'desc');
  disableClick?: boolean;
  editComponent?: ((props: EditComponentProps) => React.ReactElement<any>);
  emptyValue?: string | React.ReactElement<any> | ((data: T) => React.ReactElement<any> | string);
  export?: boolean;
  field?: string;
  filtering?: boolean;
  filterCellStyle?: React.CSSProperties;
  grouping?: boolean;
  headerStyle?: React.CSSProperties;
  hidden?: boolean;
  lookup?: object;
  editable?: ('always' | 'onUpdate' | 'onAdd' | 'never');
  removable?: boolean;
  render?: (data: T, type: ('row' | 'group')) => any;
  searchable?: boolean;
  sorting?: boolean;
  title?: string | React.ReactElement<any>;
  type?: ('string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency');
  align?: TableCellProps["align"];
}

export interface Components {
  Action?: React.ComponentType<any>;
  Actions?: React.ComponentType<any>;
  Body?: React.ComponentType<any>;
  Cell?: React.ComponentType<any>;
  Container?: React.ComponentType<any>;
  EditField?: React.ComponentType<any>;
  EditRow?: React.ComponentType<any>;
  FilterRow?: React.ComponentType<any>;
  Groupbar?: React.ComponentType<any>;
  GroupRow?: React.ComponentType<any>;
  Header?: React.ComponentType<any>;
  Pagination?: React.ComponentType<any>;
  OverlayLoading?: React.ComponentType<any>;
  Row?: React.ComponentType<any>;
  Toolbar?: React.ComponentType<any>;
}

export const MTableAction: () => React.ReactElement<any>;
export const MTableActions: () => React.ReactElement<any>;
export const MTableBody: () => React.ReactElement<any>;
export const MTableBodyRow: () => React.ReactElement<any>;
export const MTableCell: () => React.ReactElement<any>;
export const MTableEditField: () => React.ReactElement<any>;
export const MTableEditRow: () => React.ReactElement<any>;
export const MTableFilterRow: () => React.ReactElement<any>;
export const MTableGroupbar: () => React.ReactElement<any>;
export const MTableGroupRow: () => React.ReactElement<any>;
export const MTableHeader: () => React.ReactElement<any>;
export const MTablePagination: () => React.ReactElement<any>;
export const MTableToolbar: () => React.ReactElement<any>;


export interface Icons {
  Add?: () => React.ReactElement<any>;
  Check?: () => React.ReactElement<any>;
  Clear?: () => React.ReactElement<any>;
  Delete?: () => React.ReactElement<any>;
  DetailPanel?: () => React.ReactElement<any>;
  Edit?: () => React.ReactElement<any>;
  Export?: () => React.ReactElement<any>;
  Filter?: () => React.ReactElement<any>;
  FirstPage?: () => React.ReactElement<any>;
  SortArrow?: () => React.ReactElement<any>;
  LastPage?: () => React.ReactElement<any>;
  NextPage?: () => React.ReactElement<any>;
  PreviousPage?: () => React.ReactElement<any>;
  ResetSearch?: () => React.ReactElement<any>;
  Search?: () => React.ReactElement<any>;
  ThirdStateCheck?: () => React.ReactElement<any>;
  ViewColumn?: () => React.ReactElement<any>;
}

export interface Options<T = any> {
  actionsCellStyle?: React.CSSProperties;
  actionsColumnIndex?: number;
  addRowPosition?: ('first' | 'last');
  columnsButton?: boolean;
  defaultExpanded?: boolean;
  debounceInterval?: number;
  detailPanelType?: ('single' | 'multiple');
  doubleHorizontalScroll?: boolean;
  emptyRowsWhenPaging?: boolean;
  exportAllData?: boolean;
  exportButton?: boolean;
  exportDelimiter?: string;
  exportFileName?: string;
  exportCsv?: (columns: any[], renderData: T[]) => void;
  filtering?: boolean;
  filterCellStyle?: React.CSSProperties;
  header?: boolean;
  headerStyle?: React.CSSProperties;
  initialPage?: number;
  loadingType?: ('overlay' | 'linear');
  maxBodyHeight?: number | string;
  paging?: boolean;
  grouping?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  paginationType?: ('normal' | 'stepped');
  rowStyle?: React.CSSProperties | ((data: T, index: number) => React.CSSProperties);
  showEmptyDataSourceMessage?: boolean;
  showFirstLastPageButtons?: boolean;
  showSelectAllCheckbox?: boolean;
  showTitle?: boolean;
  showTextRowsSelected?:boolean;
  search?: boolean;
  searchFieldAlignment?: 'left' | 'right';
  searchFieldStyle?: React.CSSProperties;
  selection?: boolean;
  selectionProps?: any | ((data: T) => any);
  sorting?: boolean;
  toolbar?: boolean;
  toolbarButtonAlignment?: 'left' | 'right';
  detailPanelColumnAlignment?: 'left' | 'right';
}

export interface Localization {
  body?: {
    emptyDataSourceMessage?: string;
    filterRow?: {
      filterTooltip?: string;
    };
    editRow?: {
      saveTooltip?: string;
      cancelTooltip?: string;
      deleteText?: string;
    },
    addTooltip?: string;
    deleteTooltip?: string;
    editTooltip?: string;
  };
  header?: {
    actions?: string;
  };
  grouping?: {
    groupedBy?: string;
    placeholder?: string;
  };
  pagination?: {
    firstTooltip?: string;
    previousTooltip?: string;
    nextTooltip?: string;
    labelDisplayedRows?: string;
    labelRowsPerPage?: string;
    lastTooltip?: string;
    labelRowsSelect?: string;
  };
  toolbar?: {
    addRemoveColumns?: string;
    nRowsSelected?: string;
    showColumnsTitle?: string;
    showColumnsAriaLabel?: string;
    exportTitle?: string;
    exportAriaLabel?: string;
    exportName?: string;
    searchTooltip?: string;
  };
}

declare const MaterialTable: React.ComponentType<MaterialTableProps>;
export default MaterialTable;
