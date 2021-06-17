import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClientVpnEndpointCommandInput extends ModifyClientVpnEndpointRequest {
}
export interface ModifyClientVpnEndpointCommandOutput extends ModifyClientVpnEndpointResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClientVpnEndpointCommand extends $Command<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyClientVpnEndpointCommandInput;
    constructor(input: ModifyClientVpnEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
