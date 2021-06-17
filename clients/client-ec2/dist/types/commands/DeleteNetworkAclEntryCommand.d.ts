import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkAclEntryRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNetworkAclEntryCommandInput extends DeleteNetworkAclEntryRequest {
}
export interface DeleteNetworkAclEntryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNetworkAclEntryCommand extends $Command<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkAclEntryCommandInput;
    constructor(input: DeleteNetworkAclEntryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput>;
    private serialize;
    private deserialize;
}
