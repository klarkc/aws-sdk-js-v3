import { __extends } from "tslib";
import { CreateDeviceProfileRequest, CreateDeviceProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeviceProfileCommand, serializeAws_restJson1CreateDeviceProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeviceProfileCommand = /** @class */ (function (_super) {
    __extends(CreateDeviceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeviceProfileCommand(input) {
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
    CreateDeviceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "CreateDeviceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeviceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeviceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeviceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeviceProfileCommand(input, context);
    };
    CreateDeviceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeviceProfileCommand(output, context);
    };
    return CreateDeviceProfileCommand;
}($Command));
export { CreateDeviceProfileCommand };
//# sourceMappingURL=CreateDeviceProfileCommand.js.map