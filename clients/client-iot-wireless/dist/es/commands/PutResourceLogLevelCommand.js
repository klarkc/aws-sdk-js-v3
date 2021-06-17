import { __extends } from "tslib";
import { PutResourceLogLevelRequest, PutResourceLogLevelResponse } from "../models/models_0";
import { deserializeAws_restJson1PutResourceLogLevelCommand, serializeAws_restJson1PutResourceLogLevelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the log-level override for a resource-ID and resource-type, could be a wireless gateway or a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, PutResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new PutResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link PutResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutResourceLogLevelCommand = /** @class */ (function (_super) {
    __extends(PutResourceLogLevelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutResourceLogLevelCommand(input) {
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
    PutResourceLogLevelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "PutResourceLogLevelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutResourceLogLevelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutResourceLogLevelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutResourceLogLevelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutResourceLogLevelCommand(input, context);
    };
    PutResourceLogLevelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutResourceLogLevelCommand(output, context);
    };
    return PutResourceLogLevelCommand;
}($Command));
export { PutResourceLogLevelCommand };
//# sourceMappingURL=PutResourceLogLevelCommand.js.map