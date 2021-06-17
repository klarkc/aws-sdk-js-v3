import { __extends } from "tslib";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { deserializeAws_queryTagResourceCommand, serializeAws_queryTagResourceCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var TagResourceCommand = /** @class */ (function (_super) {
    __extends(TagResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagResourceCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    TagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "TagResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TagResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryTagResourceCommand(input, context);
    };
    TagResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryTagResourceCommand(output, context);
    };
    return TagResourceCommand;
}($Command));
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map