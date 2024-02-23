import * as XLSX from 'xlsx';
import { IOrder } from '../interfaces';

/**
 * @author      : Riya Mehere
 * @date        : 2024-02-22
 * @description : This exportToExcel.ts exports an exportToExcel functions
 * @params      : selected rows, original rows data
 * @return      : generates and excel sheet with the selected rows data 
 */

const handleExportToExcel = (selectedRefIds: string | any[], originalData: IOrder[]) => {
  // Filter out the rows corresponding to the selected ref_ids
  const filteredData = originalData.filter(row => selectedRefIds.includes(row.ref_id));

  // Convert filteredData to worksheet
  const ws = XLSX.utils.json_to_sheet(filteredData);

  // Create a new workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Generate a binary string from the workbook
  const wbBinaryString = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  // Convert the binary string to a Blob
  const wbBlob = new Blob([s2ab(wbBinaryString)], { type: 'application/octet-stream' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(wbBlob);

  // Create a link element and trigger a click event to download the file
  const link = document.createElement('a');
  link.href = url;
  link.download = 'selected_rows.xlsx';
  link.click();

  // Cleanup
  URL.revokeObjectURL(url);
};

// Utility function to convert a string to an ArrayBuffer
const s2ab = (s: string) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }
  return buf;
};

export default handleExportToExcel;
