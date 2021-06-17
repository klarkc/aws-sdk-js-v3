import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromDBSnapshotMessage, RestoreDBInstanceFromDBSnapshotResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBInstanceFromDBSnapshotCommandInput extends RestoreDBInstanceFromDBSnapshotMessage {
}
export interface RestoreDBInstanceFromDBSnapshotCommandOutput extends RestoreDBInstanceFromDBSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most
 *             of the source's original configuration, including the default security group and DB parameter group. By default, the new DB
 *             instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group
 *             associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p>
 *          <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance
 *             before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you
 *             have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as
 *             the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original
 *             DB instance with the DB instance created from the snapshot.</p>
 *          <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
 *       must be the ARN of the shared DB snapshot.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceFromDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBInstanceFromDBSnapshotCommand extends $Command<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBInstanceFromDBSnapshotCommandInput;
    constructor(input: RestoreDBInstanceFromDBSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
