import { TimestreamWriteClient } from "./TimestreamWriteClient";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput } from "./commands/DescribeDatabaseCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "./commands/DescribeTableCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import { WriteRecordsCommandInput, WriteRecordsCommandOutput } from "./commands/WriteRecordsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Timestream is a fast, scalable, fully managed time series database service that makes it easy to store and analyze trillions of time series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. Timestream is built from the ground up to effectively ingest, process, and store time series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.</p>
 */
export declare class TimestreamWrite extends TimestreamWriteClient {
    /**
     * <p>Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
     *          Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info.
     *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
     *       </p>
     */
    createDatabase(args: CreateDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatabaseCommandOutput>;
    createDatabase(args: CreateDatabaseCommandInput, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
    createDatabase(args: CreateDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
    /**
     * <p>The CreateTable operation adds a new table to an existing database in your account. In an AWS account,
     *       table names must be at least unique within each Region if they are in the same database.
     *       You may have identical table names in the same Region if the tables are in seperate databases.
     *          While creating the table, you must specify the table name, database name,
     *          and the retention properties.
     *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a>
     *          in the Timestream Developer Guide.
     *          </p>
     */
    createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
    createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
    createTable(args: CreateTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
    /**
     * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
     *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
     *          </p>
     *
     *          <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
     *       </p>
     *
     *          <p>Due to the nature of distributed retries,
     *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
     */
    deleteDatabase(args: DeleteDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatabaseCommandOutput>;
    deleteDatabase(args: DeleteDatabaseCommandInput, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
    deleteDatabase(args: DeleteDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
    /**
     * <p>Deletes a given Timestream table. This is an irreversible operation.
     *        After a Timestream database table is deleted, the time series data stored in
     *        the table cannot be recovered.
     *        </p>
     *          <p>Due to the nature of distributed retries,
     *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
     */
    deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
    deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
    deleteTable(args: DeleteTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
    /**
     * <p>Returns information about the database, including the database name, time that the database was created,
     *          and the total number of tables found within the database.
     *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
     */
    describeDatabase(args: DescribeDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatabaseCommandOutput>;
    describeDatabase(args: DescribeDatabaseCommandInput, cb: (err: any, data?: DescribeDatabaseCommandOutput) => void): void;
    describeDatabase(args: DescribeDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatabaseCommandOutput) => void): void;
    /**
     * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p>
     *          <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
     *          including the management and mapping of the service endpoints,
     *          <i>it is not recommended that you use this API unless</i>:</p>
     *          <ul>
     *             <li>
     *                <p>Your application uses a programming language that does not yet have SDK support</p>
     *             </li>
     *             <li>
     *                <p>You require better control over the client-side implementation</p>
     *             </li>
     *          </ul>
     *          <p>For detailed information on how to use DescribeEndpoints,
     *          see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
     */
    describeEndpoints(args: DescribeEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointsCommandOutput>;
    describeEndpoints(args: DescribeEndpointsCommandInput, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    describeEndpoints(args: DescribeEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    /**
     * <p>Returns information about the table, including the table name, database name,
     *       retention duration of the memory store and the magnetic store.
     *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
     *       </p>
     */
    describeTable(args: DescribeTableCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableCommandOutput>;
    describeTable(args: DescribeTableCommandInput, cb: (err: any, data?: DescribeTableCommandOutput) => void): void;
    describeTable(args: DescribeTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableCommandOutput) => void): void;
    /**
     * <p>Returns a list of your Timestream databases.
     *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
     *       </p>
     */
    listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
    listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
    listDatabases(args: ListDatabasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
    /**
     * <p>A list of tables, along with the name, status and retention properties of each table.
     *       </p>
     */
    listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
    listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
    listTables(args: ListTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
    /**
     * <p>
     * List all tags on a Timestream resource.
     * </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>
     *     Associate a set of tags with a Timestream resource. You can then activate
     *     these user-defined tags so that they appear on the Billing and Cost
     *     Management console for cost allocation tracking.
     * </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>
     *     Removes the association of tags from a Timestream resource.
     * </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>
     *     Modifies the KMS key for an existing database. While updating the database,
     *     you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>).
     *     If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins.
     *    </p>
     */
    updateDatabase(args: UpdateDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatabaseCommandOutput>;
    updateDatabase(args: UpdateDatabaseCommandInput, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
    updateDatabase(args: UpdateDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
    /**
     * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table.
     *          Note that the change in retention duration takes effect immediately.
     *          For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours,
     *          the memory store will be capable of holding 24 hours of data, but will
     *          be populated with 24 hours of data 22 hours after this change was made.
     *          Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
     *          <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
     */
    updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
    updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
    updateTable(args: UpdateTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
    /**
     * <p>The WriteRecords operation enables you to write your time series
     *       data into Timestream. You can specify a single data point or a batch
     *       of data points to be inserted into the system. Timestream offers you
     *       with a flexible schema that auto detects the column names and data types
     *       for your Timestream tables based on the dimension names and data types of
     *       the data points you specify when invoking writes into the database.
     *       Timestream support eventual consistency read semantics. This means that
     *       when you query data immediately after writing a batch of data into Timestream,
     *       the query results might not reflect the results of a recently completed write
     *       operation. The results may also include some stale data. If you repeat the
     *       query request after a short time, the results should return the latest data.
     *       Service quotas apply. For more information,
     *       see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
     *         </p>
     */
    writeRecords(args: WriteRecordsCommandInput, options?: __HttpHandlerOptions): Promise<WriteRecordsCommandOutput>;
    writeRecords(args: WriteRecordsCommandInput, cb: (err: any, data?: WriteRecordsCommandOutput) => void): void;
    writeRecords(args: WriteRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: WriteRecordsCommandOutput) => void): void;
}
