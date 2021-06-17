import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBInstanceCommandInput extends DeleteDBInstanceMessage {
}
export interface DeleteDBInstanceCommandOutput extends DeleteDBInstanceResult, __MetadataBearer {
}
/**
 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance.
 *           When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered.
 *           Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p>
 *          <p>
 *         If you request a final DB snapshot
 *         the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code>
 *         is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.
 *         </p>
 *          <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
 *           or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p>
 *
 *          <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following
 *       conditions are true:</p>
 *          <ul>
 *             <li>
 *                <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p>
 *             </li>
 *             <li>
 *                <p>The DB instance is the only instance in the DB cluster.</p>
 *             </li>
 *          </ul>
 *          <p>To delete a DB instance in this case, first call the
 *                 <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so
 *             it's no longer a read replica. After the promotion completes, then call the
 *                 <code>DeleteDBInstance</code> API action to delete the final instance in the DB
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBInstanceCommand extends $Command<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBInstanceCommandInput;
    constructor(input: DeleteDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
