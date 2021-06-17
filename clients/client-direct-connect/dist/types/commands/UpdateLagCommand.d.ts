import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Lag, UpdateLagRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLagCommandInput extends UpdateLagRequest {
}
export interface UpdateLagCommandOutput extends Lag, __MetadataBearer {
}
/**
 * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
 *          <p>You can update the following LAG attributes:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The value for the minimum number of connections that must be operational
 *           for the LAG itself to be operational. </p>
 *             </li>
 *             <li>
 *                <p>The LAG's MACsec encryption mode.</p>
 *                <p>AWS assigns this value to each connection which is part of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The tags</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you adjust the threshold value for the minimum number of operational connections, ensure
 *       that the new value does not cause the LAG to fall below the threshold and become
 *       non-operational.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLagCommandInput} for command's `input` shape.
 * @see {@link UpdateLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLagCommand extends $Command<UpdateLagCommandInput, UpdateLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateLagCommandInput;
    constructor(input: UpdateLagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLagCommandInput, UpdateLagCommandOutput>;
    private serialize;
    private deserialize;
}
