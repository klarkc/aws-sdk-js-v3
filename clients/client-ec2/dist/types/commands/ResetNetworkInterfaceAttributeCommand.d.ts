import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetNetworkInterfaceAttributeRequest } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetNetworkInterfaceAttributeCommandInput extends ResetNetworkInterfaceAttributeRequest {
}
export interface ResetNetworkInterfaceAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Resets a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetNetworkInterfaceAttributeCommand extends $Command<ResetNetworkInterfaceAttributeCommandInput, ResetNetworkInterfaceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetNetworkInterfaceAttributeCommandInput;
    constructor(input: ResetNetworkInterfaceAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetNetworkInterfaceAttributeCommandInput, ResetNetworkInterfaceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
