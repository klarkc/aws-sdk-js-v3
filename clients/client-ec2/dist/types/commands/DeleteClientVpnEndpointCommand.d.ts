import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnEndpointRequest, DeleteClientVpnEndpointResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClientVpnEndpointCommandInput extends DeleteClientVpnEndpointRequest {
}
export interface DeleteClientVpnEndpointCommandOutput extends DeleteClientVpnEndpointResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you
 * 			can delete a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClientVpnEndpointCommand extends $Command<DeleteClientVpnEndpointCommandInput, DeleteClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteClientVpnEndpointCommandInput;
    constructor(input: DeleteClientVpnEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClientVpnEndpointCommandInput, DeleteClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
