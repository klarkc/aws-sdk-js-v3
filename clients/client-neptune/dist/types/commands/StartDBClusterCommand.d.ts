import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { StartDBClusterMessage, StartDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDBClusterCommandInput extends StartDBClusterMessage {
}
export interface StartDBClusterCommandOutput extends StartDBClusterResult, __MetadataBearer {
}
/**
 * <p>Starts an Amazon Neptune  DB cluster that was stopped using the AWS
 *       console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, StartDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, StartDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new StartDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBClusterCommandInput} for command's `input` shape.
 * @see {@link StartDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDBClusterCommand extends $Command<StartDBClusterCommandInput, StartDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: StartDBClusterCommandInput;
    constructor(input: StartDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBClusterCommandInput, StartDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
