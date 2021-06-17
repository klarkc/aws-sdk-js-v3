import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateSecurityKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateSecurityKeyCommandInput extends DisassociateSecurityKeyRequest {
}
export interface DisassociateSecurityKeyCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes the specified security key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateSecurityKeyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateSecurityKeyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateSecurityKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSecurityKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityKeyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateSecurityKeyCommand extends $Command<DisassociateSecurityKeyCommandInput, DisassociateSecurityKeyCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DisassociateSecurityKeyCommandInput;
    constructor(input: DisassociateSecurityKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSecurityKeyCommandInput, DisassociateSecurityKeyCommandOutput>;
    private serialize;
    private deserialize;
}
