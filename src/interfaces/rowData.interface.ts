export interface IRow {
    ref_id: string,
    customer: string,
    product: string,
    date: string,
    distribution: string,
    status: string,
    price: string
}

export interface IChildProps {
    rowData: IRow[],
    selectionModel: string[],
    onSelectionChange: (selection: any[]) => void
  }