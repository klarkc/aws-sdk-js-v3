import { __extends } from "tslib";
import { ResetAllResourceLogLevelsRequest, ResetAllResourceLogLevelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ResetAllResourceLogLevelsCommand, serializeAws_restJson1ResetAllResourceLogLevelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove log-level overrides if any for all resources (both wireless devices and wireless gateways).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetAllResourceLogLevelsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetAllResourceLogLevelsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetAllResourceLogLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAllResourceLogLevelsCommandInput} for command's `input` shape.
 * @see {@link ResetAllResourceLogLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetAllResourceLogLevelsCommand = /** @class */ (function (_super) {
    __extends(ResetAllResourceLogLevelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetAllResourceLogLevelsCommand(input) {
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
    ResetAllResourceLogLevelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "ResetAllResourceLogLevelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetAllResourceLogLevelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetAllResourceLogLevelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetAllResourceLogLevelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ResetAllResourceLogLevelsCommand(input, context);
    };
    ResetAllResourceLogLevelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ResetAllResourceLogLevelsCommand(output, context);
    };
    return ResetAllResourceLogLevelsCommand;
}($Command));
export { ResetAllResourceLogLevelsCommand };
//# sourceMappingURL=ResetAllResourceLogLevelsCommand.js.map