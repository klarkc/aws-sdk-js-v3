import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {
}
export interface RestoreDBClusterToPointInTimeCommandOutput extends RestoreDBClusterToPointInTimeResult, __MetadataBearer {
}
/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
 *             in time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
 *             source DB cluster with the same configuration as the original DB cluster, except that
 *             the new DB cluster is created with the default DB security group. </p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB
 *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                 instances for the restored DB cluster, specifying the identifier of the restored DB
 *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
 *                 cluster is available.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBClusterToPointInTimeCommand extends $Command<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBClusterToPointInTimeCommandInput;
    constructor(input: RestoreDBClusterToPointInTimeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
