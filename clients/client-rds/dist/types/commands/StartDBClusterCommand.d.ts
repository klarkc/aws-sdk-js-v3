import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBClusterMessage, StartDBClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDBClusterCommandInput extends StartDBClusterMessage {
}
export interface StartDBClusterCommandOutput extends StartDBClusterResult, __MetadataBearer {
}
/**
 * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster
 *        AWS CLI command, or the StopDBCluster action.</p>
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
 * import { RDSClient, StartDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBClusterCommandInput} for command's `input` shape.
 * @see {@link StartDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDBClusterCommand extends $Command<StartDBClusterCommandInput, StartDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartDBClusterCommandInput;
    constructor(input: StartDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBClusterCommandInput, StartDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
