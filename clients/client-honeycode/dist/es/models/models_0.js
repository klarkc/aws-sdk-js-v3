import { __assign, __read } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AutomationExecutionException;
(function (AutomationExecutionException) {
    /**
     * @internal
     */
    AutomationExecutionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionException || (AutomationExecutionException = {}));
export var AutomationExecutionTimeoutException;
(function (AutomationExecutionTimeoutException) {
    /**
     * @internal
     */
    AutomationExecutionTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionTimeoutException || (AutomationExecutionTimeoutException = {}));
export var CellInput;
(function (CellInput) {
    /**
     * @internal
     */
    CellInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.fact && { fact: SENSITIVE_STRING }))); };
})(CellInput || (CellInput = {}));
export var CreateRowData;
(function (CreateRowData) {
    /**
     * @internal
     */
    CreateRowData.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.cellsToCreate && {
        cellsToCreate: Object.entries(obj.cellsToCreate).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = CellInput.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(CreateRowData || (CreateRowData = {}));
export var BatchCreateTableRowsRequest;
(function (BatchCreateTableRowsRequest) {
    /**
     * @internal
     */
    BatchCreateTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.rowsToCreate && { rowsToCreate: obj.rowsToCreate.map(function (item) { return CreateRowData.filterSensitiveLog(item); }) }))); };
})(BatchCreateTableRowsRequest || (BatchCreateTableRowsRequest = {}));
export var FailedBatchItem;
(function (FailedBatchItem) {
    /**
     * @internal
     */
    FailedBatchItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedBatchItem || (FailedBatchItem = {}));
export var BatchCreateTableRowsResult;
(function (BatchCreateTableRowsResult) {
    /**
     * @internal
     */
    BatchCreateTableRowsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCreateTableRowsResult || (BatchCreateTableRowsResult = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var RequestTimeoutException;
(function (RequestTimeoutException) {
    /**
     * @internal
     */
    RequestTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestTimeoutException || (RequestTimeoutException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var BatchDeleteTableRowsRequest;
(function (BatchDeleteTableRowsRequest) {
    /**
     * @internal
     */
    BatchDeleteTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteTableRowsRequest || (BatchDeleteTableRowsRequest = {}));
export var BatchDeleteTableRowsResult;
(function (BatchDeleteTableRowsResult) {
    /**
     * @internal
     */
    BatchDeleteTableRowsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteTableRowsResult || (BatchDeleteTableRowsResult = {}));
export var UpdateRowData;
(function (UpdateRowData) {
    /**
     * @internal
     */
    UpdateRowData.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.cellsToUpdate && {
        cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = CellInput.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(UpdateRowData || (UpdateRowData = {}));
export var BatchUpdateTableRowsRequest;
(function (BatchUpdateTableRowsRequest) {
    /**
     * @internal
     */
    BatchUpdateTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.rowsToUpdate && { rowsToUpdate: obj.rowsToUpdate.map(function (item) { return UpdateRowData.filterSensitiveLog(item); }) }))); };
})(BatchUpdateTableRowsRequest || (BatchUpdateTableRowsRequest = {}));
export var BatchUpdateTableRowsResult;
(function (BatchUpdateTableRowsResult) {
    /**
     * @internal
     */
    BatchUpdateTableRowsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpdateTableRowsResult || (BatchUpdateTableRowsResult = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.formula && { formula: SENSITIVE_STRING }))); };
})(Filter || (Filter = {}));
export var UpsertRowData;
(function (UpsertRowData) {
    /**
     * @internal
     */
    UpsertRowData.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.filter && { filter: Filter.filterSensitiveLog(obj.filter) })), (obj.cellsToUpdate && {
        cellsToUpdate: Object.entries(obj.cellsToUpdate).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = CellInput.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(UpsertRowData || (UpsertRowData = {}));
export var BatchUpsertTableRowsRequest;
(function (BatchUpsertTableRowsRequest) {
    /**
     * @internal
     */
    BatchUpsertTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.rowsToUpsert && { rowsToUpsert: obj.rowsToUpsert.map(function (item) { return UpsertRowData.filterSensitiveLog(item); }) }))); };
})(BatchUpsertTableRowsRequest || (BatchUpsertTableRowsRequest = {}));
export var UpsertAction;
(function (UpsertAction) {
    UpsertAction["Appended"] = "APPENDED";
    UpsertAction["Updated"] = "UPDATED";
})(UpsertAction || (UpsertAction = {}));
export var UpsertRowsResult;
(function (UpsertRowsResult) {
    /**
     * @internal
     */
    UpsertRowsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpsertRowsResult || (UpsertRowsResult = {}));
export var BatchUpsertTableRowsResult;
(function (BatchUpsertTableRowsResult) {
    /**
     * @internal
     */
    BatchUpsertTableRowsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpsertTableRowsResult || (BatchUpsertTableRowsResult = {}));
export var Format;
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
})(Format || (Format = {}));
export var Cell;
(function (Cell) {
    /**
     * @internal
     */
    Cell.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.formula && { formula: SENSITIVE_STRING }))); };
})(Cell || (Cell = {}));
export var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.name && { name: SENSITIVE_STRING }))); };
})(ColumnMetadata || (ColumnMetadata = {}));
export var DataItem;
(function (DataItem) {
    /**
     * @internal
     */
    DataItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataItem || (DataItem = {}));
export var ImportDataCharacterEncoding;
(function (ImportDataCharacterEncoding) {
    ImportDataCharacterEncoding["ISO_8859_1"] = "ISO-8859-1";
    ImportDataCharacterEncoding["US_ASCII"] = "US-ASCII";
    ImportDataCharacterEncoding["UTF_16"] = "UTF-16";
    ImportDataCharacterEncoding["UTF_16BE"] = "UTF-16BE";
    ImportDataCharacterEncoding["UTF_16LE"] = "UTF-16LE";
    ImportDataCharacterEncoding["UTF_8"] = "UTF-8";
})(ImportDataCharacterEncoding || (ImportDataCharacterEncoding = {}));
export var DelimitedTextImportOptions;
(function (DelimitedTextImportOptions) {
    /**
     * @internal
     */
    DelimitedTextImportOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DelimitedTextImportOptions || (DelimitedTextImportOptions = {}));
export var DescribeTableDataImportJobRequest;
(function (DescribeTableDataImportJobRequest) {
    /**
     * @internal
     */
    DescribeTableDataImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTableDataImportJobRequest || (DescribeTableDataImportJobRequest = {}));
export var ImportDataSourceConfig;
(function (ImportDataSourceConfig) {
    /**
     * @internal
     */
    ImportDataSourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportDataSourceConfig || (ImportDataSourceConfig = {}));
export var ImportDataSource;
(function (ImportDataSource) {
    /**
     * @internal
     */
    ImportDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportDataSource || (ImportDataSource = {}));
export var SourceDataColumnProperties;
(function (SourceDataColumnProperties) {
    /**
     * @internal
     */
    SourceDataColumnProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceDataColumnProperties || (SourceDataColumnProperties = {}));
export var DestinationOptions;
(function (DestinationOptions) {
    /**
     * @internal
     */
    DestinationOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationOptions || (DestinationOptions = {}));
export var ImportOptions;
(function (ImportOptions) {
    /**
     * @internal
     */
    ImportOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportOptions || (ImportOptions = {}));
export var ImportJobSubmitter;
(function (ImportJobSubmitter) {
    /**
     * @internal
     */
    ImportJobSubmitter.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.email && { email: SENSITIVE_STRING }))); };
})(ImportJobSubmitter || (ImportJobSubmitter = {}));
export var TableDataImportJobMetadata;
(function (TableDataImportJobMetadata) {
    /**
     * @internal
     */
    TableDataImportJobMetadata.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.submitter && { submitter: ImportJobSubmitter.filterSensitiveLog(obj.submitter) }))); };
})(TableDataImportJobMetadata || (TableDataImportJobMetadata = {}));
export var TableDataImportJobStatus;
(function (TableDataImportJobStatus) {
    TableDataImportJobStatus["Completed"] = "COMPLETED";
    TableDataImportJobStatus["Failed"] = "FAILED";
    TableDataImportJobStatus["InProgress"] = "IN_PROGRESS";
    TableDataImportJobStatus["Submitted"] = "SUBMITTED";
})(TableDataImportJobStatus || (TableDataImportJobStatus = {}));
export var DescribeTableDataImportJobResult;
(function (DescribeTableDataImportJobResult) {
    /**
     * @internal
     */
    DescribeTableDataImportJobResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobMetadata && { jobMetadata: TableDataImportJobMetadata.filterSensitiveLog(obj.jobMetadata) }))); };
})(DescribeTableDataImportJobResult || (DescribeTableDataImportJobResult = {}));
export var VariableValue;
(function (VariableValue) {
    /**
     * @internal
     */
    VariableValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VariableValue || (VariableValue = {}));
export var GetScreenDataRequest;
(function (GetScreenDataRequest) {
    /**
     * @internal
     */
    GetScreenDataRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.variables && { variables: SENSITIVE_STRING }))); };
})(GetScreenDataRequest || (GetScreenDataRequest = {}));
export var ResultRow;
(function (ResultRow) {
    /**
     * @internal
     */
    ResultRow.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.dataItems && { dataItems: SENSITIVE_STRING }))); };
})(ResultRow || (ResultRow = {}));
export var ResultSet;
(function (ResultSet) {
    /**
     * @internal
     */
    ResultSet.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.headers && { headers: obj.headers.map(function (item) { return ColumnMetadata.filterSensitiveLog(item); }) })), (obj.rows && { rows: obj.rows.map(function (item) { return ResultRow.filterSensitiveLog(item); }) }))); };
})(ResultSet || (ResultSet = {}));
export var GetScreenDataResult;
(function (GetScreenDataResult) {
    /**
     * @internal
     */
    GetScreenDataResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.results && {
        results: Object.entries(obj.results).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = ResultSet.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(GetScreenDataResult || (GetScreenDataResult = {}));
export var ImportSourceDataFormat;
(function (ImportSourceDataFormat) {
    ImportSourceDataFormat["DelimitedText"] = "DELIMITED_TEXT";
})(ImportSourceDataFormat || (ImportSourceDataFormat = {}));
export var InvokeScreenAutomationRequest;
(function (InvokeScreenAutomationRequest) {
    /**
     * @internal
     */
    InvokeScreenAutomationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.variables && { variables: SENSITIVE_STRING }))); };
})(InvokeScreenAutomationRequest || (InvokeScreenAutomationRequest = {}));
export var InvokeScreenAutomationResult;
(function (InvokeScreenAutomationResult) {
    /**
     * @internal
     */
    InvokeScreenAutomationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvokeScreenAutomationResult || (InvokeScreenAutomationResult = {}));
export var ListTableColumnsRequest;
(function (ListTableColumnsRequest) {
    /**
     * @internal
     */
    ListTableColumnsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTableColumnsRequest || (ListTableColumnsRequest = {}));
export var TableColumn;
(function (TableColumn) {
    /**
     * @internal
     */
    TableColumn.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TableColumn || (TableColumn = {}));
export var ListTableColumnsResult;
(function (ListTableColumnsResult) {
    /**
     * @internal
     */
    ListTableColumnsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTableColumnsResult || (ListTableColumnsResult = {}));
export var ListTableRowsRequest;
(function (ListTableRowsRequest) {
    /**
     * @internal
     */
    ListTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTableRowsRequest || (ListTableRowsRequest = {}));
export var TableRow;
(function (TableRow) {
    /**
     * @internal
     */
    TableRow.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.cells && { cells: SENSITIVE_STRING }))); };
})(TableRow || (TableRow = {}));
export var ListTableRowsResult;
(function (ListTableRowsResult) {
    /**
     * @internal
     */
    ListTableRowsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.rows && { rows: obj.rows.map(function (item) { return TableRow.filterSensitiveLog(item); }) }))); };
})(ListTableRowsResult || (ListTableRowsResult = {}));
export var ListTablesRequest;
(function (ListTablesRequest) {
    /**
     * @internal
     */
    ListTablesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTablesRequest || (ListTablesRequest = {}));
export var Table;
(function (Table) {
    /**
     * @internal
     */
    Table.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Table || (Table = {}));
export var ListTablesResult;
(function (ListTablesResult) {
    /**
     * @internal
     */
    ListTablesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTablesResult || (ListTablesResult = {}));
export var QueryTableRowsRequest;
(function (QueryTableRowsRequest) {
    /**
     * @internal
     */
    QueryTableRowsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filterFormula && { filterFormula: Filter.filterSensitiveLog(obj.filterFormula) }))); };
})(QueryTableRowsRequest || (QueryTableRowsRequest = {}));
export var QueryTableRowsResult;
(function (QueryTableRowsResult) {
    /**
     * @internal
     */
    QueryTableRowsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.rows && { rows: obj.rows.map(function (item) { return TableRow.filterSensitiveLog(item); }) }))); };
})(QueryTableRowsResult || (QueryTableRowsResult = {}));
export var StartTableDataImportJobRequest;
(function (StartTableDataImportJobRequest) {
    /**
     * @internal
     */
    StartTableDataImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTableDataImportJobRequest || (StartTableDataImportJobRequest = {}));
export var StartTableDataImportJobResult;
(function (StartTableDataImportJobResult) {
    /**
     * @internal
     */
    StartTableDataImportJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTableDataImportJobResult || (StartTableDataImportJobResult = {}));
//# sourceMappingURL=models_0.js.map