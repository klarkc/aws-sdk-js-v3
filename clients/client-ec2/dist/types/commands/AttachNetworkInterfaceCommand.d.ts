import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachNetworkInterfaceCommandInput extends AttachNetworkInterfaceRequest {
}
export interface AttachNetworkInterfaceCommandOutput extends AttachNetworkInterfaceResult, __MetadataBearer {
}
/**
 * <p>Attaches a network interface to an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AttachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachNetworkInterfaceCommand extends $Command<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachNetworkInterfaceCommandInput;
    constructor(input: AttachNetworkInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
