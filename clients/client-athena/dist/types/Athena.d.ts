import { AthenaClient } from "./AthenaClient";
import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "./commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "./commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "./commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "./commands/GetDataCatalogCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "./commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "./commands/ListDataCatalogsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "./commands/ListEngineVersionsCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "./commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "./commands/UpdateDataCatalogCommand";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to
 *             analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and
 *             run ad-hoc queries and get results in seconds. Athena is serverless, so there is no
 *             infrastructure to set up or manage. You pay only for the queries you run. Athena scales
 *             automatically—executing queries in parallel—so results are fast, even with large
 *             datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon
 *                 Athena</a> in the <i>Amazon Athena User Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or
 *             later with the Amazon Athena API. Earlier version drivers do not support the API. For
 *             more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                 Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 */
export declare class Athena extends AthenaClient {
  /**
   * <p>Returns the details of a single named query or a list of up to 50 queries, which you
   *             provide as an array of query ID strings. Requires you to have access to the workgroup in
   *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
   *             list of named query IDs in the specified workgroup. If information could not be
   *             retrieved for a submitted query ID, information about the query ID submitted is listed
   *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
   *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
   *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
   *             query execution IDs.</p>
   */
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetNamedQueryCommandOutput>;
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;
  /**
   * <p>Returns the details of a single query execution or a list of up to 50 query
   *             executions, which you provide as an array of query execution ID strings. Requires you to
   *             have access to the workgroup in which the queries ran. To get a list of query execution
   *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
   *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
   *             about named queries.</p>
   */
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetQueryExecutionCommandOutput>;
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;
  /**
   * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
   *             created are visible to all users of the same AWS account.</p>
   */
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataCatalogCommandOutput>;
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;
  /**
   * <p>Creates a named query in the specified workgroup. Requires that you have access to the
   *             workgroup.</p>
   *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamedQueryCommandOutput>;
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;
  /**
   * <p>Creates a prepared statement for use with SQL queries in Athena.</p>
   */
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePreparedStatementCommandOutput>;
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;
  /**
   * <p>Creates a workgroup with the specified name.</p>
   */
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkGroupCommandOutput>;
  createWorkGroup(args: CreateWorkGroupCommandInput, cb: (err: any, data?: CreateWorkGroupCommandOutput) => void): void;
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a data catalog.</p>
   */
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataCatalogCommandOutput>;
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the named query if you have access to the workgroup in which the query was
   *             saved.</p>
   *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamedQueryCommandOutput>;
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the prepared statement with the specified name from the specified
   *             workgroup.</p>
   */
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePreparedStatementCommandOutput>;
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the workgroup with the specified name. The primary workgroup cannot be
   *             deleted.</p>
   */
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkGroupCommandOutput>;
  deleteWorkGroup(args: DeleteWorkGroupCommandInput, cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void): void;
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): void;
  /**
   * <p>Returns a database object for the specified database and data catalog.</p>
   */
  getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  /**
   * <p>Returns the specified data catalog.</p>
   */
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogCommandOutput>;
  getDataCatalog(args: GetDataCatalogCommandInput, cb: (err: any, data?: GetDataCatalogCommandOutput) => void): void;
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;
  /**
   * <p>Returns information about a single query. Requires that you have access to the
   *             workgroup in which the query was saved.</p>
   */
  getNamedQuery(args: GetNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<GetNamedQueryCommandOutput>;
  getNamedQuery(args: GetNamedQueryCommandInput, cb: (err: any, data?: GetNamedQueryCommandOutput) => void): void;
  getNamedQuery(
    args: GetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the prepared statement with the specified name from the specified
   *             workgroup.</p>
   */
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPreparedStatementCommandOutput>;
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;
  /**
   * <p>Returns information about a single execution of a query if you have access to the
   *             workgroup in which the query ran. Each time a query executes, information about the
   *             query execution is saved with a unique ID.</p>
   */
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryExecutionCommandOutput>;
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;
  /**
   * <p>Streams the results of a single query execution specified by
   *                 <code>QueryExecutionId</code> from the Athena query results location in Amazon S3.
   *             For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon
   *                 Athena User Guide</i>. This request does not execute the query but returns
   *             results. Use <a>StartQueryExecution</a> to run a query.</p>
   *         <p>To stream query results successfully, the IAM principal with permission to call
   *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
   *                 <code>GetObject</code> action for the Athena query results location.</p>
   *         <important>
   *             <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for
   *                 the query results location are able to retrieve query results from Amazon S3 even if
   *                 permission to the <code>GetQueryResults</code> action is denied. To restrict user or
   *                 role access, ensure that Amazon S3 permissions to the Athena query location are
   *                 denied.</p>
   *         </important>
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(args: GetQueryResultsCommandInput, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  /**
   * <p>Returns table metadata for the specified catalog, database, and table.</p>
   */
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMetadataCommandOutput>;
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;
  /**
   * <p>Returns information about the workgroup with the specified name.</p>
   */
  getWorkGroup(args: GetWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkGroupCommandOutput>;
  getWorkGroup(args: GetWorkGroupCommandInput, cb: (err: any, data?: GetWorkGroupCommandOutput) => void): void;
  getWorkGroup(
    args: GetWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkGroupCommandOutput) => void
  ): void;
  /**
   * <p>Lists the databases in the specified data catalog.</p>
   */
  listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the data catalogs in the current AWS account.</p>
   */
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataCatalogsCommandOutput>;
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of engine versions that are available to choose from, including the
   *             Auto option.</p>
   */
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngineVersionsCommandOutput>;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  /**
   * <p>Provides a list of available query IDs only for queries saved in the specified
   *             workgroup. Requires that you have access to the specified workgroup. If a workgroup is
   *             not specified, lists the saved queries for the primary workgroup.</p>
   *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamedQueriesCommandOutput>;
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the prepared statements in the specfied workgroup.</p>
   */
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPreparedStatementsCommandOutput>;
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;
  /**
   * <p>Provides a list of available query execution IDs for the queries in the specified
   *             workgroup. If a workgroup is not specified, returns a list of query execution IDs for
   *             the primary workgroup. Requires you to have access to the workgroup in which the queries
   *             ran.</p>
   *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueryExecutionsCommandOutput>;
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the metadata for the tables in the specified data catalog database.</p>
   */
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableMetadataCommandOutput>;
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags associated with an Athena workgroup or data catalog resource.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Lists available workgroups for the account.</p>
   */
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkGroupsCommandOutput>;
  listWorkGroups(args: ListWorkGroupsCommandInput, cb: (err: any, data?: ListWorkGroupsCommandOutput) => void): void;
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): void;
  /**
   * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
   *             have access to the workgroup in which the query ran. Running queries against an external
   *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
   *             samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryExecutionCommandOutput>;
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;
  /**
   * <p>Stops a query execution. Requires you to have access to the workgroup in which the
   *             query ran.</p>
   *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopQueryExecutionCommandOutput>;
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;
  /**
   * <p>Adds one or more tags to an Athena resource. A tag is a label that you assign to a
   *             resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of
   *             a key and an optional value, both of which you define. For example, you can use tags to
   *             categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a
   *             consistent set of tag keys to make it easier to search and filter workgroups or data
   *             catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode
   *             characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use
   *             letters and numbers representable in UTF-8, and the following characters: + - = . _ : /
   *             @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you
   *             specify more than one tag, separate them by commas.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Removes one or more tags from a data catalog or workgroup resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates the data catalog that has the specified name.</p>
   */
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataCatalogCommandOutput>;
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;
  /**
   * <p>Updates a prepared statement.</p>
   */
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePreparedStatementCommandOutput>;
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;
  /**
   * <p>Updates the workgroup with the specified name. The workgroup's name cannot be
   *             changed.</p>
   */
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkGroupCommandOutput>;
  updateWorkGroup(args: UpdateWorkGroupCommandInput, cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void): void;
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;
}
