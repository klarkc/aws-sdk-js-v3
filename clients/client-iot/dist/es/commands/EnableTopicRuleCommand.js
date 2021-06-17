import { __extends } from "tslib";
import { EnableTopicRuleRequest } from "../models/models_1";
import { deserializeAws_restJson1EnableTopicRuleCommand, serializeAws_restJson1EnableTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, EnableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, EnableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new EnableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link EnableTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableTopicRuleCommand = /** @class */ (function (_super) {
    __extends(EnableTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableTopicRuleCommand(input) {
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
    EnableTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "EnableTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1EnableTopicRuleCommand(input, context);
    };
    EnableTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1EnableTopicRuleCommand(output, context);
    };
    return EnableTopicRuleCommand;
}($Command));
export { EnableTopicRuleCommand };
//# sourceMappingURL=EnableTopicRuleCommand.js.map