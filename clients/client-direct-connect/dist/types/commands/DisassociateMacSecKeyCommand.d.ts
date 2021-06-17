import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMacSecKeyCommandInput extends DisassociateMacSecKeyRequest {
}
export interface DisassociateMacSecKeyCommandOutput extends DisassociateMacSecKeyResponse, __MetadataBearer {
}
/**
 * <p>Removes the association between a MAC Security (MACsec) security key and an AWS Direct Connect dedicated connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DisassociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMacSecKeyCommand extends $Command<DisassociateMacSecKeyCommandInput, DisassociateMacSecKeyCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DisassociateMacSecKeyCommandInput;
    constructor(input: DisassociateMacSecKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMacSecKeyCommandInput, DisassociateMacSecKeyCommandOutput>;
    private serialize;
    private deserialize;
}
