import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
/**
 * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
 *                 <i>Amazon SNS Developer Guide</i>.</p>
 *         <p>When you use topic tags, keep the following guidelines in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>Adding more than 50 tags to a topic isn't recommended.</p>
 *             </li>
 *             <li>
 *                 <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character
 *                     strings.</p>
 *             </li>
 *             <li>
 *                 <p>Tags are case-sensitive.</p>
 *             </li>
 *             <li>
 *                 <p>A new tag with a key identical to that of an existing tag overwrites the
 *                     existing tag.</p>
 *             </li>
 *             <li>
 *                 <p>Tagging actions are limited to 10 TPS per AWS account, per AWS region. If your
 *                     application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, TagResourceCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, TagResourceCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, SNSClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
