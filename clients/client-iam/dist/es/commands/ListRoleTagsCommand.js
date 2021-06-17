import { __extends } from "tslib";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
import { deserializeAws_queryListRoleTagsCommand, serializeAws_queryListRoleTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified role. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRoleTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRoleTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleTagsCommandInput} for command's `input` shape.
 * @see {@link ListRoleTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoleTagsCommand = /** @class */ (function (_super) {
    __extends(ListRoleTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRoleTagsCommand(input) {
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
    ListRoleTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListRoleTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRoleTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRoleTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRoleTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListRoleTagsCommand(input, context);
    };
    ListRoleTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListRoleTagsCommand(output, context);
    };
    return ListRoleTagsCommand;
}($Command));
export { ListRoleTagsCommand };
//# sourceMappingURL=ListRoleTagsCommand.js.map