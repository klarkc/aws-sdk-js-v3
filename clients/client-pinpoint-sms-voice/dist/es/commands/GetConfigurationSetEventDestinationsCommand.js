import { __extends } from "tslib";
import { GetConfigurationSetEventDestinationsRequest, GetConfigurationSetEventDestinationsResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand, serializeAws_restJson1GetConfigurationSetEventDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, GetConfigurationSetEventDestinationsCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, GetConfigurationSetEventDestinationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new GetConfigurationSetEventDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationSetEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetEventDestinationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigurationSetEventDestinationsCommand = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConfigurationSetEventDestinationsCommand(input) {
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
    GetConfigurationSetEventDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "GetConfigurationSetEventDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConfigurationSetEventDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConfigurationSetEventDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConfigurationSetEventDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConfigurationSetEventDestinationsCommand(input, context);
    };
    GetConfigurationSetEventDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand(output, context);
    };
    return GetConfigurationSetEventDestinationsCommand;
}($Command));
export { GetConfigurationSetEventDestinationsCommand };
//# sourceMappingURL=GetConfigurationSetEventDestinationsCommand.js.map