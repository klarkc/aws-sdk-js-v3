import { __extends } from "tslib";
import { ListRuleNamesByTargetRequest, ListRuleNamesByTargetResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRuleNamesByTargetCommand, serializeAws_json1_1ListRuleNamesByTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
 *       EventBridge can invoke a specific target in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListRuleNamesByTargetCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListRuleNamesByTargetCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListRuleNamesByTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleNamesByTargetCommandInput} for command's `input` shape.
 * @see {@link ListRuleNamesByTargetCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRuleNamesByTargetCommand = /** @class */ (function (_super) {
    __extends(ListRuleNamesByTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRuleNamesByTargetCommand(input) {
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
    ListRuleNamesByTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "ListRuleNamesByTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRuleNamesByTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRuleNamesByTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRuleNamesByTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRuleNamesByTargetCommand(input, context);
    };
    ListRuleNamesByTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRuleNamesByTargetCommand(output, context);
    };
    return ListRuleNamesByTargetCommand;
}($Command));
export { ListRuleNamesByTargetCommand };
//# sourceMappingURL=ListRuleNamesByTargetCommand.js.map