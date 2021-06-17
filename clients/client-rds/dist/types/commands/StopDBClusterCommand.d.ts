import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDBClusterCommandInput extends StopDBClusterMessage {
}
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {
}
/**
 * <p>
 *        Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
 *        metadata, including its endpoints and DB parameter groups. Aurora also
 *        retains the transaction logs so you can do a point-in-time restore if necessary.
 *      </p>
 *
 *          <p>For more information, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
 *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDBClusterCommand extends $Command<StopDBClusterCommandInput, StopDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopDBClusterCommandInput;
    constructor(input: StopDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
