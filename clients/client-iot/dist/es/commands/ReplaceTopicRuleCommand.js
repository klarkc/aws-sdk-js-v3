import { __extends } from "tslib";
import { ReplaceTopicRuleRequest } from "../models/models_2";
import { deserializeAws_restJson1ReplaceTopicRuleCommand, serializeAws_restJson1ReplaceTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules
 *          is an administrator-level action. Any user who has permission to create rules will be able
 *          to access data processed by the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ReplaceTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ReplaceTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ReplaceTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceTopicRuleCommandInput} for command's `input` shape.
 * @see {@link ReplaceTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceTopicRuleCommand = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceTopicRuleCommand(input) {
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
    ReplaceTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ReplaceTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ReplaceTopicRuleCommand(input, context);
    };
    ReplaceTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ReplaceTopicRuleCommand(output, context);
    };
    return ReplaceTopicRuleCommand;
}($Command));
export { ReplaceTopicRuleCommand };
//# sourceMappingURL=ReplaceTopicRuleCommand.js.map