import { __extends } from "tslib";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTargetsByRuleCommand, serializeAws_json1_1ListTargetsByRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the targets assigned to the specified rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListTargetsByRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListTargetsByRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListTargetsByRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsByRuleCommandInput} for command's `input` shape.
 * @see {@link ListTargetsByRuleCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTargetsByRuleCommand = /** @class */ (function (_super) {
    __extends(ListTargetsByRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTargetsByRuleCommand(input) {
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
    ListTargetsByRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "ListTargetsByRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTargetsByRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTargetsByRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTargetsByRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTargetsByRuleCommand(input, context);
    };
    ListTargetsByRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTargetsByRuleCommand(output, context);
    };
    return ListTargetsByRuleCommand;
}($Command));
export { ListTargetsByRuleCommand };
//# sourceMappingURL=ListTargetsByRuleCommand.js.map