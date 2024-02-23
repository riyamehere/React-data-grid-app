export interface IFilterProps {
    selectedStatus: string | undefined;
    selectedDistribution: string | undefined;
    searchKeyword: string;
    onChangeKeyword: (keyword: string) => void;
    handleFilterChange: (filterType: string, value: string) => void;
    exportToExcel: () => void
  }