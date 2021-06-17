import { __extends } from "tslib";
import { UpdateInputDeviceRequest, UpdateInputDeviceResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateInputDeviceCommand, serializeAws_restJson1UpdateInputDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the parameters for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInputDeviceCommand = /** @class */ (function (_super) {
    __extends(UpdateInputDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInputDeviceCommand(input) {
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
    UpdateInputDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateInputDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInputDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInputDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInputDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInputDeviceCommand(input, context);
    };
    UpdateInputDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInputDeviceCommand(output, context);
    };
    return UpdateInputDeviceCommand;
}($Command));
export { UpdateInputDeviceCommand };
//# sourceMappingURL=UpdateInputDeviceCommand.js.map