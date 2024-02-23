import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import jsonData from '../../json/orders.json';
import DataGridTable from "../DataGridTable/DataGridTable.component";
import TableFilterComponent from "../TableFilter/TableFilter.component";
import handleExportToExcel from "../../utils/exportToExcel";
import { IOrder } from "../../interfaces/index";
import { styles } from "./DataGridHomePage.css";

/**
 * @author      : Riya Mehere
 * @date        : 2024-02-22
 * @description : This is the parent component for data grid and filter component
 * @params      : -
 * @return      : Renders the filter and data grid tables, sets the row data and 
 *                passes down this as prop in child component
 */

const DataGridHomePage: React.FC<Record<string, unknown>> = () => {
    const [data, setData] = useState<IOrder[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
    const [selectedDistribution, setSelectedDistribution] = useState<string | undefined>();
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const exportToExcel = () => {
        handleExportToExcel(selectedRows, data);
    };

    // Fetch data from JSON file on component mount
    useEffect(() => {
        setData(jsonData); // Set the data from the JSON file
    }, []);

    const handleSelectionChange = (selection: any[]) => {
        const selectedIds = selection.filter(id => id !== undefined)
        setSelectedRows(selectedIds)
    };

    const handleFilterChange = (filterType: string, value: string) => {
        let filteredData = jsonData;
        if (filterType === 'status') {
          setSelectedStatus(value);
        } else if (filterType === 'distribution') {
          setSelectedDistribution(value);
        }
      
        if (selectedStatus !== undefined && selectedStatus !== '') {
          filteredData = filteredData.filter(item => item.status === selectedStatus);
        }
        if (selectedDistribution !== undefined && selectedDistribution !== '') {
          filteredData = filteredData.filter(item => item.distribution === selectedDistribution);
        }
      
        setData(filteredData);
      };
      
      const handleChangeKeyword = (keyword: string) => {
        setSearchKeyword(keyword);
        const filteredData = jsonData.filter(item =>
          Object.values(item).some(value =>
            value.toLowerCase().includes(keyword.toLowerCase())
          )
        );
        setData(filteredData);
      };

    return(
        <>
        <Box sx={styles.topBox}>
        <TableFilterComponent
            selectedStatus={selectedStatus}
            selectedDistribution={selectedDistribution}
            searchKeyword={searchKeyword}
            onChangeKeyword={handleChangeKeyword}
            handleFilterChange={handleFilterChange}
            exportToExcel={exportToExcel}
        />
        </Box>
        <Box sx={styles.bottomBox}>
        <DataGridTable 
            rowData={data} 
            selectionModel={selectedRows}
            onSelectionChange={handleSelectionChange}/>
        </Box>
        </>
    )
}

export default DataGridHomePage;