import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachNetworkInterfaceRequest } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachNetworkInterfaceCommandInput extends DetachNetworkInterfaceRequest {
}
export interface DetachNetworkInterfaceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Detaches a network interface from an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DetachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachNetworkInterfaceCommand extends $Command<DetachNetworkInterfaceCommandInput, DetachNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachNetworkInterfaceCommandInput;
    constructor(input: DetachNetworkInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachNetworkInterfaceCommandInput, DetachNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
