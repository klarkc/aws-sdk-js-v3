import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTagsRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTagsCommandInput extends CreateTagsRequest {
}
export interface CreateTagsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or overwrites only the specified tags for the specified Amazon EC2 resource or
 *          resources. When you specify an existing tag key, the value is overwritten with
 *          the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and
 *          optional value. Tag keys must be unique per resource.</p>
 *
 *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the
 *             <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
 *          creating IAM policies that control users' access to resources based on tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html">Supported
 *             Resource-Level Permissions for Amazon EC2 API Actions</a> in the <i>Amazon
 *             Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTagsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTagsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTagsCommand extends $Command<CreateTagsCommandInput, CreateTagsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTagsCommandInput;
    constructor(input: CreateTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagsCommandInput, CreateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
