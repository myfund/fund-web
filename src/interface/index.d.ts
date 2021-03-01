declare interface Fund {
  name: string;
  fundcode: string;
  type: string;
}

declare interface PaginationOption {
  page: number;
  size?: number;
}

declare type Pagination = {
  page: 0;
  size?: 10;
};
