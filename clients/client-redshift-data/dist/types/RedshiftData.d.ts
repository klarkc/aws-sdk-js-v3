import { RedshiftDataClient } from "./RedshiftDataClient";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "./commands/CancelStatementCommand";
import { DescribeStatementCommandInput, DescribeStatementCommandOutput } from "./commands/DescribeStatementCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "./commands/DescribeTableCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand";
import { GetStatementResultCommandInput, GetStatementResultCommandOutput } from "./commands/GetStatementResultCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "./commands/ListStatementsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You
 *       can run individual SQL statements, which are committed if the statement succeeds. </p>
 *          <p>For more information about the Amazon Redshift Data API, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export declare class RedshiftData extends RedshiftDataClient {
    /**
     * <p>Cancels a running query. To be canceled, a query must be running. </p>
     */
    cancelStatement(args: CancelStatementCommandInput, options?: __HttpHandlerOptions): Promise<CancelStatementCommandOutput>;
    cancelStatement(args: CancelStatementCommandInput, cb: (err: any, data?: CancelStatementCommandOutput) => void): void;
    cancelStatement(args: CancelStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelStatementCommandOutput) => void): void;
    /**
     * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
     *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
     *       statement. </p>
     */
    describeStatement(args: DescribeStatementCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStatementCommandOutput>;
    describeStatement(args: DescribeStatementCommandInput, cb: (err: any, data?: DescribeStatementCommandOutput) => void): void;
    describeStatement(args: DescribeStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStatementCommandOutput) => void): void;
    /**
     * <p>Describes the detailed information about a table from metadata in the cluster. The
     *       information includes its columns.
     *       A token is returned to page through the column list.
     *       Depending on the authorization method, use one of the
     *       following combinations of request parameters: </p>
     *          <ul>
     *             <li>
     *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
     *          cluster identifier that matches the cluster in the secret. </p>
     *             </li>
     *             <li>
     *                <p>Temporary credentials - specify the cluster identifier, the database name, and the database
     *           user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is
     *           required to use this method. </p>
     *             </li>
     *          </ul>
     */
    describeTable(args: DescribeTableCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableCommandOutput>;
    describeTable(args: DescribeTableCommandInput, cb: (err: any, data?: DescribeTableCommandOutput) => void): void;
    describeTable(args: DescribeTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableCommandOutput) => void): void;
    /**
     * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition
     *       language (DDL). This statement must be a single SQL statement.
     *       Depending on the authorization
     *       method, use one of the following combinations of request parameters: </p>
     *          <ul>
     *             <li>
     *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
     *          cluster identifier that matches the cluster in the secret. </p>
     *             </li>
     *             <li>
     *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
     *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
     *           operation is required to use this method. </p>
     *             </li>
     *          </ul>
     */
    executeStatement(args: ExecuteStatementCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteStatementCommandOutput>;
    executeStatement(args: ExecuteStatementCommandInput, cb: (err: any, data?: ExecuteStatementCommandOutput) => void): void;
    executeStatement(args: ExecuteStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecuteStatementCommandOutput) => void): void;
    /**
     * <p>Fetches the temporarily cached result of an SQL statement.
     *        A token is returned to page through the statement results. </p>
     */
    getStatementResult(args: GetStatementResultCommandInput, options?: __HttpHandlerOptions): Promise<GetStatementResultCommandOutput>;
    getStatementResult(args: GetStatementResultCommandInput, cb: (err: any, data?: GetStatementResultCommandOutput) => void): void;
    getStatementResult(args: GetStatementResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStatementResultCommandOutput) => void): void;
    /**
     * <p>List the databases in a cluster.
     *       A token is returned to page through the database list.
     *       Depending on the authorization method, use one of the
     *       following combinations of request parameters: </p>
     *          <ul>
     *             <li>
     *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
     *          cluster identifier that matches the cluster in the secret. </p>
     *             </li>
     *             <li>
     *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
     *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
     *           operation is required to use this method. </p>
     *             </li>
     *          </ul>
     */
    listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
    listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
    listDatabases(args: ListDatabasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
    /**
     * <p>Lists the schemas in a database.
     *       A token is returned to page through the schema list.
     *       Depending on the authorization method, use one of the
     *       following combinations of request parameters: </p>
     *          <ul>
     *             <li>
     *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
     *          cluster identifier that matches the cluster in the secret. </p>
     *             </li>
     *             <li>
     *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
     *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
     *           operation is required to use this method. </p>
     *             </li>
     *          </ul>
     */
    listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
    listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
    listSchemas(args: ListSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
    /**
     * <p>List of SQL statements. By default, only finished statements are shown.
     *         A token is returned to page through the statement list. </p>
     */
    listStatements(args: ListStatementsCommandInput, options?: __HttpHandlerOptions): Promise<ListStatementsCommandOutput>;
    listStatements(args: ListStatementsCommandInput, cb: (err: any, data?: ListStatementsCommandOutput) => void): void;
    listStatements(args: ListStatementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStatementsCommandOutput) => void): void;
    /**
     * <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then
     *        all tables in the database are returned.
     *       A token is returned to page through the table list.
     *       Depending on the authorization method, use one of the
     *       following combinations of request parameters: </p>
     *          <ul>
     *             <li>
     *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
     *          cluster identifier that matches the cluster in the secret. </p>
     *             </li>
     *             <li>
     *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
     *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
     *           operation is required to use this method. </p>
     *             </li>
     *          </ul>
     */
    listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
    listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
    listTables(args: ListTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
}
