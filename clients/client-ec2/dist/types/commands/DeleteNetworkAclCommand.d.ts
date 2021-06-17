import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkAclRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNetworkAclCommandInput extends DeleteNetworkAclRequest {
}
export interface DeleteNetworkAclCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkAclCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNetworkAclCommand extends $Command<DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkAclCommandInput;
    constructor(input: DeleteNetworkAclCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput>;
    private serialize;
    private deserialize;
}
