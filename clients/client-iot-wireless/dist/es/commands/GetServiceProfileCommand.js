import { __extends } from "tslib";
import { GetServiceProfileRequest, GetServiceProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetServiceProfileCommand, serializeAws_restJson1GetServiceProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetServiceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceProfileCommandInput} for command's `input` shape.
 * @see {@link GetServiceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceProfileCommand = /** @class */ (function (_super) {
    __extends(GetServiceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceProfileCommand(input) {
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
    GetServiceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetServiceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetServiceProfileCommand(input, context);
    };
    GetServiceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetServiceProfileCommand(output, context);
    };
    return GetServiceProfileCommand;
}($Command));
export { GetServiceProfileCommand };
//# sourceMappingURL=GetServiceProfileCommand.js.map