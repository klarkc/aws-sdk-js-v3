import { HoneycodeClient } from "./HoneycodeClient";
import { BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput } from "./commands/BatchCreateTableRowsCommand";
import { BatchDeleteTableRowsCommandInput, BatchDeleteTableRowsCommandOutput } from "./commands/BatchDeleteTableRowsCommand";
import { BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput } from "./commands/BatchUpdateTableRowsCommand";
import { BatchUpsertTableRowsCommandInput, BatchUpsertTableRowsCommandOutput } from "./commands/BatchUpsertTableRowsCommand";
import { DescribeTableDataImportJobCommandInput, DescribeTableDataImportJobCommandOutput } from "./commands/DescribeTableDataImportJobCommand";
import { GetScreenDataCommandInput, GetScreenDataCommandOutput } from "./commands/GetScreenDataCommand";
import { InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput } from "./commands/InvokeScreenAutomationCommand";
import { ListTableColumnsCommandInput, ListTableColumnsCommandOutput } from "./commands/ListTableColumnsCommand";
import { ListTableRowsCommandInput, ListTableRowsCommandOutput } from "./commands/ListTableRowsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { QueryTableRowsCommandInput, QueryTableRowsCommandOutput } from "./commands/QueryTableRowsCommand";
import { StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput } from "./commands/StartTableDataImportJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
export declare class Honeycode extends HoneycodeClient {
    /**
     * <p>
     *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
     *             The API allows you to specify the values to set in some or all of the columns in the new rows.
     *         </p>
     *         <p>
     *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
     *             will be applied to the new row. If there is no column level formula but the last row of the table has a
     *             formula, then that formula will be copied down to the new row. If there is no column level formula and
     *             no formula in the last row of the table, then that column will be left blank for the new rows.
     *         </p>
     */
    batchCreateTableRows(args: BatchCreateTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<BatchCreateTableRowsCommandOutput>;
    batchCreateTableRows(args: BatchCreateTableRowsCommandInput, cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void): void;
    batchCreateTableRows(args: BatchCreateTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
     *             You need to specify the ids of the rows that you want to delete from the table.
     *         </p>
     */
    batchDeleteTableRows(args: BatchDeleteTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteTableRowsCommandOutput>;
    batchDeleteTableRows(args: BatchDeleteTableRowsCommandInput, cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void): void;
    batchDeleteTableRows(args: BatchDeleteTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
     *         </p>
     *         <p>
     *             You can specify the values to set in some or all of the columns in the table for the specified
     *             rows.
     *             If a column is not explicitly specified in a particular row, then that column will not be updated
     *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
     *             ("").
     *         </p>
     */
    batchUpdateTableRows(args: BatchUpdateTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpdateTableRowsCommandOutput>;
    batchUpdateTableRows(args: BatchUpdateTableRowsCommandInput, cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void): void;
    batchUpdateTableRows(args: BatchUpdateTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert
     *             operation takes a filter expression as input and evaluates it to find matching rows on the destination
     *             table. If matching rows are found, it will update the cells in the matching rows to new values specified
     *             in the request. If no matching rows are found, a new row is added at the end of the table and the cells in
     *             that row are set to the new values specified in the request.
     *         </p>
     *         <p>
     *             You can specify the values to set in some or all of the columns in the table for the
     *             matching or newly appended rows. If a column is not explicitly specified for a particular row, then that
     *             column will not be updated for that row. To clear out the data in a specific cell, you need to set the value
     *             as an empty string ("").
     *         </p>
     */
    batchUpsertTableRows(args: BatchUpsertTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpsertTableRowsCommandOutput>;
    batchUpsertTableRows(args: BatchUpsertTableRowsCommandInput, cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void): void;
    batchUpsertTableRows(args: BatchUpsertTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
     *         </p>
     */
    describeTableDataImportJob(args: DescribeTableDataImportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableDataImportJobCommandOutput>;
    describeTableDataImportJob(args: DescribeTableDataImportJobCommandInput, cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void): void;
    describeTableDataImportJob(args: DescribeTableDataImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void): void;
    /**
     * <p>
     *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
     *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
     *             displayed on the screen.
     *         </p>
     */
    getScreenData(args: GetScreenDataCommandInput, options?: __HttpHandlerOptions): Promise<GetScreenDataCommandOutput>;
    getScreenData(args: GetScreenDataCommandInput, cb: (err: any, data?: GetScreenDataCommandOutput) => void): void;
    getScreenData(args: GetScreenDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetScreenDataCommandOutput) => void): void;
    /**
     * <p>
     *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
     *             The API allows setting local variables, which can then be used in the automation being invoked.
     *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
     *         </p>
     */
    invokeScreenAutomation(args: InvokeScreenAutomationCommandInput, options?: __HttpHandlerOptions): Promise<InvokeScreenAutomationCommandOutput>;
    invokeScreenAutomation(args: InvokeScreenAutomationCommandInput, cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void): void;
    invokeScreenAutomation(args: InvokeScreenAutomationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void): void;
    /**
     * <p>
     *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
     *         </p>
     */
    listTableColumns(args: ListTableColumnsCommandInput, options?: __HttpHandlerOptions): Promise<ListTableColumnsCommandOutput>;
    listTableColumns(args: ListTableColumnsCommandInput, cb: (err: any, data?: ListTableColumnsCommandOutput) => void): void;
    listTableColumns(args: ListTableColumnsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTableColumnsCommandOutput) => void): void;
    /**
     * <p>
     *             The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
     *         </p>
     */
    listTableRows(args: ListTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<ListTableRowsCommandOutput>;
    listTableRows(args: ListTableRowsCommandInput, cb: (err: any, data?: ListTableRowsCommandOutput) => void): void;
    listTableRows(args: ListTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The ListTables API allows you to retrieve a list of all the tables in a workbook.
     *         </p>
     */
    listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
    listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
    listTables(args: ListTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
    /**
     * <p>
     *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
     *         </p>
     */
    queryTableRows(args: QueryTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<QueryTableRowsCommandOutput>;
    queryTableRows(args: QueryTableRowsCommandInput, cb: (err: any, data?: QueryTableRowsCommandOutput) => void): void;
    queryTableRows(args: QueryTableRowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryTableRowsCommandOutput) => void): void;
    /**
     * <p>
     *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
     *             the id of the job that was started. To find out the status of the import request, you need to call the
     *             DescribeTableDataImportJob API.
     *         </p>
     */
    startTableDataImportJob(args: StartTableDataImportJobCommandInput, options?: __HttpHandlerOptions): Promise<StartTableDataImportJobCommandOutput>;
    startTableDataImportJob(args: StartTableDataImportJobCommandInput, cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void): void;
    startTableDataImportJob(args: StartTableDataImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void): void;
}
