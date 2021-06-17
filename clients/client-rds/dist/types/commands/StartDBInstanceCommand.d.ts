import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBInstanceMessage, StartDBInstanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDBInstanceCommandInput extends StartDBInstanceMessage {
}
export interface StartDBInstanceCommandOutput extends StartDBInstanceResult, __MetadataBearer {
}
/**
 * <p>
 *             Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action.
 *         </p>
 *
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
 *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *
 *         <note>
 *             <p>
 *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
 *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.
 *           </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBInstanceCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDBInstanceCommand extends $Command<StartDBInstanceCommandInput, StartDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartDBInstanceCommandInput;
    constructor(input: StartDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBInstanceCommandInput, StartDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
