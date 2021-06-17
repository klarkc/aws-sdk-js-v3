import { __extends } from "tslib";
import { GetTopicRuleRequest, GetTopicRuleResponse } from "../models/models_1";
import { deserializeAws_restJson1GetTopicRuleCommand, serializeAws_restJson1GetTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicRuleCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTopicRuleCommand = /** @class */ (function (_super) {
    __extends(GetTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTopicRuleCommand(input) {
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
    GetTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTopicRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTopicRuleCommand(input, context);
    };
    GetTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTopicRuleCommand(output, context);
    };
    return GetTopicRuleCommand;
}($Command));
export { GetTopicRuleCommand };
//# sourceMappingURL=GetTopicRuleCommand.js.map