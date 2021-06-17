import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BacktrackDBClusterCommandInput extends BacktrackDBClusterMessage {
}
export interface BacktrackDBClusterCommandOutput extends DBClusterBacktrack, __MetadataBearer {
}
/**
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *         <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new BacktrackDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BacktrackDBClusterCommandInput} for command's `input` shape.
 * @see {@link BacktrackDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BacktrackDBClusterCommand extends $Command<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: BacktrackDBClusterCommandInput;
    constructor(input: BacktrackDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
