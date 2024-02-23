import { Box} from "@mui/material";
import columnData from '../../json/headers.json';
import { DataGrid } from "@mui/x-data-grid";
import { IChildProps} from "../../interfaces/index";
  
/**
 * @author      : Riya Mehere
 * @date        : 2024-02-22
 * @description : This is the child component which renders the main data grid table 
 */
const DataGridTable: React.FC<IChildProps> = ({rowData, selectionModel, onSelectionChange}) => { 
    return(
        <Box style={{background: '#FFFFFF', height: '60vh'}}>
             <DataGrid
                rows={rowData}
                columns={columnData} // Use columns from the imported JSON file
                getRowId={(row) => row.ref_id} // Specify the unique identifier
                checkboxSelection
                onRowSelectionModelChange={(newSelection) => {
                      onSelectionChange(newSelection); // Call onSelectionChange callback with new selection
                  }}
                rowSelectionModel={selectionModel} // Pass the selectionModel prop
                disableRowSelectionOnClick
                hideFooter={true}
                  sx={{
                    boxShadow: 0,
                    border: 0,
                    padding: 2,
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#6C6C6C",
                    fontFamily: "Poppins",
                    zIndex: '2',
                    "& .MuiDataGrid-row:hover": {
                      border: 'none',
                      borderRadius: '10px',
                      color: '#000000'
                    },
                    "& .MuiDataGrid-cell":{
                        border: 'none',
                        borderRadius: '10px',
                    },
                    " & .MuiDataGrid-row":{
                        border: 'none',
                        borderRadius: '10px',
                    },
                    ".MuiDataGrid-row:nth-child(odd)": { // Select odd rows
                        border: 'none',
                        borderRadius: '10px',
                        background: '#F4F4F4', // Apply background color
                    },
                    "&>.MuiDataGrid-main": {
                        borderRadius: '10px',
                      "&>.MuiDataGrid-columnHeaders": {
                        border: 'none',
                        borderRadius: '10px',
                      }
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontSize: '16px',
                        color: '#9C9C9C',
                        fontWeight: 400,
                      },
                      "& .MuiDataGrid-columnHeader": {
                        borderRadius: '10px',
                      },
                  }}
            />
        </Box>
    )
}

export default DataGridTable;