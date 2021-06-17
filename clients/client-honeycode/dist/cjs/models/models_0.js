"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeScreenAutomationResult = exports.InvokeScreenAutomationRequest = exports.ImportSourceDataFormat = exports.GetScreenDataResult = exports.ResultSet = exports.ResultRow = exports.GetScreenDataRequest = exports.VariableValue = exports.DescribeTableDataImportJobResult = exports.TableDataImportJobStatus = exports.TableDataImportJobMetadata = exports.ImportJobSubmitter = exports.ImportOptions = exports.DestinationOptions = exports.SourceDataColumnProperties = exports.ImportDataSource = exports.ImportDataSourceConfig = exports.DescribeTableDataImportJobRequest = exports.DelimitedTextImportOptions = exports.ImportDataCharacterEncoding = exports.DataItem = exports.ColumnMetadata = exports.Cell = exports.Format = exports.BatchUpsertTableRowsResult = exports.UpsertRowsResult = exports.UpsertAction = exports.BatchUpsertTableRowsRequest = exports.UpsertRowData = exports.Filter = exports.BatchUpdateTableRowsResult = exports.BatchUpdateTableRowsRequest = exports.UpdateRowData = exports.BatchDeleteTableRowsResult = exports.BatchDeleteTableRowsRequest = exports.ValidationException = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.RequestTimeoutException = exports.InternalServerException = exports.BatchCreateTableRowsResult = exports.FailedBatchItem = exports.BatchCreateTableRowsRequest = exports.CreateRowData = exports.CellInput = exports.AutomationExecutionTimeoutException = exports.AutomationExecutionException = exports.AccessDeniedException = void 0;
exports.StartTableDataImportJobResult = exports.StartTableDataImportJobRequest = exports.QueryTableRowsResult = exports.QueryTableRowsRequest = exports.ListTablesResult = exports.Table = exports.ListTablesRequest = exports.ListTableRowsResult = exports.TableRow = exports.ListTableRowsRequest = exports.ListTableColumnsResult = exports.TableColumn = exports.ListTableColumnsRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AutomationExecutionException;
(function (AutomationExecutionException) {
    /**
     * @internal
     */
    AutomationExecutionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionException = exports.AutomationExecutionException || (exports.AutomationExecutionException = {}));
var AutomationExecutionTimeoutException;
(function (AutomationExecutionTimeoutException) {
    /**
     * @internal
     */
    AutomationExecutionTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionTimeoutException = exports.AutomationExecutionTimeoutException || (exports.AutomationExecutionTimeoutException = {}));
var CellInput;
(function (CellInput) {
    /**
     * @internal
     */
    CellInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.fact && { fact: smithy_client_1.SENSITIVE_STRING }),
    });
})(CellInput = exports.CellInput || (exports.CellInput = {}));
var CreateRowData;
(function (CreateRowData) {
    /**
     * @internal
     */
    CreateRowData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.cellsToCreate && {
            cellsToCreate: Object.entries(obj.cellsToCreate).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: CellInput.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(CreateRowData = exports.CreateRowData || (exports.CreateRowData = {}));
var BatchCreateTableRowsRequest;
(function (BatchCreateTableRowsRequest) {
    /**
     * @internal
     */
    BatchCreateTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.rowsToCreate && { rowsToCreate: obj.rowsToCreate.map((item) => CreateRowData.filterSensitiveLog(item)) }),
    });
})(BatchCreateTableRowsRequest = exports.BatchCreateTableRowsRequest || (exports.BatchCreateTableRowsRequest = {}));
var FailedBatchItem;
(function (FailedBatchItem) {
    /**
     * @internal
     */
    FailedBatchItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedBatchItem = exports.FailedBatchItem || (exports.FailedBatchItem = {}));
var BatchCreateTableRowsResult;
(function (BatchCreateTableRowsResult) {
    /**
     * @internal
     */
    BatchCreateTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreateTableRowsResult = exports.BatchCreateTableRowsResult || (exports.BatchCreateTableRowsResult = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var RequestTimeoutException;
(function (RequestTimeoutException) {
    /**
     * @internal
     */
    RequestTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestTimeoutException = exports.RequestTimeoutException || (exports.RequestTimeoutException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var BatchDeleteTableRowsRequest;
(function (BatchDeleteTableRowsRequest) {
    /**
     * @internal
     */
    BatchDeleteTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableRowsRequest = exports.BatchDeleteTableRowsRequest || (exports.BatchDeleteTableRowsRequest = {}));
var BatchDeleteTableRowsResult;
(function (BatchDeleteTableRowsResult) {
    /**
     * @internal
     */
    BatchDeleteTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableRowsResult = exports.BatchDeleteTableRowsResult || (exports.BatchDeleteTableRowsResult = {}));
var UpdateRowData;
(function (UpdateRowData) {
    /**
     * @internal
     */
    UpdateRowData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.cellsToUpdate && {
            cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: CellInput.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(UpdateRowData = exports.UpdateRowData || (exports.UpdateRowData = {}));
var BatchUpdateTableRowsRequest;
(function (BatchUpdateTableRowsRequest) {
    /**
     * @internal
     */
    BatchUpdateTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.rowsToUpdate && { rowsToUpdate: obj.rowsToUpdate.map((item) => UpdateRowData.filterSensitiveLog(item)) }),
    });
})(BatchUpdateTableRowsRequest = exports.BatchUpdateTableRowsRequest || (exports.BatchUpdateTableRowsRequest = {}));
var BatchUpdateTableRowsResult;
(function (BatchUpdateTableRowsResult) {
    /**
     * @internal
     */
    BatchUpdateTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateTableRowsResult = exports.BatchUpdateTableRowsResult || (exports.BatchUpdateTableRowsResult = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.formula && { formula: smithy_client_1.SENSITIVE_STRING }),
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var UpsertRowData;
(function (UpsertRowData) {
    /**
     * @internal
     */
    UpsertRowData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filter && { filter: Filter.filterSensitiveLog(obj.filter) }),
        ...(obj.cellsToUpdate && {
            cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: CellInput.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(UpsertRowData = exports.UpsertRowData || (exports.UpsertRowData = {}));
var BatchUpsertTableRowsRequest;
(function (BatchUpsertTableRowsRequest) {
    /**
     * @internal
     */
    BatchUpsertTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.rowsToUpsert && { rowsToUpsert: obj.rowsToUpsert.map((item) => UpsertRowData.filterSensitiveLog(item)) }),
    });
})(BatchUpsertTableRowsRequest = exports.BatchUpsertTableRowsRequest || (exports.BatchUpsertTableRowsRequest = {}));
var UpsertAction;
(function (UpsertAction) {
    UpsertAction["Appended"] = "APPENDED";
    UpsertAction["Updated"] = "UPDATED";
})(UpsertAction = exports.UpsertAction || (exports.UpsertAction = {}));
var UpsertRowsResult;
(function (UpsertRowsResult) {
    /**
     * @internal
     */
    UpsertRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpsertRowsResult = exports.UpsertRowsResult || (exports.UpsertRowsResult = {}));
var BatchUpsertTableRowsResult;
(function (BatchUpsertTableRowsResult) {
    /**
     * @internal
     */
    BatchUpsertTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpsertTableRowsResult = exports.BatchUpsertTableRowsResult || (exports.BatchUpsertTableRowsResult = {}));
var Format;
(function (Format) {
    Format["Accounting"] = "ACCOUNTING";
    Format["Auto"] = "AUTO";
    Format["Contact"] = "CONTACT";
    Format["Currency"] = "CURRENCY";
    Format["Date"] = "DATE";
    Format["DateTime"] = "DATE_TIME";
    Format["Number"] = "NUMBER";
    Format["Percentage"] = "PERCENTAGE";
    Format["Rowlink"] = "ROWLINK";
    Format["Text"] = "TEXT";
    Format["Time"] = "TIME";
})(Format = exports.Format || (exports.Format = {}));
var Cell;
(function (Cell) {
    /**
     * @internal
     */
    Cell.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.formula && { formula: smithy_client_1.SENSITIVE_STRING }),
    });
})(Cell = exports.Cell || (exports.Cell = {}));
var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.name && { name: smithy_client_1.SENSITIVE_STRING }),
    });
})(ColumnMetadata = exports.ColumnMetadata || (exports.ColumnMetadata = {}));
var DataItem;
(function (DataItem) {
    /**
     * @internal
     */
    DataItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataItem = exports.DataItem || (exports.DataItem = {}));
var ImportDataCharacterEncoding;
(function (ImportDataCharacterEncoding) {
    ImportDataCharacterEncoding["ISO_8859_1"] = "ISO-8859-1";
    ImportDataCharacterEncoding["US_ASCII"] = "US-ASCII";
    ImportDataCharacterEncoding["UTF_16"] = "UTF-16";
    ImportDataCharacterEncoding["UTF_16BE"] = "UTF-16BE";
    ImportDataCharacterEncoding["UTF_16LE"] = "UTF-16LE";
    ImportDataCharacterEncoding["UTF_8"] = "UTF-8";
})(ImportDataCharacterEncoding = exports.ImportDataCharacterEncoding || (exports.ImportDataCharacterEncoding = {}));
var DelimitedTextImportOptions;
(function (DelimitedTextImportOptions) {
    /**
     * @internal
     */
    DelimitedTextImportOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelimitedTextImportOptions = exports.DelimitedTextImportOptions || (exports.DelimitedTextImportOptions = {}));
var DescribeTableDataImportJobRequest;
(function (DescribeTableDataImportJobRequest) {
    /**
     * @internal
     */
    DescribeTableDataImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableDataImportJobRequest = exports.DescribeTableDataImportJobRequest || (exports.DescribeTableDataImportJobRequest = {}));
var ImportDataSourceConfig;
(function (ImportDataSourceConfig) {
    /**
     * @internal
     */
    ImportDataSourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportDataSourceConfig = exports.ImportDataSourceConfig || (exports.ImportDataSourceConfig = {}));
var ImportDataSource;
(function (ImportDataSource) {
    /**
     * @internal
     */
    ImportDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportDataSource = exports.ImportDataSource || (exports.ImportDataSource = {}));
var SourceDataColumnProperties;
(function (SourceDataColumnProperties) {
    /**
     * @internal
     */
    SourceDataColumnProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceDataColumnProperties = exports.SourceDataColumnProperties || (exports.SourceDataColumnProperties = {}));
var DestinationOptions;
(function (DestinationOptions) {
    /**
     * @internal
     */
    DestinationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationOptions = exports.DestinationOptions || (exports.DestinationOptions = {}));
var ImportOptions;
(function (ImportOptions) {
    /**
     * @internal
     */
    ImportOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportOptions = exports.ImportOptions || (exports.ImportOptions = {}));
var ImportJobSubmitter;
(function (ImportJobSubmitter) {
    /**
     * @internal
     */
    ImportJobSubmitter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.email && { email: smithy_client_1.SENSITIVE_STRING }),
    });
})(ImportJobSubmitter = exports.ImportJobSubmitter || (exports.ImportJobSubmitter = {}));
var TableDataImportJobMetadata;
(function (TableDataImportJobMetadata) {
    /**
     * @internal
     */
    TableDataImportJobMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.submitter && { submitter: ImportJobSubmitter.filterSensitiveLog(obj.submitter) }),
    });
})(TableDataImportJobMetadata = exports.TableDataImportJobMetadata || (exports.TableDataImportJobMetadata = {}));
var TableDataImportJobStatus;
(function (TableDataImportJobStatus) {
    TableDataImportJobStatus["Completed"] = "COMPLETED";
    TableDataImportJobStatus["Failed"] = "FAILED";
    TableDataImportJobStatus["InProgress"] = "IN_PROGRESS";
    TableDataImportJobStatus["Submitted"] = "SUBMITTED";
})(TableDataImportJobStatus = exports.TableDataImportJobStatus || (exports.TableDataImportJobStatus = {}));
var DescribeTableDataImportJobResult;
(function (DescribeTableDataImportJobResult) {
    /**
     * @internal
     */
    DescribeTableDataImportJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobMetadata && { jobMetadata: TableDataImportJobMetadata.filterSensitiveLog(obj.jobMetadata) }),
    });
})(DescribeTableDataImportJobResult = exports.DescribeTableDataImportJobResult || (exports.DescribeTableDataImportJobResult = {}));
var VariableValue;
(function (VariableValue) {
    /**
     * @internal
     */
    VariableValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VariableValue = exports.VariableValue || (exports.VariableValue = {}));
var GetScreenDataRequest;
(function (GetScreenDataRequest) {
    /**
     * @internal
     */
    GetScreenDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.variables && { variables: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetScreenDataRequest = exports.GetScreenDataRequest || (exports.GetScreenDataRequest = {}));
var ResultRow;
(function (ResultRow) {
    /**
     * @internal
     */
    ResultRow.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.dataItems && { dataItems: smithy_client_1.SENSITIVE_STRING }),
    });
})(ResultRow = exports.ResultRow || (exports.ResultRow = {}));
var ResultSet;
(function (ResultSet) {
    /**
     * @internal
     */
    ResultSet.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.headers && { headers: obj.headers.map((item) => ColumnMetadata.filterSensitiveLog(item)) }),
        ...(obj.rows && { rows: obj.rows.map((item) => ResultRow.filterSensitiveLog(item)) }),
    });
})(ResultSet = exports.ResultSet || (exports.ResultSet = {}));
var GetScreenDataResult;
(function (GetScreenDataResult) {
    /**
     * @internal
     */
    GetScreenDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.results && {
            results: Object.entries(obj.results).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: ResultSet.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(GetScreenDataResult = exports.GetScreenDataResult || (exports.GetScreenDataResult = {}));
var ImportSourceDataFormat;
(function (ImportSourceDataFormat) {
    ImportSourceDataFormat["DelimitedText"] = "DELIMITED_TEXT";
})(ImportSourceDataFormat = exports.ImportSourceDataFormat || (exports.ImportSourceDataFormat = {}));
var InvokeScreenAutomationRequest;
(function (InvokeScreenAutomationRequest) {
    /**
     * @internal
     */
    InvokeScreenAutomationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.variables && { variables: smithy_client_1.SENSITIVE_STRING }),
    });
})(InvokeScreenAutomationRequest = exports.InvokeScreenAutomationRequest || (exports.InvokeScreenAutomationRequest = {}));
var InvokeScreenAutomationResult;
(function (InvokeScreenAutomationResult) {
    /**
     * @internal
     */
    InvokeScreenAutomationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvokeScreenAutomationResult = exports.InvokeScreenAutomationResult || (exports.InvokeScreenAutomationResult = {}));
var ListTableColumnsRequest;
(function (ListTableColumnsRequest) {
    /**
     * @internal
     */
    ListTableColumnsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTableColumnsRequest = exports.ListTableColumnsRequest || (exports.ListTableColumnsRequest = {}));
var TableColumn;
(function (TableColumn) {
    /**
     * @internal
     */
    TableColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableColumn = exports.TableColumn || (exports.TableColumn = {}));
var ListTableColumnsResult;
(function (ListTableColumnsResult) {
    /**
     * @internal
     */
    ListTableColumnsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTableColumnsResult = exports.ListTableColumnsResult || (exports.ListTableColumnsResult = {}));
var ListTableRowsRequest;
(function (ListTableRowsRequest) {
    /**
     * @internal
     */
    ListTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTableRowsRequest = exports.ListTableRowsRequest || (exports.ListTableRowsRequest = {}));
var TableRow;
(function (TableRow) {
    /**
     * @internal
     */
    TableRow.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.cells && { cells: smithy_client_1.SENSITIVE_STRING }),
    });
})(TableRow = exports.TableRow || (exports.TableRow = {}));
var ListTableRowsResult;
(function (ListTableRowsResult) {
    /**
     * @internal
     */
    ListTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.rows && { rows: obj.rows.map((item) => TableRow.filterSensitiveLog(item)) }),
    });
})(ListTableRowsResult = exports.ListTableRowsResult || (exports.ListTableRowsResult = {}));
var ListTablesRequest;
(function (ListTablesRequest) {
    /**
     * @internal
     */
    ListTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesRequest = exports.ListTablesRequest || (exports.ListTablesRequest = {}));
var Table;
(function (Table) {
    /**
     * @internal
     */
    Table.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Table = exports.Table || (exports.Table = {}));
var ListTablesResult;
(function (ListTablesResult) {
    /**
     * @internal
     */
    ListTablesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesResult = exports.ListTablesResult || (exports.ListTablesResult = {}));
var QueryTableRowsRequest;
(function (QueryTableRowsRequest) {
    /**
     * @internal
     */
    QueryTableRowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filterFormula && { filterFormula: Filter.filterSensitiveLog(obj.filterFormula) }),
    });
})(QueryTableRowsRequest = exports.QueryTableRowsRequest || (exports.QueryTableRowsRequest = {}));
var QueryTableRowsResult;
(function (QueryTableRowsResult) {
    /**
     * @internal
     */
    QueryTableRowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.rows && { rows: obj.rows.map((item) => TableRow.filterSensitiveLog(item)) }),
    });
})(QueryTableRowsResult = exports.QueryTableRowsResult || (exports.QueryTableRowsResult = {}));
var StartTableDataImportJobRequest;
(function (StartTableDataImportJobRequest) {
    /**
     * @internal
     */
    StartTableDataImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTableDataImportJobRequest = exports.StartTableDataImportJobRequest || (exports.StartTableDataImportJobRequest = {}));
var StartTableDataImportJobResult;
(function (StartTableDataImportJobResult) {
    /**
     * @internal
     */
    StartTableDataImportJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTableDataImportJobResult = exports.StartTableDataImportJobResult || (exports.StartTableDataImportJobResult = {}));
//# sourceMappingURL=models_0.js.map