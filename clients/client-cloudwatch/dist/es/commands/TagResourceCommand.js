import { __extends } from "tslib";
import { TagResourceInput, TagResourceOutput } from "../models/models_0";
import { deserializeAws_queryTagResourceCommand, serializeAws_queryTagResourceCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that
 * 			can be tagged are alarms and Contributor Insights rules.</p>
 * 		       <p>Tags can help you organize and categorize your resources. You can also use them to scope user
 * 			permissions by granting a user
 * 			permission to access or change only resources with certain tag values.</p>
 * 		       <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p>
 * 		       <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm,
 * 			this tag is appended to the list of tags associated
 * 			with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
 * 			the previous value for that tag.</p>
 * 		       <p>You can associate as many as 50 tags with a CloudWatch resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, TagResourceCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, TagResourceCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CloudWatchClient";
        var commandName = "TagResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: TagResourceOutput.filterSensitiveLog,
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