import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {
}
export interface RestoreDBClusterToPointInTimeCommandOutput extends RestoreDBClusterToPointInTimeResult, __MetadataBearer {
}
/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
 *       time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code>
 *       days. The target DB cluster is created from the source DB cluster with the same configuration
 *       as the original DB cluster, except that the new DB cluster is created with the default DB
 *       security group.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You
 *         must invoke the <a>CreateDBInstance</a> action to create DB instances for the
 *         restored DB cluster, specifying the identifier of the restored DB cluster in
 *         <code>DBClusterIdentifier</code>. You can create DB instances only after the
 *         <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is
 *         available.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBClusterToPointInTimeCommand extends $Command<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: RestoreDBClusterToPointInTimeCommandInput;
    constructor(input: RestoreDBClusterToPointInTimeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
