import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBInstanceReadReplicaMessage, CreateDBInstanceReadReplicaResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBInstanceReadReplicaCommandInput extends CreateDBInstanceReadReplicaMessage {
}
export interface CreateDBInstanceReadReplicaCommandOutput extends CreateDBInstanceReadReplicaResult, __MetadataBearer {
}
/**
 * <p>Creates a new DB instance that acts as a read replica for an existing source DB
 *             instance. You can create a read replica for a DB instance running MySQL, MariaDB,
 *             Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read
 *                 Replicas</a> in the <i>Amazon RDS User Guide</i>. </p>
 *
 *          <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code>
 *             action to create a DB instance for an Aurora DB cluster.</p>
 *
 *          <p>All read replica DB instances are created with backups disabled. All other DB
 *             instance attributes (including DB security groups and DB parameter groups) are inherited
 *             from the source DB instance, except as specified.</p>
 *
 *          <important>
 *             <p>Your source DB instance must have backup retention enabled.
 *          </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBInstanceReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBInstanceReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceReadReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBInstanceReadReplicaCommand extends $Command<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBInstanceReadReplicaCommandInput;
    constructor(input: CreateDBInstanceReadReplicaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput>;
    private serialize;
    private deserialize;
}
