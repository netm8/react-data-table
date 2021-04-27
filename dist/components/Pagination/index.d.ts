import { FC } from 'react';
export declare type PaginationProps = {
    onChange: (pageIndex: number) => void;
    page: number;
    pagesCount: number;
};
declare const Pagination: FC<PaginationProps>;
export default Pagination;
