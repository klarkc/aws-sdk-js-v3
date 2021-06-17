import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmConnectionRequest, ConfirmConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmConnectionCommandInput extends ConfirmConnectionRequest {
}
export interface ConfirmConnectionCommandOutput extends ConfirmConnectionResponse, __MetadataBearer {
}
/**
 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
 *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
 *       remains in this state until the owner confirms creation of the hosted connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmConnectionCommandInput} for command's `input` shape.
 * @see {@link ConfirmConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmConnectionCommand extends $Command<ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmConnectionCommandInput;
    constructor(input: ConfirmConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
