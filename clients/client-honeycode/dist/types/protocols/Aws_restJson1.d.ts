import { BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput } from "../commands/BatchCreateTableRowsCommand";
import { BatchDeleteTableRowsCommandInput, BatchDeleteTableRowsCommandOutput } from "../commands/BatchDeleteTableRowsCommand";
import { BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput } from "../commands/BatchUpdateTableRowsCommand";
import { BatchUpsertTableRowsCommandInput, BatchUpsertTableRowsCommandOutput } from "../commands/BatchUpsertTableRowsCommand";
import { DescribeTableDataImportJobCommandInput, DescribeTableDataImportJobCommandOutput } from "../commands/DescribeTableDataImportJobCommand";
import { GetScreenDataCommandInput, GetScreenDataCommandOutput } from "../commands/GetScreenDataCommand";
import { InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput } from "../commands/InvokeScreenAutomationCommand";
import { ListTableColumnsCommandInput, ListTableColumnsCommandOutput } from "../commands/ListTableColumnsCommand";
import { ListTableRowsCommandInput, ListTableRowsCommandOutput } from "../commands/ListTableRowsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { QueryTableRowsCommandInput, QueryTableRowsCommandOutput } from "../commands/QueryTableRowsCommand";
import { StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput } from "../commands/StartTableDataImportJobCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1BatchCreateTableRowsCommand: (input: BatchCreateTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchDeleteTableRowsCommand: (input: BatchDeleteTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchUpdateTableRowsCommand: (input: BatchUpdateTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchUpsertTableRowsCommand: (input: BatchUpsertTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeTableDataImportJobCommand: (input: DescribeTableDataImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetScreenDataCommand: (input: GetScreenDataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1InvokeScreenAutomationCommand: (input: InvokeScreenAutomationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTableColumnsCommand: (input: ListTableColumnsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTableRowsCommand: (input: ListTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTablesCommand: (input: ListTablesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1QueryTableRowsCommand: (input: QueryTableRowsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartTableDataImportJobCommand: (input: StartTableDataImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1BatchCreateTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchCreateTableRowsCommandOutput>;
export declare const deserializeAws_restJson1BatchDeleteTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchDeleteTableRowsCommandOutput>;
export declare const deserializeAws_restJson1BatchUpdateTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchUpdateTableRowsCommandOutput>;
export declare const deserializeAws_restJson1BatchUpsertTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchUpsertTableRowsCommandOutput>;
export declare const deserializeAws_restJson1DescribeTableDataImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTableDataImportJobCommandOutput>;
export declare const deserializeAws_restJson1GetScreenDataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetScreenDataCommandOutput>;
export declare const deserializeAws_restJson1InvokeScreenAutomationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InvokeScreenAutomationCommandOutput>;
export declare const deserializeAws_restJson1ListTableColumnsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTableColumnsCommandOutput>;
export declare const deserializeAws_restJson1ListTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTableRowsCommandOutput>;
export declare const deserializeAws_restJson1ListTablesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTablesCommandOutput>;
export declare const deserializeAws_restJson1QueryTableRowsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<QueryTableRowsCommandOutput>;
export declare const deserializeAws_restJson1StartTableDataImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartTableDataImportJobCommandOutput>;
