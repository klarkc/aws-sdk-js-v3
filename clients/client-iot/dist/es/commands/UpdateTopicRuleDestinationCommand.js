import { __extends } from "tslib";
import { UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateTopicRuleDestinationCommand, serializeAws_restJson1UpdateTopicRuleDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
 *          confirmation URL of the destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTopicRuleDestinationCommand = /** @class */ (function (_super) {
    __extends(UpdateTopicRuleDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTopicRuleDestinationCommand(input) {
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
    UpdateTopicRuleDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateTopicRuleDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTopicRuleDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTopicRuleDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTopicRuleDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTopicRuleDestinationCommand(input, context);
    };
    UpdateTopicRuleDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTopicRuleDestinationCommand(output, context);
    };
    return UpdateTopicRuleDestinationCommand;
}($Command));
export { UpdateTopicRuleDestinationCommand };
//# sourceMappingURL=UpdateTopicRuleDestinationCommand.js.map