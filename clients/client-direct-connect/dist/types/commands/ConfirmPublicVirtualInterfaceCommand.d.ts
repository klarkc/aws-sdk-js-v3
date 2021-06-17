import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmPublicVirtualInterfaceRequest, ConfirmPublicVirtualInterfaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmPublicVirtualInterfaceCommandInput extends ConfirmPublicVirtualInterfaceRequest {
}
export interface ConfirmPublicVirtualInterfaceCommandOutput extends ConfirmPublicVirtualInterfaceResponse, __MetadataBearer {
}
/**
 * <p>Accepts ownership of a public virtual interface created by another AWS account.</p>
 *          <p>After the virtual interface owner makes this call, the specified virtual interface is
 *       created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmPublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmPublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmPublicVirtualInterfaceCommand extends $Command<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmPublicVirtualInterfaceCommandInput;
    constructor(input: ConfirmPublicVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
