import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteDhcpOptionsRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDhcpOptionsCommandInput extends DeleteDhcpOptionsRequest {
}
export interface DeleteDhcpOptionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDhcpOptionsCommand extends $Command<DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteDhcpOptionsCommandInput;
    constructor(input: DeleteDhcpOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
