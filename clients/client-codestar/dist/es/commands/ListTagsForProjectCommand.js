import { __extends } from "tslib";
import { ListTagsForProjectRequest, ListTagsForProjectResult } from "../models/models_0";
import { deserializeAws_json1_1ListTagsForProjectCommand, serializeAws_json1_1ListTagsForProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the tags for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTagsForProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTagsForProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTagsForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListTagsForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForProjectCommand = /** @class */ (function (_super) {
    __extends(ListTagsForProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForProjectCommand(input) {
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
    ListTagsForProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "ListTagsForProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTagsForProjectCommand(input, context);
    };
    ListTagsForProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTagsForProjectCommand(output, context);
    };
    return ListTagsForProjectCommand;
}($Command));
export { ListTagsForProjectCommand };
//# sourceMappingURL=ListTagsForProjectCommand.js.map