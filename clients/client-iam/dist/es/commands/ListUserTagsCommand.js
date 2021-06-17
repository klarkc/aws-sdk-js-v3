import { __extends } from "tslib";
import { ListUserTagsRequest, ListUserTagsResponse } from "../models/models_0";
import { deserializeAws_queryListUserTagsCommand, serializeAws_queryListUserTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListUserTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserTagsCommandInput} for command's `input` shape.
 * @see {@link ListUserTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserTagsCommand = /** @class */ (function (_super) {
    __extends(ListUserTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserTagsCommand(input) {
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
    ListUserTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListUserTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListUserTagsCommand(input, context);
    };
    ListUserTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListUserTagsCommand(output, context);
    };
    return ListUserTagsCommand;
}($Command));
export { ListUserTagsCommand };
//# sourceMappingURL=ListUserTagsCommand.js.map