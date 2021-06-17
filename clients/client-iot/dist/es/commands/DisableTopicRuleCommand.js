import { __extends } from "tslib";
import { DisableTopicRuleRequest } from "../models/models_1";
import { deserializeAws_restJson1DisableTopicRuleCommand, serializeAws_restJson1DisableTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DisableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DisableTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableTopicRuleCommand = /** @class */ (function (_super) {
    __extends(DisableTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableTopicRuleCommand(input) {
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
    DisableTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DisableTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisableTopicRuleCommand(input, context);
    };
    DisableTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisableTopicRuleCommand(output, context);
    };
    return DisableTopicRuleCommand;
}($Command));
export { DisableTopicRuleCommand };
//# sourceMappingURL=DisableTopicRuleCommand.js.map