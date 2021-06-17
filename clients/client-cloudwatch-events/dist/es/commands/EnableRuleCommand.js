import { __extends } from "tslib";
import { EnableRuleRequest } from "../models/models_0";
import { deserializeAws_json1_1EnableRuleCommand, serializeAws_json1_1EnableRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p>
 *
 *          <p>When you enable a rule, incoming events might not immediately start matching to a newly
 *       enabled rule. Allow a short period of time for changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, EnableRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, EnableRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new EnableRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableRuleCommandInput} for command's `input` shape.
 * @see {@link EnableRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableRuleCommand = /** @class */ (function (_super) {
    __extends(EnableRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableRuleCommand(input) {
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
    EnableRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "EnableRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableRuleCommand(input, context);
    };
    EnableRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableRuleCommand(output, context);
    };
    return EnableRuleCommand;
}($Command));
export { EnableRuleCommand };
//# sourceMappingURL=EnableRuleCommand.js.map