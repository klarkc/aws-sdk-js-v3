import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInterfaceRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNetworkInterfaceCommandInput extends DeleteNetworkInterfaceRequest {
}
export interface DeleteNetworkInterfaceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified network interface. You must detach the network interface before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNetworkInterfaceCommand extends $Command<DeleteNetworkInterfaceCommandInput, DeleteNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkInterfaceCommandInput;
    constructor(input: DeleteNetworkInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkInterfaceCommandInput, DeleteNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
