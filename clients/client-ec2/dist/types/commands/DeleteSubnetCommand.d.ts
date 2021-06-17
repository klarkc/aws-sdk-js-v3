import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSubnetRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSubnetCommandInput extends DeleteSubnetRequest {
}
export interface DeleteSubnetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSubnetCommand extends $Command<DeleteSubnetCommandInput, DeleteSubnetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSubnetCommandInput;
    constructor(input: DeleteSubnetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubnetCommandInput, DeleteSubnetCommandOutput>;
    private serialize;
    private deserialize;
}
