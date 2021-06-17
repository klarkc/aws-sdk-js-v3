import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, UpdateConnectionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {
}
export interface UpdateConnectionCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Updates the AWS Direct Connect dedicated connection configuration.</p>
 *          <p>You can update the following parameters for a connection:</p>
 *          <ul>
 *             <li>
 *                <p>The connection name</p>
 *             </li>
 *             <li>
 *                <p>The connection's MAC Security (MACsec) encryption mode.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConnectionCommand extends $Command<UpdateConnectionCommandInput, UpdateConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateConnectionCommandInput;
    constructor(input: UpdateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
