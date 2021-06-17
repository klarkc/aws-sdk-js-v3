import { __extends } from "tslib";
import { DeleteConfigurationSetEventDestinationRequest, DeleteConfigurationSetEventDestinationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand, serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes an event destination in a configuration set.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, DeleteConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, DeleteConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new DeleteConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationSetEventDestinationCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetEventDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationSetEventDestinationCommand(input) {
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
    DeleteConfigurationSetEventDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "DeleteConfigurationSetEventDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationSetEventDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConfigurationSetEventDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationSetEventDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(input, context);
    };
    DeleteConfigurationSetEventDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(output, context);
    };
    return DeleteConfigurationSetEventDestinationCommand;
}($Command));
export { DeleteConfigurationSetEventDestinationCommand };
//# sourceMappingURL=DeleteConfigurationSetEventDestinationCommand.js.map