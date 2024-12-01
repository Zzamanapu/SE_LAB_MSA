

export interface ITableData {
    id: number
    image: string
    businessman: string
    IDs: string
    productName: string
    overflowPrice: number
    currentDate: string
}


export interface IGeneralReportTable {
    id: number,
    profile: string,
    address: string,
    stakeholderType: "farmer" | "wholesaler" | "trader",
    reportType: "Audience Report" | "Performence Report" | "Summary Report",
    currentDate: string,
}
