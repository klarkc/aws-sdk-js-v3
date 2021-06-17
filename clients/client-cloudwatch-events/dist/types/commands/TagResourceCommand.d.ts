import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
/**
 * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can
 *       help you organize and categorize your resources. You can also use them to scope user
 *       permissions by granting a user permission to access or change only resources with certain tag
 *       values. In EventBridge, rules and event buses can be tagged.</p>
 *          <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of
 *       characters.</p>
 *          <p>You can use the <code>TagResource</code> action with a resource that already has tags. If
 *       you specify a new tag key, this tag is appended to the list of tags associated with the
 *       resource. If you specify a tag key that is already associated with the resource, the new tag
 *       value that you specify replaces the previous value for that tag.</p>
 *          <p>You can associate as many as 50 tags with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, TagResourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, TagResourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
