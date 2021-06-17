import { __extends } from "tslib";
import { UpdateConfigurationSetEventDestinationRequest, UpdateConfigurationSetEventDestinationResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand, serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new UpdateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConfigurationSetEventDestinationCommand = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConfigurationSetEventDestinationCommand(input) {
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
    UpdateConfigurationSetEventDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "UpdateConfigurationSetEventDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConfigurationSetEventDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConfigurationSetEventDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConfigurationSetEventDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand(input, context);
    };
    UpdateConfigurationSetEventDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand(output, context);
    };
    return UpdateConfigurationSetEventDestinationCommand;
}($Command));
export { UpdateConfigurationSetEventDestinationCommand };
//# sourceMappingURL=UpdateConfigurationSetEventDestinationCommand.js.map