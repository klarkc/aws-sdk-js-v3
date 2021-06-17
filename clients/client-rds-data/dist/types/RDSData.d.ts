import { RDSDataClient } from "./RDSDataClient";
import { BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput } from "./commands/BatchExecuteStatementCommand";
import { BeginTransactionCommandInput, BeginTransactionCommandOutput } from "./commands/BeginTransactionCommand";
import { CommitTransactionCommandInput, CommitTransactionCommandOutput } from "./commands/CommitTransactionCommand";
import { ExecuteSqlCommandInput, ExecuteSqlCommandOutput } from "./commands/ExecuteSqlCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand";
import { RollbackTransactionCommandInput, RollbackTransactionCommandOutput } from "./commands/RollbackTransactionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora
 *             Serverless DB cluster. To run these statements, you work with the Data Service
 *             API.</p>
 *         <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora
 *                 Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare class RDSData extends RDSDataClient {
    /**
     * <p>Runs a batch SQL statement over an array of data.</p>
     *         <p>You can run bulk update and insert operations for multiple records using a DML
     *             statement with different parameter sets. Bulk operations can provide a significant
     *             performance improvement over individual insert and update operations.</p>
     *         <important>
     *             <p>If a call isn't part of a transaction because it doesn't include the
     *                     <code>transactionID</code> parameter, changes that result from the call are
     *                 committed automatically.</p>
     *         </important>
     */
    batchExecuteStatement(args: BatchExecuteStatementCommandInput, options?: __HttpHandlerOptions): Promise<BatchExecuteStatementCommandOutput>;
    batchExecuteStatement(args: BatchExecuteStatementCommandInput, cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void): void;
    batchExecuteStatement(args: BatchExecuteStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void): void;
    /**
     * <p>Starts a SQL transaction.</p>
     *
     *         <important>
     *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
     *                 rolled back automatically after 24 hours.</p>
     *             <p>A transaction times out if no calls use its transaction ID in three minutes.
     *                 If a transaction times out before it's committed, it's rolled back
     *                 automatically.</p>
     *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
     *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
     *                 <code>continueAfterTimeout</code> enabled.</p>
     *         </important>
     */
    beginTransaction(args: BeginTransactionCommandInput, options?: __HttpHandlerOptions): Promise<BeginTransactionCommandOutput>;
    beginTransaction(args: BeginTransactionCommandInput, cb: (err: any, data?: BeginTransactionCommandOutput) => void): void;
    beginTransaction(args: BeginTransactionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BeginTransactionCommandOutput) => void): void;
    /**
     * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
     *             commits the changes.</p>
     */
    commitTransaction(args: CommitTransactionCommandInput, options?: __HttpHandlerOptions): Promise<CommitTransactionCommandOutput>;
    commitTransaction(args: CommitTransactionCommandInput, cb: (err: any, data?: CommitTransactionCommandOutput) => void): void;
    commitTransaction(args: CommitTransactionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CommitTransactionCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Runs one or more SQL statements.</p>
     *         <important>
     *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
     *                     <code>ExecuteStatement</code> operation.</p>
     *         </important>
     */
    executeSql(args: ExecuteSqlCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteSqlCommandOutput>;
    executeSql(args: ExecuteSqlCommandInput, cb: (err: any, data?: ExecuteSqlCommandOutput) => void): void;
    executeSql(args: ExecuteSqlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecuteSqlCommandOutput) => void): void;
    /**
     * <p>Runs a SQL statement against a database.</p>
     *         <important>
     *             <p>If a call isn't part of a transaction because it doesn't include the
     *                     <code>transactionID</code> parameter, changes that result from the call are
     *                 committed automatically.</p>
     *         </important>
     *         <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
     */
    executeStatement(args: ExecuteStatementCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteStatementCommandOutput>;
    executeStatement(args: ExecuteStatementCommandInput, cb: (err: any, data?: ExecuteStatementCommandOutput) => void): void;
    executeStatement(args: ExecuteStatementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecuteStatementCommandOutput) => void): void;
    /**
     * <p>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</p>
     */
    rollbackTransaction(args: RollbackTransactionCommandInput, options?: __HttpHandlerOptions): Promise<RollbackTransactionCommandOutput>;
    rollbackTransaction(args: RollbackTransactionCommandInput, cb: (err: any, data?: RollbackTransactionCommandOutput) => void): void;
    rollbackTransaction(args: RollbackTransactionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RollbackTransactionCommandOutput) => void): void;
}
