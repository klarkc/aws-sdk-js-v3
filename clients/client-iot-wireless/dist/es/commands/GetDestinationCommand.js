import { __extends } from "tslib";
import { GetDestinationRequest, GetDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDestinationCommand, serializeAws_restJson1GetDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDestinationCommandInput} for command's `input` shape.
 * @see {@link GetDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDestinationCommand = /** @class */ (function (_super) {
    __extends(GetDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDestinationCommand(input) {
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
    GetDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDestinationCommand(input, context);
    };
    GetDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDestinationCommand(output, context);
    };
    return GetDestinationCommand;
}($Command));
export { GetDestinationCommand };
//# sourceMappingURL=GetDestinationCommand.js.map