import { __extends } from "tslib";
import { GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse } from "../models/models_1";
import { deserializeAws_restJson1GetTopicRuleDestinationCommand, serializeAws_restJson1GetTopicRuleDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a topic rule destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTopicRuleDestinationCommand = /** @class */ (function (_super) {
    __extends(GetTopicRuleDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTopicRuleDestinationCommand(input) {
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
    GetTopicRuleDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetTopicRuleDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTopicRuleDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTopicRuleDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTopicRuleDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTopicRuleDestinationCommand(input, context);
    };
    GetTopicRuleDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTopicRuleDestinationCommand(output, context);
    };
    return GetTopicRuleDestinationCommand;
}($Command));
export { GetTopicRuleDestinationCommand };
//# sourceMappingURL=GetTopicRuleDestinationCommand.js.map