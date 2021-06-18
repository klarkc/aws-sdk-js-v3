"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparedStatement =
  exports.GetPreparedStatementInput =
  exports.GetNamedQueryOutput =
  exports.GetNamedQueryInput =
  exports.GetDataCatalogOutput =
  exports.DataCatalog =
  exports.GetDataCatalogInput =
  exports.MetadataException =
  exports.GetDatabaseOutput =
  exports.Database =
  exports.GetDatabaseInput =
  exports.DeleteWorkGroupOutput =
  exports.DeleteWorkGroupInput =
  exports.ResourceNotFoundException =
  exports.DeletePreparedStatementOutput =
  exports.DeletePreparedStatementInput =
  exports.DeleteNamedQueryOutput =
  exports.DeleteNamedQueryInput =
  exports.DeleteDataCatalogOutput =
  exports.DeleteDataCatalogInput =
  exports.CreateWorkGroupOutput =
  exports.CreateWorkGroupInput =
  exports.WorkGroupConfiguration =
  exports.CreatePreparedStatementOutput =
  exports.CreatePreparedStatementInput =
  exports.CreateNamedQueryOutput =
  exports.CreateNamedQueryInput =
  exports.CreateDataCatalogOutput =
  exports.CreateDataCatalogInput =
  exports.DataCatalogType =
  exports.Tag =
  exports.BatchGetQueryExecutionOutput =
  exports.UnprocessedQueryExecutionId =
  exports.QueryExecution =
  exports.QueryExecutionStatus =
  exports.QueryExecutionState =
  exports.QueryExecutionStatistics =
  exports.StatementType =
  exports.ResultConfiguration =
  exports.EncryptionConfiguration =
  exports.EncryptionOption =
  exports.QueryExecutionContext =
  exports.EngineVersion =
  exports.BatchGetQueryExecutionInput =
  exports.InvalidRequestException =
  exports.InternalServerException =
  exports.BatchGetNamedQueryOutput =
  exports.UnprocessedNamedQueryId =
  exports.NamedQuery =
  exports.BatchGetNamedQueryInput =
    void 0;
exports.UntagResourceOutput =
  exports.UntagResourceInput =
  exports.TagResourceOutput =
  exports.TagResourceInput =
  exports.StopQueryExecutionOutput =
  exports.StopQueryExecutionInput =
  exports.TooManyRequestsException =
  exports.ThrottleReason =
  exports.StartQueryExecutionOutput =
  exports.StartQueryExecutionInput =
  exports.ListWorkGroupsOutput =
  exports.WorkGroupSummary =
  exports.ListWorkGroupsInput =
  exports.ListTagsForResourceOutput =
  exports.ListTagsForResourceInput =
  exports.ListTableMetadataOutput =
  exports.ListTableMetadataInput =
  exports.ListQueryExecutionsOutput =
  exports.ListQueryExecutionsInput =
  exports.ListPreparedStatementsOutput =
  exports.PreparedStatementSummary =
  exports.ListPreparedStatementsInput =
  exports.ListNamedQueriesOutput =
  exports.ListNamedQueriesInput =
  exports.ListEngineVersionsOutput =
  exports.ListEngineVersionsInput =
  exports.ListDataCatalogsOutput =
  exports.DataCatalogSummary =
  exports.ListDataCatalogsInput =
  exports.ListDatabasesOutput =
  exports.ListDatabasesInput =
  exports.GetWorkGroupOutput =
  exports.WorkGroup =
  exports.WorkGroupState =
  exports.GetWorkGroupInput =
  exports.GetTableMetadataOutput =
  exports.TableMetadata =
  exports.Column =
  exports.GetTableMetadataInput =
  exports.GetQueryResultsOutput =
  exports.ResultSet =
  exports.Row =
  exports.Datum =
  exports.ResultSetMetadata =
  exports.ColumnInfo =
  exports.ColumnNullable =
  exports.GetQueryResultsInput =
  exports.GetQueryExecutionOutput =
  exports.GetQueryExecutionInput =
  exports.GetPreparedStatementOutput =
    void 0;
exports.UpdateWorkGroupOutput =
  exports.UpdateWorkGroupInput =
  exports.WorkGroupConfigurationUpdates =
  exports.ResultConfigurationUpdates =
  exports.UpdatePreparedStatementOutput =
  exports.UpdatePreparedStatementInput =
  exports.UpdateDataCatalogOutput =
  exports.UpdateDataCatalogInput =
    void 0;
var BatchGetNamedQueryInput;
(function (BatchGetNamedQueryInput) {
  /**
   * @internal
   */
  BatchGetNamedQueryInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchGetNamedQueryInput = exports.BatchGetNamedQueryInput || (exports.BatchGetNamedQueryInput = {})));
var NamedQuery;
(function (NamedQuery) {
  /**
   * @internal
   */
  NamedQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NamedQuery = exports.NamedQuery || (exports.NamedQuery = {})));
var UnprocessedNamedQueryId;
(function (UnprocessedNamedQueryId) {
  /**
   * @internal
   */
  UnprocessedNamedQueryId.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnprocessedNamedQueryId = exports.UnprocessedNamedQueryId || (exports.UnprocessedNamedQueryId = {})));
var BatchGetNamedQueryOutput;
(function (BatchGetNamedQueryOutput) {
  /**
   * @internal
   */
  BatchGetNamedQueryOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchGetNamedQueryOutput = exports.BatchGetNamedQueryOutput || (exports.BatchGetNamedQueryOutput = {})));
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {})));
var BatchGetQueryExecutionInput;
(function (BatchGetQueryExecutionInput) {
  /**
   * @internal
   */
  BatchGetQueryExecutionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchGetQueryExecutionInput = exports.BatchGetQueryExecutionInput || (exports.BatchGetQueryExecutionInput = {})));
var EngineVersion;
(function (EngineVersion) {
  /**
   * @internal
   */
  EngineVersion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EngineVersion = exports.EngineVersion || (exports.EngineVersion = {})));
var QueryExecutionContext;
(function (QueryExecutionContext) {
  /**
   * @internal
   */
  QueryExecutionContext.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryExecutionContext = exports.QueryExecutionContext || (exports.QueryExecutionContext = {})));
var EncryptionOption;
(function (EncryptionOption) {
  EncryptionOption["CSE_KMS"] = "CSE_KMS";
  EncryptionOption["SSE_KMS"] = "SSE_KMS";
  EncryptionOption["SSE_S3"] = "SSE_S3";
})((EncryptionOption = exports.EncryptionOption || (exports.EncryptionOption = {})));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
  /**
   * @internal
   */
  EncryptionConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {})));
var ResultConfiguration;
(function (ResultConfiguration) {
  /**
   * @internal
   */
  ResultConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResultConfiguration = exports.ResultConfiguration || (exports.ResultConfiguration = {})));
var StatementType;
(function (StatementType) {
  StatementType["DDL"] = "DDL";
  StatementType["DML"] = "DML";
  StatementType["UTILITY"] = "UTILITY";
})((StatementType = exports.StatementType || (exports.StatementType = {})));
var QueryExecutionStatistics;
(function (QueryExecutionStatistics) {
  /**
   * @internal
   */
  QueryExecutionStatistics.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryExecutionStatistics = exports.QueryExecutionStatistics || (exports.QueryExecutionStatistics = {})));
var QueryExecutionState;
(function (QueryExecutionState) {
  QueryExecutionState["CANCELLED"] = "CANCELLED";
  QueryExecutionState["FAILED"] = "FAILED";
  QueryExecutionState["QUEUED"] = "QUEUED";
  QueryExecutionState["RUNNING"] = "RUNNING";
  QueryExecutionState["SUCCEEDED"] = "SUCCEEDED";
})((QueryExecutionState = exports.QueryExecutionState || (exports.QueryExecutionState = {})));
var QueryExecutionStatus;
(function (QueryExecutionStatus) {
  /**
   * @internal
   */
  QueryExecutionStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryExecutionStatus = exports.QueryExecutionStatus || (exports.QueryExecutionStatus = {})));
var QueryExecution;
(function (QueryExecution) {
  /**
   * @internal
   */
  QueryExecution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryExecution = exports.QueryExecution || (exports.QueryExecution = {})));
var UnprocessedQueryExecutionId;
(function (UnprocessedQueryExecutionId) {
  /**
   * @internal
   */
  UnprocessedQueryExecutionId.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnprocessedQueryExecutionId = exports.UnprocessedQueryExecutionId || (exports.UnprocessedQueryExecutionId = {})));
var BatchGetQueryExecutionOutput;
(function (BatchGetQueryExecutionOutput) {
  /**
   * @internal
   */
  BatchGetQueryExecutionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchGetQueryExecutionOutput = exports.BatchGetQueryExecutionOutput || (exports.BatchGetQueryExecutionOutput = {}))
);
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var DataCatalogType;
(function (DataCatalogType) {
  DataCatalogType["GLUE"] = "GLUE";
  DataCatalogType["HIVE"] = "HIVE";
  DataCatalogType["LAMBDA"] = "LAMBDA";
})((DataCatalogType = exports.DataCatalogType || (exports.DataCatalogType = {})));
var CreateDataCatalogInput;
(function (CreateDataCatalogInput) {
  /**
   * @internal
   */
  CreateDataCatalogInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDataCatalogInput = exports.CreateDataCatalogInput || (exports.CreateDataCatalogInput = {})));
var CreateDataCatalogOutput;
(function (CreateDataCatalogOutput) {
  /**
   * @internal
   */
  CreateDataCatalogOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDataCatalogOutput = exports.CreateDataCatalogOutput || (exports.CreateDataCatalogOutput = {})));
var CreateNamedQueryInput;
(function (CreateNamedQueryInput) {
  /**
   * @internal
   */
  CreateNamedQueryInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateNamedQueryInput = exports.CreateNamedQueryInput || (exports.CreateNamedQueryInput = {})));
var CreateNamedQueryOutput;
(function (CreateNamedQueryOutput) {
  /**
   * @internal
   */
  CreateNamedQueryOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateNamedQueryOutput = exports.CreateNamedQueryOutput || (exports.CreateNamedQueryOutput = {})));
var CreatePreparedStatementInput;
(function (CreatePreparedStatementInput) {
  /**
   * @internal
   */
  CreatePreparedStatementInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreatePreparedStatementInput = exports.CreatePreparedStatementInput || (exports.CreatePreparedStatementInput = {}))
);
var CreatePreparedStatementOutput;
(function (CreatePreparedStatementOutput) {
  /**
   * @internal
   */
  CreatePreparedStatementOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreatePreparedStatementOutput =
    exports.CreatePreparedStatementOutput || (exports.CreatePreparedStatementOutput = {}))
);
var WorkGroupConfiguration;
(function (WorkGroupConfiguration) {
  /**
   * @internal
   */
  WorkGroupConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkGroupConfiguration = exports.WorkGroupConfiguration || (exports.WorkGroupConfiguration = {})));
var CreateWorkGroupInput;
(function (CreateWorkGroupInput) {
  /**
   * @internal
   */
  CreateWorkGroupInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWorkGroupInput = exports.CreateWorkGroupInput || (exports.CreateWorkGroupInput = {})));
var CreateWorkGroupOutput;
(function (CreateWorkGroupOutput) {
  /**
   * @internal
   */
  CreateWorkGroupOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWorkGroupOutput = exports.CreateWorkGroupOutput || (exports.CreateWorkGroupOutput = {})));
var DeleteDataCatalogInput;
(function (DeleteDataCatalogInput) {
  /**
   * @internal
   */
  DeleteDataCatalogInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDataCatalogInput = exports.DeleteDataCatalogInput || (exports.DeleteDataCatalogInput = {})));
var DeleteDataCatalogOutput;
(function (DeleteDataCatalogOutput) {
  /**
   * @internal
   */
  DeleteDataCatalogOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDataCatalogOutput = exports.DeleteDataCatalogOutput || (exports.DeleteDataCatalogOutput = {})));
var DeleteNamedQueryInput;
(function (DeleteNamedQueryInput) {
  /**
   * @internal
   */
  DeleteNamedQueryInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteNamedQueryInput = exports.DeleteNamedQueryInput || (exports.DeleteNamedQueryInput = {})));
var DeleteNamedQueryOutput;
(function (DeleteNamedQueryOutput) {
  /**
   * @internal
   */
  DeleteNamedQueryOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteNamedQueryOutput = exports.DeleteNamedQueryOutput || (exports.DeleteNamedQueryOutput = {})));
var DeletePreparedStatementInput;
(function (DeletePreparedStatementInput) {
  /**
   * @internal
   */
  DeletePreparedStatementInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeletePreparedStatementInput = exports.DeletePreparedStatementInput || (exports.DeletePreparedStatementInput = {}))
);
var DeletePreparedStatementOutput;
(function (DeletePreparedStatementOutput) {
  /**
   * @internal
   */
  DeletePreparedStatementOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeletePreparedStatementOutput =
    exports.DeletePreparedStatementOutput || (exports.DeletePreparedStatementOutput = {}))
);
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DeleteWorkGroupInput;
(function (DeleteWorkGroupInput) {
  /**
   * @internal
   */
  DeleteWorkGroupInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWorkGroupInput = exports.DeleteWorkGroupInput || (exports.DeleteWorkGroupInput = {})));
var DeleteWorkGroupOutput;
(function (DeleteWorkGroupOutput) {
  /**
   * @internal
   */
  DeleteWorkGroupOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWorkGroupOutput = exports.DeleteWorkGroupOutput || (exports.DeleteWorkGroupOutput = {})));
var GetDatabaseInput;
(function (GetDatabaseInput) {
  /**
   * @internal
   */
  GetDatabaseInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDatabaseInput = exports.GetDatabaseInput || (exports.GetDatabaseInput = {})));
var Database;
(function (Database) {
  /**
   * @internal
   */
  Database.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Database = exports.Database || (exports.Database = {})));
var GetDatabaseOutput;
(function (GetDatabaseOutput) {
  /**
   * @internal
   */
  GetDatabaseOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDatabaseOutput = exports.GetDatabaseOutput || (exports.GetDatabaseOutput = {})));
var MetadataException;
(function (MetadataException) {
  /**
   * @internal
   */
  MetadataException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MetadataException = exports.MetadataException || (exports.MetadataException = {})));
var GetDataCatalogInput;
(function (GetDataCatalogInput) {
  /**
   * @internal
   */
  GetDataCatalogInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDataCatalogInput = exports.GetDataCatalogInput || (exports.GetDataCatalogInput = {})));
var DataCatalog;
(function (DataCatalog) {
  /**
   * @internal
   */
  DataCatalog.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DataCatalog = exports.DataCatalog || (exports.DataCatalog = {})));
var GetDataCatalogOutput;
(function (GetDataCatalogOutput) {
  /**
   * @internal
   */
  GetDataCatalogOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDataCatalogOutput = exports.GetDataCatalogOutput || (exports.GetDataCatalogOutput = {})));
var GetNamedQueryInput;
(function (GetNamedQueryInput) {
  /**
   * @internal
   */
  GetNamedQueryInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetNamedQueryInput = exports.GetNamedQueryInput || (exports.GetNamedQueryInput = {})));
var GetNamedQueryOutput;
(function (GetNamedQueryOutput) {
  /**
   * @internal
   */
  GetNamedQueryOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetNamedQueryOutput = exports.GetNamedQueryOutput || (exports.GetNamedQueryOutput = {})));
var GetPreparedStatementInput;
(function (GetPreparedStatementInput) {
  /**
   * @internal
   */
  GetPreparedStatementInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPreparedStatementInput = exports.GetPreparedStatementInput || (exports.GetPreparedStatementInput = {})));
var PreparedStatement;
(function (PreparedStatement) {
  /**
   * @internal
   */
  PreparedStatement.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PreparedStatement = exports.PreparedStatement || (exports.PreparedStatement = {})));
var GetPreparedStatementOutput;
(function (GetPreparedStatementOutput) {
  /**
   * @internal
   */
  GetPreparedStatementOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPreparedStatementOutput = exports.GetPreparedStatementOutput || (exports.GetPreparedStatementOutput = {})));
var GetQueryExecutionInput;
(function (GetQueryExecutionInput) {
  /**
   * @internal
   */
  GetQueryExecutionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQueryExecutionInput = exports.GetQueryExecutionInput || (exports.GetQueryExecutionInput = {})));
var GetQueryExecutionOutput;
(function (GetQueryExecutionOutput) {
  /**
   * @internal
   */
  GetQueryExecutionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQueryExecutionOutput = exports.GetQueryExecutionOutput || (exports.GetQueryExecutionOutput = {})));
var GetQueryResultsInput;
(function (GetQueryResultsInput) {
  /**
   * @internal
   */
  GetQueryResultsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQueryResultsInput = exports.GetQueryResultsInput || (exports.GetQueryResultsInput = {})));
var ColumnNullable;
(function (ColumnNullable) {
  ColumnNullable["NOT_NULL"] = "NOT_NULL";
  ColumnNullable["NULLABLE"] = "NULLABLE";
  ColumnNullable["UNKNOWN"] = "UNKNOWN";
})((ColumnNullable = exports.ColumnNullable || (exports.ColumnNullable = {})));
var ColumnInfo;
(function (ColumnInfo) {
  /**
   * @internal
   */
  ColumnInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ColumnInfo = exports.ColumnInfo || (exports.ColumnInfo = {})));
var ResultSetMetadata;
(function (ResultSetMetadata) {
  /**
   * @internal
   */
  ResultSetMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResultSetMetadata = exports.ResultSetMetadata || (exports.ResultSetMetadata = {})));
var Datum;
(function (Datum) {
  /**
   * @internal
   */
  Datum.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Datum = exports.Datum || (exports.Datum = {})));
var Row;
(function (Row) {
  /**
   * @internal
   */
  Row.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Row = exports.Row || (exports.Row = {})));
var ResultSet;
(function (ResultSet) {
  /**
   * @internal
   */
  ResultSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResultSet = exports.ResultSet || (exports.ResultSet = {})));
var GetQueryResultsOutput;
(function (GetQueryResultsOutput) {
  /**
   * @internal
   */
  GetQueryResultsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQueryResultsOutput = exports.GetQueryResultsOutput || (exports.GetQueryResultsOutput = {})));
var GetTableMetadataInput;
(function (GetTableMetadataInput) {
  /**
   * @internal
   */
  GetTableMetadataInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTableMetadataInput = exports.GetTableMetadataInput || (exports.GetTableMetadataInput = {})));
var Column;
(function (Column) {
  /**
   * @internal
   */
  Column.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Column = exports.Column || (exports.Column = {})));
var TableMetadata;
(function (TableMetadata) {
  /**
   * @internal
   */
  TableMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TableMetadata = exports.TableMetadata || (exports.TableMetadata = {})));
var GetTableMetadataOutput;
(function (GetTableMetadataOutput) {
  /**
   * @internal
   */
  GetTableMetadataOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTableMetadataOutput = exports.GetTableMetadataOutput || (exports.GetTableMetadataOutput = {})));
var GetWorkGroupInput;
(function (GetWorkGroupInput) {
  /**
   * @internal
   */
  GetWorkGroupInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetWorkGroupInput = exports.GetWorkGroupInput || (exports.GetWorkGroupInput = {})));
var WorkGroupState;
(function (WorkGroupState) {
  WorkGroupState["DISABLED"] = "DISABLED";
  WorkGroupState["ENABLED"] = "ENABLED";
})((WorkGroupState = exports.WorkGroupState || (exports.WorkGroupState = {})));
var WorkGroup;
(function (WorkGroup) {
  /**
   * @internal
   */
  WorkGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkGroup = exports.WorkGroup || (exports.WorkGroup = {})));
var GetWorkGroupOutput;
(function (GetWorkGroupOutput) {
  /**
   * @internal
   */
  GetWorkGroupOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetWorkGroupOutput = exports.GetWorkGroupOutput || (exports.GetWorkGroupOutput = {})));
var ListDatabasesInput;
(function (ListDatabasesInput) {
  /**
   * @internal
   */
  ListDatabasesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDatabasesInput = exports.ListDatabasesInput || (exports.ListDatabasesInput = {})));
var ListDatabasesOutput;
(function (ListDatabasesOutput) {
  /**
   * @internal
   */
  ListDatabasesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDatabasesOutput = exports.ListDatabasesOutput || (exports.ListDatabasesOutput = {})));
var ListDataCatalogsInput;
(function (ListDataCatalogsInput) {
  /**
   * @internal
   */
  ListDataCatalogsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDataCatalogsInput = exports.ListDataCatalogsInput || (exports.ListDataCatalogsInput = {})));
var DataCatalogSummary;
(function (DataCatalogSummary) {
  /**
   * @internal
   */
  DataCatalogSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DataCatalogSummary = exports.DataCatalogSummary || (exports.DataCatalogSummary = {})));
var ListDataCatalogsOutput;
(function (ListDataCatalogsOutput) {
  /**
   * @internal
   */
  ListDataCatalogsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDataCatalogsOutput = exports.ListDataCatalogsOutput || (exports.ListDataCatalogsOutput = {})));
var ListEngineVersionsInput;
(function (ListEngineVersionsInput) {
  /**
   * @internal
   */
  ListEngineVersionsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListEngineVersionsInput = exports.ListEngineVersionsInput || (exports.ListEngineVersionsInput = {})));
var ListEngineVersionsOutput;
(function (ListEngineVersionsOutput) {
  /**
   * @internal
   */
  ListEngineVersionsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListEngineVersionsOutput = exports.ListEngineVersionsOutput || (exports.ListEngineVersionsOutput = {})));
var ListNamedQueriesInput;
(function (ListNamedQueriesInput) {
  /**
   * @internal
   */
  ListNamedQueriesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListNamedQueriesInput = exports.ListNamedQueriesInput || (exports.ListNamedQueriesInput = {})));
var ListNamedQueriesOutput;
(function (ListNamedQueriesOutput) {
  /**
   * @internal
   */
  ListNamedQueriesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListNamedQueriesOutput = exports.ListNamedQueriesOutput || (exports.ListNamedQueriesOutput = {})));
var ListPreparedStatementsInput;
(function (ListPreparedStatementsInput) {
  /**
   * @internal
   */
  ListPreparedStatementsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPreparedStatementsInput = exports.ListPreparedStatementsInput || (exports.ListPreparedStatementsInput = {})));
var PreparedStatementSummary;
(function (PreparedStatementSummary) {
  /**
   * @internal
   */
  PreparedStatementSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PreparedStatementSummary = exports.PreparedStatementSummary || (exports.PreparedStatementSummary = {})));
var ListPreparedStatementsOutput;
(function (ListPreparedStatementsOutput) {
  /**
   * @internal
   */
  ListPreparedStatementsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPreparedStatementsOutput = exports.ListPreparedStatementsOutput || (exports.ListPreparedStatementsOutput = {}))
);
var ListQueryExecutionsInput;
(function (ListQueryExecutionsInput) {
  /**
   * @internal
   */
  ListQueryExecutionsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListQueryExecutionsInput = exports.ListQueryExecutionsInput || (exports.ListQueryExecutionsInput = {})));
var ListQueryExecutionsOutput;
(function (ListQueryExecutionsOutput) {
  /**
   * @internal
   */
  ListQueryExecutionsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListQueryExecutionsOutput = exports.ListQueryExecutionsOutput || (exports.ListQueryExecutionsOutput = {})));
var ListTableMetadataInput;
(function (ListTableMetadataInput) {
  /**
   * @internal
   */
  ListTableMetadataInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTableMetadataInput = exports.ListTableMetadataInput || (exports.ListTableMetadataInput = {})));
var ListTableMetadataOutput;
(function (ListTableMetadataOutput) {
  /**
   * @internal
   */
  ListTableMetadataOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTableMetadataOutput = exports.ListTableMetadataOutput || (exports.ListTableMetadataOutput = {})));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
  /**
   * @internal
   */
  ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {})));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
  /**
   * @internal
   */
  ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {})));
var ListWorkGroupsInput;
(function (ListWorkGroupsInput) {
  /**
   * @internal
   */
  ListWorkGroupsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWorkGroupsInput = exports.ListWorkGroupsInput || (exports.ListWorkGroupsInput = {})));
var WorkGroupSummary;
(function (WorkGroupSummary) {
  /**
   * @internal
   */
  WorkGroupSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkGroupSummary = exports.WorkGroupSummary || (exports.WorkGroupSummary = {})));
var ListWorkGroupsOutput;
(function (ListWorkGroupsOutput) {
  /**
   * @internal
   */
  ListWorkGroupsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWorkGroupsOutput = exports.ListWorkGroupsOutput || (exports.ListWorkGroupsOutput = {})));
var StartQueryExecutionInput;
(function (StartQueryExecutionInput) {
  /**
   * @internal
   */
  StartQueryExecutionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartQueryExecutionInput = exports.StartQueryExecutionInput || (exports.StartQueryExecutionInput = {})));
var StartQueryExecutionOutput;
(function (StartQueryExecutionOutput) {
  /**
   * @internal
   */
  StartQueryExecutionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartQueryExecutionOutput = exports.StartQueryExecutionOutput || (exports.StartQueryExecutionOutput = {})));
var ThrottleReason;
(function (ThrottleReason) {
  ThrottleReason["CONCURRENT_QUERY_LIMIT_EXCEEDED"] = "CONCURRENT_QUERY_LIMIT_EXCEEDED";
})((ThrottleReason = exports.ThrottleReason || (exports.ThrottleReason = {})));
var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {})));
var StopQueryExecutionInput;
(function (StopQueryExecutionInput) {
  /**
   * @internal
   */
  StopQueryExecutionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopQueryExecutionInput = exports.StopQueryExecutionInput || (exports.StopQueryExecutionInput = {})));
var StopQueryExecutionOutput;
(function (StopQueryExecutionOutput) {
  /**
   * @internal
   */
  StopQueryExecutionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopQueryExecutionOutput = exports.StopQueryExecutionOutput || (exports.StopQueryExecutionOutput = {})));
var TagResourceInput;
(function (TagResourceInput) {
  /**
   * @internal
   */
  TagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {})));
var TagResourceOutput;
(function (TagResourceOutput) {
  /**
   * @internal
   */
  TagResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {})));
var UntagResourceInput;
(function (UntagResourceInput) {
  /**
   * @internal
   */
  UntagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {})));
var UntagResourceOutput;
(function (UntagResourceOutput) {
  /**
   * @internal
   */
  UntagResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {})));
var UpdateDataCatalogInput;
(function (UpdateDataCatalogInput) {
  /**
   * @internal
   */
  UpdateDataCatalogInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDataCatalogInput = exports.UpdateDataCatalogInput || (exports.UpdateDataCatalogInput = {})));
var UpdateDataCatalogOutput;
(function (UpdateDataCatalogOutput) {
  /**
   * @internal
   */
  UpdateDataCatalogOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDataCatalogOutput = exports.UpdateDataCatalogOutput || (exports.UpdateDataCatalogOutput = {})));
var UpdatePreparedStatementInput;
(function (UpdatePreparedStatementInput) {
  /**
   * @internal
   */
  UpdatePreparedStatementInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdatePreparedStatementInput = exports.UpdatePreparedStatementInput || (exports.UpdatePreparedStatementInput = {}))
);
var UpdatePreparedStatementOutput;
(function (UpdatePreparedStatementOutput) {
  /**
   * @internal
   */
  UpdatePreparedStatementOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdatePreparedStatementOutput =
    exports.UpdatePreparedStatementOutput || (exports.UpdatePreparedStatementOutput = {}))
);
var ResultConfigurationUpdates;
(function (ResultConfigurationUpdates) {
  /**
   * @internal
   */
  ResultConfigurationUpdates.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResultConfigurationUpdates = exports.ResultConfigurationUpdates || (exports.ResultConfigurationUpdates = {})));
var WorkGroupConfigurationUpdates;
(function (WorkGroupConfigurationUpdates) {
  /**
   * @internal
   */
  WorkGroupConfigurationUpdates.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (WorkGroupConfigurationUpdates =
    exports.WorkGroupConfigurationUpdates || (exports.WorkGroupConfigurationUpdates = {}))
);
var UpdateWorkGroupInput;
(function (UpdateWorkGroupInput) {
  /**
   * @internal
   */
  UpdateWorkGroupInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateWorkGroupInput = exports.UpdateWorkGroupInput || (exports.UpdateWorkGroupInput = {})));
var UpdateWorkGroupOutput;
(function (UpdateWorkGroupOutput) {
  /**
   * @internal
   */
  UpdateWorkGroupOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateWorkGroupOutput = exports.UpdateWorkGroupOutput || (exports.UpdateWorkGroupOutput = {})));
//# sourceMappingURL=models_0.js.map
