import { __extends } from "tslib";
import { GetServiceEndpointRequest, GetServiceEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1GetServiceEndpointCommand, serializeAws_restJson1GetServiceEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceEndpointCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceEndpointCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetServiceEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceEndpointCommandInput} for command's `input` shape.
 * @see {@link GetServiceEndpointCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceEndpointCommand = /** @class */ (function (_super) {
    __extends(GetServiceEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceEndpointCommand(input) {
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
    GetServiceEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetServiceEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetServiceEndpointCommand(input, context);
    };
    GetServiceEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetServiceEndpointCommand(output, context);
    };
    return GetServiceEndpointCommand;
}($Command));
export { GetServiceEndpointCommand };
//# sourceMappingURL=GetServiceEndpointCommand.js.map